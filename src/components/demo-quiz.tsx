"use client";

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import Link from 'next/link';
import { getTutorialState, saveTutorialState, type ErrorRecord } from '@/lib/storage';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import LinguaLearnLogo from '@/components/LinguaLearnLogo';
import { Clock, Pause, Home, RefreshCw, Play } from 'lucide-react';
import DemoQuizResults from './demo-quiz-results';
import { playSound } from '@/lib/sounds';
import { vibrate } from '@/lib/vibrations';

const demoQuestions = [
    { id: 1, word: 'Hello', options: ['Do widzenia', 'Cześć', 'Dziękuję', 'Przepraszam'], correctAnswer: 'Cześć' },
    { id: 2, word: 'Throughout', options: ['Na zewnątrz', 'Pod spodem', 'Wewnątrz', 'Przez cały (czas)'], correctAnswer: 'Przez cały (czas)' },
    { id: 3, word: 'Impeccable', options: ['Zwykły', 'Nieskazitelny', 'Brudny', 'Niedbały'], correctAnswer: 'Nieskazitelny' },
];

const QUESTION_TIME_LIMIT = 15;
const PAUSE_PENALTY = 5;

function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default function DemoQuiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [answerStatus, setAnswerStatus] = useState<"correct" | "incorrect" | "timeout" | null>(null);
    const [questionTimer, setQuestionTimer] = useState(QUESTION_TIME_LIMIT);
    const [totalTime, setTotalTime] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [sessionErrors, setSessionErrors] = useState<Omit<ErrorRecord, 'id'>[]>([]);
    
    const [activeTutorialStep, setActiveTutorialStep] = useState<number | null>(null);
    const prevActiveTutorialStep = usePrevious(activeTutorialStep);
    
    const [isQuizActive, setIsQuizActive] = useState(false);

    const currentQuestion = useMemo(() => demoQuestions[currentQuestionIndex], [currentQuestionIndex]);
    const shuffledOptions = useMemo(() => currentQuestion ? shuffleArray(currentQuestion.options) : [], [currentQuestion]);
    
    const resetQuestionState = useCallback(() => {
        setSelectedAnswer(null);
        setAnswerStatus(null);
        setQuestionTimer(QUESTION_TIME_LIMIT);
    }, []);

    const handleNextQuestion = useCallback(() => {
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < demoQuestions.length) {
            setCurrentQuestionIndex(nextIndex);
            resetQuestionState();
            setIsQuizActive(true);
        } else {
            setCurrentQuestionIndex(demoQuestions.length);
            setIsQuizActive(false);
            saveTutorialState({ isActive: true, stage: 'quiz', step: 30 });
        }
    }, [currentQuestionIndex, resetQuestionState]);

    const restartQuiz = useCallback(() => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setTotalTime(0);
        setIsPaused(false);
        setSessionErrors([]);
        resetQuestionState();
        setIsQuizActive(false);
        saveTutorialState({ isActive: true, stage: 'quiz', step: 26 });
    }, [resetQuestionState]);

    useEffect(() => {
        const handleStateUpdate = () => {
            const state = getTutorialState();
            if (state?.stage === 'quiz') {
                const newStep = state.step;
                
                if (prevActiveTutorialStep === 27 && newStep === 28) {
                    setIsQuizActive(true);
                } else if ((prevActiveTutorialStep === 28 && newStep === 29) || (prevActiveTutorialStep === 29 && newStep === 30)) {
                    handleNextQuestion();
                } else {
                    setIsQuizActive(false);
                }
                 setActiveTutorialStep(newStep);
            }
        };

        handleStateUpdate();
        window.addEventListener('tutorial-state-changed', handleStateUpdate);
        return () => window.removeEventListener('tutorial-state-changed', handleStateUpdate);
    }, [prevActiveTutorialStep, handleNextQuestion]);

    useEffect(() => {
        if (!isQuizActive || isPaused || !!answerStatus) {
            return;
        }
        
        const interval = setInterval(() => {
            setQuestionTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    if (!answerStatus) {
                         setAnswerStatus("timeout");
                         handleAnswerClick(null);
                    }
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isQuizActive, isPaused, answerStatus]);
    
    useEffect(() => {
        if (isQuizActive && !isPaused && currentQuestionIndex < demoQuestions.length && !answerStatus) {
            const interval = setInterval(() => {
                setTotalTime(prev => prev + 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isQuizActive, isPaused, currentQuestionIndex, answerStatus]);


    const handleAnswerClick = (answer: string | null) => {
        if (answerStatus) return;
        
        if (currentQuestionIndex === 0 && answer !== currentQuestion.correctAnswer && answer !== null) {
            return;
        }
        
        setIsQuizActive(false);
        setSelectedAnswer(answer);

        let isCorrect = answer === currentQuestion.correctAnswer;
        
        // Force incorrect answer on Q3 if Q2 was correct
        if (currentQuestionIndex === 2 && isCorrect && sessionErrors.length === 0) {
            const wrongAnswer = currentQuestion.options.find(o => o !== currentQuestion.correctAnswer)!;
            setSelectedAnswer(wrongAnswer);
            isCorrect = false;
        }

        if (isCorrect) {
            setAnswerStatus("correct");
            playSound('correct');
            vibrate('correct');
            setScore(prev => prev + 1);
            saveTutorialState({ isActive: true, stage: 'quiz', step: 28 });
        } else {
            setAnswerStatus("incorrect");
            playSound('incorrect');
            vibrate('incorrect');
            const errorRecord = {
                word: currentQuestion.word,
                userAnswer: answer || "Brak odpowiedzi",
                correctAnswer: currentQuestion.correctAnswer,
                quiz: 'Demo Quiz',
            };
            setSessionErrors(prev => [...prev, errorRecord]);
            saveTutorialState({ isActive: true, stage: 'quiz', step: 29 });
        }
    };


    const handlePauseClick = () => {
        if (isQuizActive) {
            setIsPaused(prev => !prev);
            if (isPaused && questionTimer > PAUSE_PENALTY) {
                setQuestionTimer(prev => Math.max(0, prev - PAUSE_PENALTY));
            }
        }
    };

    const getButtonClass = (option: string) => {
        if (answerStatus) {
            const isCorrectAnswer = option === currentQuestion.correctAnswer;
            const isSelectedAnswer = option === selectedAnswer;

            if (answerStatus === 'timeout' && isCorrectAnswer) {
                return "bg-success text-success-foreground hover:bg-success/90";
            }
            if (isCorrectAnswer) return "bg-success text-success-foreground";
            if (isSelectedAnswer) return "bg-destructive text-destructive-foreground";
            return "bg-muted text-muted-foreground opacity-70";
        }
        return "bg-primary text-primary-foreground hover:bg-primary/90";
    };

    if (currentQuestionIndex >= demoQuestions.length) {
        return (
            <DemoQuizResults 
                score={score}
                totalQuestions={demoQuestions.length}
                totalTime={totalTime}
                sessionErrors={sessionErrors}
                quizName="Demo Quiz"
                onRestart={restartQuiz}
            />
        );
    }

    const formatTime = (seconds: number) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    const overallProgress = ((currentQuestionIndex + 1) / demoQuestions.length) * 100;
    const questionTimeProgress = (questionTimer / QUESTION_TIME_LIMIT) * 100;

    return (
        <>
            <Card className="w-full max-w-lg shadow-2xl">
                <CardHeader className="text-center pb-2">
                    <div className="flex items-center justify-center gap-2">
                        <LinguaLearnLogo className="h-8 w-8" />
                        <CardTitle className="text-3xl font-bold tracking-tight">
                            Lingua<span className="relative inline-block">Learn<span className="absolute -right-0.5 -bottom-3 text-sm font-semibold tracking-normal text-amber">Lite</span></span>
                        </CardTitle>
                    </div>
                    <CardDescription className="pt-2">Wybierz poprawną odpowiedź</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-8">
                    <div data-tutorial-id="quiz-timer" className="w-full space-y-4">
                        <div className="w-full flex justify-around gap-4 text-center">
                            <div className="flex items-center gap-2">
                                <Clock className="h-6 w-6" />
                                <span className="text-2xl font-bold">{questionTimer}s</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-6 w-6" />
                                <span className="text-2xl font-bold">{formatTime(totalTime)}</span>
                            </div>
                        </div>
                        <Progress value={questionTimeProgress} className="w-full h-2" />
                    </div>

                    <div className="text-center space-y-2">
                        <p className="text-muted-foreground">What is the Polish meaning of</p>
                        <p className={cn(
                            "font-headline font-bold",
                            currentQuestion.word.length > 15 ? "text-3xl" : "text-4xl"
                        )}>"{currentQuestion.word}"?</p>
                    </div>
                    
                    <div
                        data-tutorial-id={
                           answerStatus === "correct"
                                ? 'quiz-correct-answer'
                                : answerStatus === 'incorrect' || answerStatus === 'timeout'
                                ? 'quiz-incorrect-answer'
                                : undefined
                        }
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
                    >
                        {shuffledOptions.map((option) => (
                            <Button
                                key={option}
                                onClick={() => handleAnswerClick(option)}
                                className={cn(
                                    "h-auto text-lg p-4 whitespace-normal transition-all duration-300", 
                                    getButtonClass(option)
                                )}
                            >
                                {option}
                            </Button>
                        ))}
                    </div>
                    <div className="flex justify-center gap-4 w-full pt-4 border-t">
                        <Button variant="outline" size="icon" className="pointer-events-none opacity-50"><Home /></Button>
                        <Button variant="outline" size="icon" className="pointer-events-none opacity-50"><RefreshCw /></Button>
                        <div data-tutorial-id="quiz-pause-button">
                            <Button variant="outline" size="icon" onClick={handlePauseClick}>
                                {isPaused ? <Play /> : <Pause />}
                            </Button>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex-col gap-4 p-6 pt-0">
                    <div className="flex justify-between w-full items-center">
                        <div className="text-sm text-muted-foreground">
                            Pytanie {currentQuestionIndex + 1} z {demoQuestions.length}
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">Punkty:</span>
                            <div className="text-2xl font-bold text-primary">
                                {score}
                            </div>
                        </div>
                    </div>
                    <Progress value={overallProgress} className="w-full h-2" />
                </CardFooter>
            </Card>
        </>
    );
}