"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { getTutorialState, saveTutorialState, type ErrorRecord } from '@/lib/storage';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import LinguaLearnLogo from '@/components/LinguaLearnLogo';
import { Clock, Pause, Home, RefreshCw, Play } from 'lucide-react';
import DemoQuizResults from './demo-quiz-results';

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const demoQuestions = [
    { id: 1, word: 'Hello', options: ['Do widzenia', 'Cześć', 'Dziękuję', 'Przepraszam'], correctAnswer: 'Cześć' },
    { id: 2, word: 'Throughout', options: ['Na zewnątrz', 'Pod spodem', 'Wewnątrz', 'Przez cały (czas)'], correctAnswer: 'Przez cały (czas)' },
];

const QUESTION_TIME_LIMIT = 15;

export default function DemoQuiz() {
    const [activeTutorialStep, setActiveTutorialStep] = useState<number | null>(null);
    const [view, setView] = useState<'question1' | 'correct' | 'incorrect' | 'results'>('question1');
    const [isPaused, setIsPaused] = useState(false);
    
    // States for timers
    const [questionTimer, setQuestionTimer] = useState(QUESTION_TIME_LIMIT);
    const [totalTime, setTotalTime] = useState(86); // Start at 1:26

    useEffect(() => {
        const handleStateUpdate = () => {
            const state = getTutorialState();
            if (state?.stage === 'quiz') {
                const newStep = state.step;
                setActiveTutorialStep(newStep);
                
                if (newStep <= 1) setView('question1');
                else if (newStep === 2) setView('correct');
                else if (newStep === 3) setView('incorrect');
                else if (newStep >= 4) setView('results');

                if (newStep === 1) setIsPaused(true);
                else setIsPaused(false);
            }
        };

        window.addEventListener('tutorial-state-changed', handleStateUpdate);
        handleStateUpdate();
        return () => window.removeEventListener('tutorial-state-changed', handleStateUpdate);
    }, []);

    // Effect for the timer animations on slide 26
    useEffect(() => {
        if (activeTutorialStep === 0 && !isPaused) {
            const interval = setInterval(() => {
                setQuestionTimer(prev => (prev > 0 ? prev - 1 : QUESTION_TIME_LIMIT));
                setTotalTime(prev => prev + 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [activeTutorialStep, isPaused]);
    
    const currentQuestion = useMemo(() => {
        return view === 'incorrect' ? demoQuestions[1] : demoQuestions[0];
    }, [view]);

    const shuffledOptions = useMemo(() => currentQuestion ? shuffleArray(currentQuestion.options) : [], [currentQuestion]);
    
    const restartQuiz = useCallback(() => {
        saveTutorialState({ isActive: true, stage: 'quiz', step: 0 });
    }, []);

    const getButtonClass = (option: string) => {
        if (view === 'correct') {
            return option === currentQuestion.correctAnswer 
                ? "bg-success text-success-foreground" 
                : "bg-primary text-primary-foreground hover:bg-primary/90";
        }
        if (view === 'incorrect') {
            if (option === currentQuestion.correctAnswer) return "bg-success text-success-foreground";
            if (option === 'Na zewnątrz') return "bg-destructive text-destructive-foreground";
            return "bg-primary text-primary-foreground hover:bg-primary/90";
        }
        return "bg-primary text-primary-foreground hover:bg-primary/90";
    };

    if (view === 'results') {
        return (
            <DemoQuizResults 
                score={1}
                totalQuestions={2}
                totalTime={totalTime}
                sessionErrors={[{ word: 'Throughout', userAnswer: 'Na zewnątrz', correctAnswer: 'Przez cały (czas)', quiz: 'Demo Quiz' }]}
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

    const overallProgress = view === 'question1' || view === 'correct' ? 50 : 100;
    
    // Use the state for the timer, but display a static value if not on the first slide
    const displayQuestionTimer = activeTutorialStep === 0 ? questionTimer : isPaused ? 10 : 15;
    const displayTotalTime = activeTutorialStep === 0 ? totalTime : view === 'question1' || view === 'correct' ? 11 : 26;

    const questionTimeProgress = (displayQuestionTimer / QUESTION_TIME_LIMIT) * 100;

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
                                <span className="text-2xl font-bold">{displayQuestionTimer}s</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-6 w-6" />
                                <span className="text-2xl font-bold">{formatTime(displayTotalTime)}</span>
                            </div>
                        </div>
                        <Progress value={questionTimeProgress} className="w-full h-2" />
                    </div>

                    <div className="text-center space-y-2">
                        <p className="text-muted-foreground">What is the Polish meaning of</p>
                        <p className={cn("font-headline font-bold", currentQuestion.word.length > 15 ? "text-3xl" : "text-4xl")}>
                            "{currentQuestion.word}"?
                        </p>
                    </div>
                    
                    <div
                        data-tutorial-id={
                            view === "correct" ? 'quiz-correct-answer' : view === 'incorrect' ? 'quiz-incorrect-answer' : undefined
                        }
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
                    >
                        {shuffledOptions.map((option: string) => (
                            <Button
                                key={option}
                                className={cn("h-auto text-lg p-4 whitespace-normal transition-all duration-300", getButtonClass(option))}
                            >
                                {option}
                            </Button>
                        ))}
                    </div>
                    <div className="flex justify-center gap-4 w-full pt-4 border-t">
                        <Button variant="outline" size="icon" className="pointer-events-none opacity-50"><Home /></Button>
                        <Button variant="outline" size="icon" className="pointer-events-none opacity-50"><RefreshCw /></Button>
                        <div data-tutorial-id="quiz-pause-button">
                            <Button variant="outline" size="icon">
                                {isPaused ? <Play /> : <Pause />}
                            </Button>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex-col gap-4 p-6 pt-0">
                    <div className="flex justify-between w-full items-center">
                        <div className="text-sm text-muted-foreground">
                           Pytanie {view === 'question1' || view === 'correct' ? 1 : 2} z {demoQuestions.length}
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">Punkty:</span>
                            <div className="text-2xl font-bold text-primary">
                                {view === 'question1' || view === 'correct' ? 0 : 1}
                            </div>
                        </div>
                    </div>
                    <Progress value={overallProgress} className="w-full h-2" />
                </CardFooter>
            </Card>
        </>
    );
}
