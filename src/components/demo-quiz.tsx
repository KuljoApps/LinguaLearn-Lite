"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { Home, RefreshCw, Pause, Play, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import LinguaLearnLogo from '@/components/LinguaLearnLogo';
import { getTutorialState, saveTutorialState } from "@/lib/storage";
import DemoQuizResults from "./demo-quiz-results";

type TutorialMCQuestion = {
    id: number;
    type: 'mc';
    word: string;
    options: string[];
    correctAnswer: string;
};

type TutorialIVQuestion = {
    id: number;
    type: 'iv';
    verb: string;
    translationOptions: string[];
    correctTranslation: string;
    form2: string;
    form3: string;
};

type TutorialQuestion = TutorialMCQuestion | TutorialIVQuestion;

const tutorialQuestions: TutorialQuestion[] = [
    { id: 999, type: 'mc', word: 'Hello', options: ['Cześć', 'Do widzenia', 'Dziękuję', 'Przepraszam'], correctAnswer: 'Cześć' },
    { id: 998, type: 'mc', word: 'Reliable', options: ['Religijny', 'Niezawodny', 'Niepewny', 'Zmienny'], correctAnswer: 'Niezawodny' },
    { id: 997, type: 'iv', verb: 'begin', form2: 'began', form3: 'begun', translationOptions: ['kończyć', 'zaczynać', 'próbować', 'kontynuować'], correctTranslation: 'zaczynać' },
];

function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

const IrregularVerbQuestionView = ({
    question,
    ivTranslationStatus,
    selectedTranslation,
    ivForm2Input,
    ivForm3Input,
    answerStatus,
    handleTranslationClick,
    handleConfirmClick,
    setIvForm2Input,
    setIvForm3Input
}: any) => {

    const getInputClass = (inputValue: string, correctValue: string) => {
        if (!answerStatus) return "";
        if (answerStatus === 'timeout') return "bg-success text-success-foreground";
        const isCorrect = inputValue.trim().toLowerCase() === correctValue.toLowerCase();
        return isCorrect ? "bg-success text-success-foreground" : "bg-destructive text-destructive-foreground";
    };

    const getTranslationButtonClass = (option: string) => {
        const isCorrectAnswer = option === question.correctTranslation;
        const isSelectedAnswer = option === selectedTranslation;
    
        if (answerStatus) {
            if (answerStatus === 'timeout') {
                if(isCorrectAnswer) return "bg-success text-success-foreground disabled:opacity-100";
                return "bg-muted text-muted-foreground opacity-70 cursor-not-allowed";
            }
    
            if (isCorrectAnswer) {
              return "bg-success text-success-foreground disabled:opacity-100";
            }
            if (isSelectedAnswer) {
              return "bg-destructive text-destructive-foreground disabled:opacity-100";
            }
            return "bg-muted text-muted-foreground opacity-70 cursor-not-allowed";
        }
    
        if (ivTranslationStatus && isSelectedAnswer) {
          return ivTranslationStatus === 'correct' 
              ? "bg-success text-success-foreground disabled:opacity-100" 
              : "bg-destructive text-destructive-foreground disabled:opacity-100";
        }
        if (ivTranslationStatus && !isSelectedAnswer) {
          return "bg-muted text-muted-foreground opacity-70 cursor-not-allowed";
        }
    
        return "bg-primary text-primary-foreground hover:bg-primary/90";
    };

    return (
        <div className="w-full space-y-4">
            <p className="text-center text-muted-foreground">1. Select the correct translation</p>
            <div className="grid grid-cols-2 gap-4 w-full" data-tutorial-id="quiz-iv-translation">
                {shuffleArray(question.translationOptions).map((option: string) => (
                    <Button
                        key={option}
                        onClick={() => handleTranslationClick(option)}
                        disabled={!!ivTranslationStatus || !!answerStatus}
                        className={cn("h-auto text-lg p-4 whitespace-normal transition-all duration-300", getTranslationButtonClass(option))}
                    >
                        {option}
                    </Button>
                ))}
            </div>

            <div className={cn("transition-opacity duration-300 pt-2", ivTranslationStatus !== 'correct' && "opacity-50 pointer-events-none")}>
                <p className="text-center text-muted-foreground">2. Type the Past Simple & Past Participle forms</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-full text-center mt-4" data-tutorial-id="quiz-iv-forms">
                    <div>
                        <Label htmlFor="form2" className="text-sm font-medium text-muted-foreground">Past Simple</Label>
                        <Input
                            id="form2"
                            value={ivForm2Input}
                            onChange={(e) => setIvForm2Input(e.target.value)}
                            placeholder=""
                            disabled={!!answerStatus || ivTranslationStatus !== 'correct'}
                            className={cn("text-center transition-colors duration-300 mt-1", getInputClass(ivForm2Input, question.form2))}
                        />
                    </div>
                    <div>
                        <Label htmlFor="form3" className="text-sm font-medium text-muted-foreground">Past Participle</Label>
                        <Input
                            id="form3"
                            value={ivForm3Input}
                            onChange={(e) => setIvForm3Input(e.target.value)}
                            placeholder=""
                            disabled={!!answerStatus || ivTranslationStatus !== 'correct'}
                            className={cn("text-center transition-colors duration-300 mt-1", getInputClass(ivForm3Input, question.form3))}
                        />
                    </div>
                </div>
            </div>

            {ivTranslationStatus === 'correct' && (
              <Button 
                  className="w-full mt-4 h-12 text-lg"
                  onClick={handleConfirmClick}
                  disabled={!!answerStatus || !ivForm2Input || !ivForm3Input}
              >
                  Confirm Answer
              </Button>
            )}
        </div>
    );
};

const MultipleChoiceQuestionView = ({ question, answerStatus, selectedAnswer, handleAnswerClick }: any) => {
    
    const getButtonClass = (option: string) => {
        if (!answerStatus) return "bg-primary text-primary-foreground hover:bg-primary/90";
        
        const isCorrectAnswer = option === question.correctAnswer;
        const isSelectedAnswer = option === selectedAnswer;

        if (isCorrectAnswer) {
            return "bg-success text-success-foreground disabled:opacity-100";
        }
        if (isSelectedAnswer) {
            return "bg-destructive text-destructive-foreground disabled:opacity-100";
        }
        return "bg-muted text-muted-foreground opacity-70 cursor-not-allowed";
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {shuffleArray(question.options).map((option: string) => {
                const isCorrectForTutorial = question.word === 'Hello' && option === question.correctAnswer;
                const isIncorrectForTutorial = question.word === 'Reliable' && (option === selectedAnswer);
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
    );
};


export default function DemoQuiz() {
    const [tutorialStep, setTutorialStep] = useState<number | null>(null);
    const [questions] = useState(tutorialQuestions);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    
    const [answerStatus, setAnswerStatus] = useState<"correct" | "incorrect" | "timeout" | null>(null);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    
    const [isFinished, setIsFinished] = useState(false);
    const [score, setScore] = useState(0);

    // Irregular verb state
    const [ivTranslationStatus, setIvTranslationStatus] = useState<"correct" | "incorrect" | null>(null);
    const [selectedTranslation, setSelectedTranslation] = useState<string | null>(null);
    const [ivForm2Input, setIvForm2Input] = useState("");
    const [ivForm3Input, setIvForm3Input] = useState("");

    const restartQuiz = useCallback(() => {
        saveTutorialState({ isActive: true, stage: 'quiz', step: 0 });
    }, []);

    useEffect(() => {
        const handleStateUpdate = () => {
            const state = getTutorialState();
            const step = state?.stage === 'quiz' ? state.step : null;
            setTutorialStep(step);

            // Reset all visual states for re-simulation
            setAnswerStatus(null);
            setSelectedAnswer(null);
            setIvTranslationStatus(null);
            setSelectedTranslation(null);
            setIvForm2Input("");
            setIvForm3Input("");
            setScore(0);
            
            if (step === null) {
                setIsFinished(false);
                setCurrentQuestionIndex(0);
                return;
            }
            
            let questionIndex = 0;
            if (step <= 2) {
                questionIndex = 0;
            } else if (step === 3) {
                questionIndex = 1;
            } else if (step >= 4 && step <= 5) {
                questionIndex = 2; // The IV question
            }

            setIsFinished(step >= 6); 
            setCurrentQuestionIndex(questionIndex);
            
            // Simulate states based on step
            if (step === 2) {
                setAnswerStatus('correct');
                setSelectedAnswer((questions[0] as TutorialMCQuestion).correctAnswer);
                setScore(1);
            } else if (step === 3) {
                setScore(1);
                const incorrectAnswer = (questions[1] as TutorialMCQuestion).options.find(o => o !== (questions[1] as TutorialMCQuestion).correctAnswer)!;
                setAnswerStatus('incorrect');
                setSelectedAnswer(incorrectAnswer);
            } else if (step >= 4) {
                 setScore(2); // Q1 and Q3 correct
                if (step === 5) {
                    setIvTranslationStatus('correct');
                    setSelectedTranslation((questions[2] as TutorialIVQuestion).correctTranslation);
                }
            }
        };

        window.addEventListener('tutorial-state-changed', handleStateUpdate);
        handleStateUpdate();
        return () => window.removeEventListener('tutorial-state-changed', handleStateUpdate);
    }, [questions]);
    
    const currentQuestion = questions[currentQuestionIndex];

    const handleConfirmClick = () => {};
    const handleTranslationClick = () => {};
    
    if (isFinished) {
        return <DemoQuizResults onRestart={restartQuiz} />;
    }
    
    if (!currentQuestion) return null;

    const progressValue = (currentQuestionIndex / questions.length) * 100;

    return (
        <Card className="w-full max-w-lg shadow-2xl">
            <CardHeader className="text-center pb-2">
                <div className="flex items-center justify-center gap-2">
                    <LinguaLearnLogo className="h-8 w-8" />
                    <CardTitle className="text-3xl font-bold tracking-tight">LinguaLearn</CardTitle>
                </div>
                <CardDescription className="pt-2">Select the correct translation</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center p-6 space-y-8 min-h-[500px]">
                <div className="w-full flex justify-around gap-4 text-center">
                    <div className="flex items-center gap-2" data-tutorial-id="quiz-timer">
                        <Clock className="h-6 w-6" />
                        <span className="text-2xl font-bold">15s</span>
                    </div>
                </div>
                <Progress value={100} className="w-full h-2" />
                <div className="text-center space-y-2">
                    <p className="text-muted-foreground">What is the Polish meaning of</p>
                    <p className={cn("font-headline font-bold text-card-foreground", (currentQuestion as any).word?.length > 20 ? "text-3xl" : "text-4xl")}>
                        "{currentQuestion.type === 'mc' ? currentQuestion.word : currentQuestion.verb}"?
                    </p>
                </div>
                
                {currentQuestion.type === 'mc' && (
                    <MultipleChoiceQuestionView 
                        question={currentQuestion}
                        answerStatus={answerStatus}
                        selectedAnswer={selectedAnswer}
                    />
                )}

                {currentQuestion.type === 'iv' && (
                    <IrregularVerbQuestionView 
                        question={currentQuestion}
                        ivTranslationStatus={ivTranslationStatus}
                        selectedTranslation={selectedTranslation}
                        ivForm2Input={ivForm2Input}
                        ivForm3Input={ivForm3Input}
                        answerStatus={answerStatus}
                        setIvForm2Input={setIvForm2Input}
                        setIvForm3Input={setIvForm3Input}
                    />
                )}

                <div className="flex justify-center gap-4 w-full pt-4 border-t">
                    <Button variant="outline" size="icon" disabled><Home /></Button>
                    <Button variant="outline" size="icon" disabled><RefreshCw /></Button>
                    <Button data-tutorial-id="quiz-pause-button" variant="outline" size="icon" disabled><Pause /></Button>
                </div>
            </CardContent>
            <CardFooter className="flex-col gap-4 p-6 pt-0">
                <div className="flex justify-between w-full items-center">
                    <div className="text-sm text-muted-foreground">Question {currentQuestionIndex + 1} of {questions.length}</div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Score:</span>
                        <div className="text-2xl font-bold text-primary">{score}</div>
                    </div>
                </div>
                <Progress value={progressValue} className="w-full h-2" />
            </CardFooter>
        </Card>
    );
}
