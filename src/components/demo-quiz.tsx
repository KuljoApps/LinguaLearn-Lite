"use client";

import React, { useState, useEffect } from 'react';
import { getTutorialState } from '@/lib/storage';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import LinguaLearnLogo from '@/components/LinguaLearnLogo';
import { Clock, Pause, Home, RefreshCw } from 'lucide-react';
import QuizResults from './quiz-results';

const BaseQuizView = ({ children }: { children: React.ReactNode }) => (
    <Card className="w-full max-w-lg shadow-2xl">
        <CardHeader className="text-center pb-2">
            <div className="flex items-center justify-center gap-2">
                <LinguaLearnLogo className="h-8 w-8" />
                <CardTitle className="text-3xl font-bold tracking-tight">
                    Lingua
                    <span className="relative inline-block">
                        Learn
                        <span className="absolute -right-0.5 -bottom-3 text-sm font-semibold tracking-normal text-amber">
                        Lite
                        </span>
                    </span>
              </CardTitle>
            </div>
            <CardDescription className="pt-2">Wybierz poprawną odpowiedź</CardDescription>
        </CardHeader>
        {children}
        <CardFooter className="flex-col gap-4 p-6 pt-0">
             <div className="flex justify-center gap-4 w-full pt-4 border-t">
                <Button variant="outline" size="icon" className="pointer-events-none"><Home /></Button>
                <Button variant="outline" size="icon" className="pointer-events-none"><RefreshCw /></Button>
                <div data-tutorial-id="quiz-pause-button">
                    <Button variant="outline" size="icon" className="pointer-events-none"><Pause /></Button>
                </div>
             </div>
        </CardFooter>
    </Card>
);

export default function DemoQuiz() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const updateStep = () => {
            const tutorialState = getTutorialState();
            if (tutorialState?.stage === 'quiz') {
                setStep(tutorialState.step);
            }
        };
        updateStep();
        window.addEventListener('tutorial-state-changed', updateStep);
        return () => window.removeEventListener('tutorial-state-changed', updateStep);
    }, []);

    // step 0, 1: Timer and Pause button
    if (step <= 1) {
        return (
            <BaseQuizView>
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-8">
                    <div className="w-full flex justify-around gap-4 text-center">
                        <div data-tutorial-id="quiz-timer" className="flex items-center gap-2">
                            <Clock className="h-6 w-6" />
                            <span className="text-2xl font-bold">12s</span>
                        </div>
                    </div>
                    <Progress value={80} className="w-full h-2" />
                    <div className="text-center space-y-2">
                        <p className="text-muted-foreground">What is the Polish meaning of</p>
                        <p className="text-4xl font-headline font-bold">"Accomplish"?</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        <Button className="h-auto text-lg p-4 whitespace-normal">Akompaniować</Button>
                        <Button className="h-auto text-lg p-4 whitespace-normal">Osiągnąć</Button>
                        <Button className="h-auto text-lg p-4 whitespace-normal">Kompletny</Button>
                        <Button className="h-auto text-lg p-4 whitespace-normal">Ignorować</Button>
                    </div>
                </CardContent>
            </BaseQuizView>
        );
    }
    
    // step 2: Correct answer
    if (step === 2) {
        return (
             <BaseQuizView>
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-8">
                    <div className="w-full flex justify-around gap-4 text-center">
                        <div className="flex items-center gap-2">
                            <Clock className="h-6 w-6" />
                            <span className="text-2xl font-bold">10s</span>
                        </div>
                    </div>
                    <Progress value={66} className="w-full h-2" />
                    <div className="text-center space-y-2">
                        <p className="text-muted-foreground">What is the Polish meaning of</p>
                        <p className="text-4xl font-headline font-bold">"Accomplish"?</p>
                    </div>
                    <div data-tutorial-id="quiz-correct-answer" className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        <Button className="h-auto text-lg p-4 whitespace-normal bg-muted text-muted-foreground opacity-70">Akompaniować</Button>
                        <Button className="h-auto text-lg p-4 whitespace-normal bg-success text-success-foreground">Osiągnąć</Button>
                        <Button className="h-auto text-lg p-4 whitespace-normal bg-muted text-muted-foreground opacity-70">Kompletny</Button>
                        <Button className="h-auto text-lg p-4 whitespace-normal bg-muted text-muted-foreground opacity-70">Ignorować</Button>
                    </div>
                </CardContent>
            </BaseQuizView>
        );
    }

    // step 3: Irregular Verbs - Translation
    if (step === 3) {
         return (
            <BaseQuizView>
                 <CardContent className="flex flex-col items-center justify-center p-6 space-y-6">
                    <div className="text-center space-y-2 mb-4">
                        <p className="text-muted-foreground">Irregular verb:</p>
                        <p className="text-4xl font-headline font-bold">"write"</p>
                    </div>
                    <div className="w-full space-y-4">
                        <p className="text-center text-muted-foreground">1. Select the correct translation</p>
                        <div data-tutorial-id="quiz-iv-translation" className="grid grid-cols-2 gap-2 w-full">
                            <Button className="bg-success text-success-foreground h-auto text-lg p-2 whitespace-normal">Pisać</Button>
                            <Button className="bg-muted text-muted-foreground opacity-70 h-auto text-lg p-2 whitespace-normal">Czytać</Button>
                            <Button className="bg-muted text-muted-foreground opacity-70 h-auto text-lg p-2 whitespace-normal">Liczyć</Button>
                            <Button className="bg-muted text-muted-foreground opacity-70 h-auto text-lg p-2 whitespace-normal">Mówić</Button>
                        </div>
                    </div>
                 </CardContent>
            </BaseQuizView>
        );
    }

    // step 4: Irregular Verbs - Forms
    if (step === 4) {
         return (
            <BaseQuizView>
                 <CardContent className="flex flex-col items-center justify-center p-6 space-y-6">
                    <div className="text-center space-y-2 mb-4">
                        <p className="text-muted-foreground">Irregular verb:</p>
                        <p className="text-4xl font-headline font-bold">"write"</p>
                    </div>
                    <div className="w-full space-y-4">
                        <p className="text-center text-muted-foreground">2. Type the Past Simple & Past Participle forms</p>
                        <div data-tutorial-id="quiz-iv-forms" className="grid grid-cols-2 gap-x-4 gap-y-2 w-full text-center">
                            <div>
                                <Label htmlFor="form2" className="text-sm font-medium text-muted-foreground">Past Simple</Label>
                                <Input id="form2" value="wrote" readOnly className="text-center transition-colors duration-300 mt-1 bg-success text-success-foreground" />
                            </div>
                            <div>
                                <Label htmlFor="form3" className="text-sm font-medium text-muted-foreground">Past Participle</Label>
                                <Input id="form3" value="writen" readOnly className="text-center transition-colors duration-300 mt-1 bg-destructive text-destructive-foreground" />
                            </div>
                        </div>
                        <div className="text-center text-success font-medium animate-in fade-in">
                            Correct form: written
                        </div>
                        <Button className="w-full mt-4 h-12 text-lg">Confirm Answer</Button>
                    </div>
                 </CardContent>
            </BaseQuizView>
        );
    }

    // step 5: Incorrect answer
     if (step === 5) {
        return (
             <BaseQuizView>
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-8">
                     <div className="text-center space-y-2">
                        <p className="text-muted-foreground">What is the English meaning of</p>
                        <p className="text-4xl font-headline font-bold">"Wytrwać"?</p>
                    </div>
                     <div data-tutorial-id="quiz-incorrect-answer" className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        <Button className="h-auto text-lg p-4 whitespace-normal bg-muted text-muted-foreground opacity-70">Achieve</Button>
                        <Button className="h-auto text-lg p-4 whitespace-normal bg-destructive text-destructive-foreground">Survive</Button>
                        <Button className="h-auto text-lg p-4 whitespace-normal bg-success text-success-foreground">Persevere</Button>
                        <Button className="h-auto text-lg p-4 whitespace-normal bg-muted text-muted-foreground opacity-70">Endure</Button>
                    </div>
                </CardContent>
            </BaseQuizView>
        );
    }

    // step 6-8: Results screen
    if (step >= 6) {
         const fakeErrors = [
            { word: 'Wytrwać', userAnswer: 'Survive', correctAnswer: 'Persevere', quiz: 'Polish - English' },
            { word: 'write', userAnswer: 'writen', correctAnswer: 'written', quiz: 'Irregular Verbs' }
        ];

        return (
            <QuizResults 
                 score={8}
                 totalQuestions={10}
                 totalTime={142}
                 sessionErrors={fakeErrors}
                 quizName="Demo Quiz"
                 onRestart={() => {}}
             />
        );
    }
    
    // Fallback view
    return <div />;
}
