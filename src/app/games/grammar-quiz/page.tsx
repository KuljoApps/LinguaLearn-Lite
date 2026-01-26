'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, FileCheck2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const questions = [
    { sentence: 'She ___ to the store every day.', options: ['go', 'goes', 'going'], correct: 'goes' },
    { sentence: 'They ___ playing football now.', options: ['is', 'are', 'am'], correct: 'are' },
]

const GrammarQuizPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [selected, setSelected] = useState<string|null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean|null>(null);

    const setupNewGame = () => {
        const newQuestion = questions[Math.floor(Math.random() * questions.length)];
        setCurrentQuestion(newQuestion);
        setSelected(null);
        setIsCorrect(null);
    }

    useEffect(() => {
        setupNewGame();
    }, [])
    
    const handleSelect = (option: string) => {
        if (selected) return;
        setSelected(option);
        setIsCorrect(option === currentQuestion.correct);
    }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="text-center p-6">
          <div className="flex items-center justify-center gap-4">
            <FileCheck2 className="h-8 w-8" />
            <CardTitle className="text-3xl font-bold tracking-tight">Grammar Quiz</CardTitle>
          </div>
          <p className="text-muted-foreground pt-2">Choose the correct word to complete the sentence.</p>
        </CardHeader>
        <CardContent className="p-6 space-y-8">
            <p className="text-center text-3xl font-serif tracking-wide p-8 bg-muted/50 rounded-lg">
                {currentQuestion.sentence.replace('___', '______')}
            </p>

            <div className="flex justify-center gap-4">
                {currentQuestion.options.map(option => (
                    <Button 
                        key={option}
                        variant="outline"
                        className={cn("text-xl p-6", 
                            selected === option && isCorrect && 'bg-success text-success-foreground',
                            selected === option && !isCorrect && 'bg-destructive text-destructive-foreground',
                            selected && selected !== option && option !== currentQuestion.correct && 'opacity-50'
                        )}
                        onClick={() => handleSelect(option)}
                    >
                        {option}
                    </Button>
                ))}
            </div>

             <div className="text-center font-semibold h-6">
                {isCorrect === true && <p className="text-success">Correct!</p>}
                {isCorrect === false && <p className="text-destructive">Not quite! The correct answer is '{currentQuestion.correct}'.</p>}
            </div>

             <div className="flex justify-center">
                 <Button onClick={setupNewGame} variant="secondary">Next Question</Button>
            </div>
            
        </CardContent>
        <CardFooter className="flex justify-center p-6 border-t">
          <Link href="/games" passHref>
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Game Center</span>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
};

export default GrammarQuizPage;
