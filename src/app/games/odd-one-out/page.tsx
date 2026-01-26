'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';

const wordSets = [
    { words: ['Apple', 'Banana', 'Carrot', 'Orange'], correct: 'Carrot', category: 'Fruits' },
    { words: ['Dog', 'Lion', 'Cat', 'Table'], correct: 'Table', category: 'Animals' },
]

const OddOneOutPage = () => {
    const [currentSet, setCurrentSet] = useState(wordSets[0]);
    const [selected, setSelected] = useState<string|null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean|null>(null);

    const setupNewGame = () => {
        const newSet = wordSets[Math.floor(Math.random() * wordSets.length)];
        setCurrentSet(newSet);
        setSelected(null);
        setIsCorrect(null);
    }

    useEffect(() => {
        setupNewGame();
    }, [])
    
    const handleSelect = (word: string) => {
        if (selected) return;
        setSelected(word);
        setIsCorrect(word === currentSet.correct);
    }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="text-center p-6">
          <div className="flex items-center justify-center gap-4">
            <EyeOff className="h-8 w-8" />
            <CardTitle className="text-3xl font-bold tracking-tight">Odd One Out</CardTitle>
          </div>
          <p className="text-muted-foreground pt-2">Find the word that doesn't belong to the group.</p>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
            <p className="text-center text-lg">Category: <span className="font-bold">{currentSet.category}</span></p>

            <div className="grid grid-cols-2 gap-4">
                {currentSet.words.map(word => (
                    <Button 
                        key={word}
                        variant="outline"
                        className={cn("h-24 text-2xl", 
                            selected === word && isCorrect && 'bg-success text-success-foreground',
                            selected === word && !isCorrect && 'bg-destructive text-destructive-foreground',
                            selected && selected !== word && word !== currentSet.correct && 'opacity-50'
                        )}
                        onClick={() => handleSelect(word)}
                    >
                        {word}
                    </Button>
                ))}
            </div>

             <div className="text-center font-semibold h-6">
                {isCorrect === true && <p className="text-success">Correct!</p>}
                {isCorrect === false && <p className="text-destructive">Not quite! The correct one was '{currentSet.correct}'.</p>}
            </div>

             <div className="flex justify-center">
                 <Button onClick={setupNewGame} variant="secondary">Next</Button>
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

export default OddOneOutPage;
