"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { Home, RefreshCw, Pause, Play, Clock, Trophy } from "lucide-react";
import { type Question } from "@/lib/questions-en-pl";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import LinguaLearnLogo from '@/components/LinguaLearnLogo';
import { getTutorialState, saveTutorialState, type ErrorRecord } from "@/lib/storage";
import QuizResults from "./quiz-results";

const tutorialQuestions: Question[] = [
    { id: 999, language: 'English', word: 'Hello', options: ['Cześć', 'Do widzenia', 'Dziękuję', 'Przepraszam'], correctAnswer: 'Cześć' },
    { id: 998, language: 'English', word: 'Reliable', options: ['Religijny', 'Niezawodny', 'Niepewny', 'Zmienny'], correctAnswer: 'Niezawodny' },
    { id: 997, language: 'English', word: 'Conscientious', options: ['Sumienny', 'Niedbały', 'Leniwy', 'Powierzchowny'], correctAnswer: 'Sumienny' },
];

function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export default function DemoQuiz() {
    const [tutorialStep, setTutorialStep] = useState<number | null>(null);
    const [questions] = useState(tutorialQuestions);
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
    
    const [answerStatus, setAnswerStatus] = useState<"correct" | "incorrect" | null>(null);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    
    const [isFinished, setIsFinished] = useState(false);
    const [score, setScore] = useState(0);

    const restartQuiz = useCallback(() => {
        saveTutorialState({ isActive: true, stage: 'quiz', step: 0 });
    }, []);

    useEffect(() => {
        const handleStateUpdate = () => {
            const state = getTutorialState();
            const step = state?.stage === 'quiz' ? state.step : null;
            setTutorialStep(step);
            
            setIsFinished(step !== null && step >= 4);

            if (step === 2) {
                setCurrentQuestion(questions[0]);
                setAnswerStatus('correct');
                setSelectedAnswer(questions[0].correctAnswer);
                setScore(1);
            } else if (step === 3) {
                setCurrentQuestion(questions[1]);
                const incorrectAnswer = questions[1].options.find(o => o !== questions[1].correctAnswer)!;
                setAnswerStatus('incorrect');
                setSelectedAnswer(incorrectAnswer);
            } else {
                setCurrentQuestion(step === 1 || step === 0 ? questions[0] : questions[1]);
                setAnswerStatus(null);
                setSelectedAnswer(null);
            }
        };

        window.addEventListener('tutorial-state-changed', handleStateUpdate);
        handleStateUpdate();
        return () => window.removeEventListener('tutorial-state-changed', handleStateUpdate);
    }, [questions]);
    
    useEffect(() => {
        if (currentQuestion) {
            setShuffledOptions(shuffleArray(currentQuestion.options));
        }
    }, [currentQuestion]);
    
    const getButtonClass = (option: string) => {
        if (!answerStatus) return "bg-primary text-primary-foreground hover:bg-primary/90";
        
        const isCorrectAnswer = option === currentQuestion.correctAnswer;
        const isSelectedAnswer = option === selectedAnswer;

        if (isCorrectAnswer) {
            return "bg-success text-success-foreground disabled:opacity-100";
        }
        if (isSelectedAnswer) {
            return "bg-destructive text-destructive-foreground disabled:opacity-100";
        }
        return "bg-muted text-muted-foreground opacity-70 cursor-not-allowed";
    };

    if (isFinished) {
        const fakeErrors: Omit<ErrorRecord, 'id'>[] = [
            { quiz: 'Tutorial Quiz', word: 'Reliable', userAnswer: 'Religijny', correctAnswer: 'Niezawodny' }
        ];

        return (
            <QuizResults
                score={score}
                totalQuestions={2}
                totalTime={42}
                sessionErrors={fakeErrors}
                quizName={"Tutorial"}
                onRestart={restartQuiz}
                isTutorialMode={true}
            />
        );
    }
    
    if (!currentQuestion) return null;

    return (
        <Card className="w-full max-w-lg shadow-2xl">
            <CardHeader className="text-center pb-2">
                <div className="flex items-center justify-center gap-2">
                    <LinguaLearnLogo className="h-8 w-8" />
                    <CardTitle className="text-3xl font-bold tracking-tight">LinguaLearn</CardTitle>
                </div>
                <CardDescription className="pt-2">Select the correct translation</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center p-6 space-y-8">
                <div className="w-full flex justify-around gap-4 text-center">
                    <div className="flex items-center gap-2" data-tutorial-id="quiz-timer">
                        <Clock className="h-6 w-6" />
                        <span className="text-2xl font-bold">15s</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-6 w-6" />
                        <span className="text-2xl font-bold">00:00</span>
                    </div>
                </div>
                <Progress value={100} className="w-full h-2" />
                <div className="text-center space-y-2">
                    <p className="text-muted-foreground">What is the Polish meaning of</p>
                    <p className={cn("font-headline font-bold text-card-foreground", currentQuestion.word.length > 20 ? "text-3xl" : "text-4xl")}>
                        "{currentQuestion.word}"?
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {shuffledOptions.map((option) => {
                        const isCorrectForTutorial = tutorialStep === 2 && option === currentQuestion.correctAnswer;
                        const isIncorrectForTutorial = tutorialStep === 3 && (option === selectedAnswer);
                        let tutorialId = undefined;
                        if (isCorrectForTutorial) tutorialId = 'quiz-answer-correct';
                        if (isIncorrectForTutorial) tutorialId = 'quiz-answer-incorrect';

                        return (
                            <Button key={option} data-tutorial-id={tutorialId} disabled className={cn("h-auto text-lg p-4 whitespace-normal", getButtonClass(option))}>
                                {option}
                            </Button>
                        )
                    })}
                </div>
                <div className="flex justify-center gap-4 w-full pt-4 border-t">
                    <Button variant="outline" size="icon" disabled><Home /></Button>
                    <Button variant="outline" size="icon" disabled><RefreshCw /></Button>
                    <Button data-tutorial-id="quiz-pause-button" variant="outline" size="icon" disabled><Pause /></Button>
                </div>
            </CardContent>
            <CardFooter className="flex-col gap-4 p-6 pt-0">
                <div className="flex justify-between w-full items-center">
                    <div className="text-sm text-muted-foreground">Question {tutorialStep !== null && tutorialStep >= 3 ? 2 : 1} of 2</div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Score:</span>
                        <div className="text-2xl font-bold text-primary">{score}</div>
                    </div>
                </div>
                <Progress value={tutorialStep !== null && tutorialStep >= 3 ? 100 : 50} className="w-full h-2" />
            </CardFooter>
        </Card>
    );
}
