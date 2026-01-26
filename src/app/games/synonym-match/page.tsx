'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ArrowRightLeft, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const wordSets = [
    {
        words1: ['Happy', 'Big', 'Fast'],
        words2: ['Large', 'Joyful', 'Quick'],
        matches: { 'Happy': 'Joyful', 'Big': 'Large', 'Fast': 'Quick' }
    },
    {
        words1: ['Sad', 'Small', 'Angry'],
        words2: ['Tiny', 'Furious', 'Unhappy'],
        matches: { 'Sad': 'Unhappy', 'Small': 'Tiny', 'Angry': 'Furious' }
    }
];

const shuffle = (array: string[]) => [...array].sort(() => Math.random() - 0.5);

const SynonymMatchPage = () => {
    const [currentSet, setCurrentSet] = useState(wordSets[0]);
    const [shuffledWords2, setShuffledWords2] = useState<string[]>([]);
    const [selected1, setSelected1] = useState<string|null>(null);
    const [selected2, setSelected2] = useState<string|null>(null);
    const [correctPairs, setCorrectPairs] = useState<string[]>([]);
    const { toast } = useToast();

    const setupNewGame = () => {
        const newSet = wordSets[Math.floor(Math.random() * wordSets.length)];
        setCurrentSet(newSet);
        setShuffledWords2(shuffle(newSet.words2));
        setSelected1(null);
        setSelected2(null);
        setCorrectPairs([]);
    }

    useEffect(() => {
        setupNewGame();
    }, []);

    useEffect(() => {
        if(selected1 && selected2) {
            if(currentSet.matches[selected1] === selected2) {
                setCorrectPairs([...correctPairs, selected1, selected2]);
                toast({ title: "Correct!", description: `"${selected1}" and "${selected2}" are synonyms.` });
            } else {
                toast({ variant: "destructive", title: "Incorrect", description: `"${selected1}" and "${selected2}" are not synonyms.` });
            }
            setSelected1(null);
            setSelected2(null);
        }
    }, [selected1, selected2, currentSet.matches, correctPairs, toast]);

    const handleSelect1 = (word: string) => {
        if(correctPairs.includes(word)) return;
        setSelected1(word);
        setSelected2(null);
    }
    const handleSelect2 = (word: string) => {
        if(correctPairs.includes(word) || !selected1) return;
        setSelected2(word);
    }

    const isGameWon = correctPairs.length === Object.keys(currentSet.matches).length * 2;


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="text-center p-6">
          <div className="flex items-center justify-center gap-4">
            <ArrowRightLeft className="h-8 w-8" />
            <CardTitle className="text-3xl font-bold tracking-tight">Synonym Match</CardTitle>
          </div>
          <p className="text-muted-foreground pt-2">Match the words with their synonyms.</p>
        </CardHeader>
        <CardContent className="p-6 space-y-6">

            { isGameWon ? (
                <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold text-success">You matched them all!</h2>
                    <Button onClick={setupNewGame}>Play Again</Button>
                </div>
            ) : (
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col gap-4">
                        {currentSet.words1.map(word => (
                            <Button 
                                key={word} 
                                variant="outline" 
                                className={cn("h-16 text-lg", selected1 === word && "border-primary border-2", correctPairs.includes(word) && "bg-success/20 text-muted-foreground line-through")}
                                onClick={() => handleSelect1(word)}
                            >
                                {word}
                            </Button>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4">
                        {shuffledWords2.map(word => (
                            <Button 
                                key={word} 
                                variant="outline" 
                                className={cn("h-16 text-lg", selected2 === word && "border-primary border-2", correctPairs.includes(word) && "bg-success/20 text-muted-foreground line-through")}
                                onClick={() => handleSelect2(word)}
                            >
                                {word}
                            </Button>
                        ))}
                    </div>
                </div>
            )}
            
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

export default SynonymMatchPage;
