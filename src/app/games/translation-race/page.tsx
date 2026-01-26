'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Timer } from 'lucide-react';
import { Input } from '@/components/ui/input';

const words = [
    { en: 'tree', pl: 'drzewo' },
    { en: 'sky', pl: 'niebo' },
    { en: 'water', pl: 'woda' },
    { en: 'fire', pl: 'ogień' },
    { en: 'earth', pl: 'ziemia' },
    { en: 'book', pl: 'książka' },
];

const GAME_DURATION = 60; // seconds

const TranslationRacePage = () => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
    const [isActive, setIsActive] = useState(false);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isActive && timeLeft > 0) {
            timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
        }
        return () => clearTimeout(timer);
    }, [isActive, timeLeft]);
    
    const setupNewGame = () => {
        setTimeLeft(GAME_DURATION);
        setScore(0);
        setIsActive(true);
        setInputValue('');
        setCurrentWord(words[Math.floor(Math.random() * words.length)])
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        if (value.toLowerCase() === currentWord.pl.toLowerCase()) {
            setScore(score + 1);
            setInputValue('');
            setCurrentWord(words[Math.floor(Math.random() * words.length)]);
        }
    }


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="text-center p-6">
          <div className="flex items-center justify-center gap-4">
            <Timer className="h-8 w-8" />
            <CardTitle className="text-3xl font-bold tracking-tight">Translation Race</CardTitle>
          </div>
          <p className="text-muted-foreground pt-2">Translate as many words as you can in 60 seconds.</p>
        </CardHeader>
        <CardContent className="p-6 space-y-8">

            { !isActive && timeLeft > 0 && <div className="text-center"><Button size="lg" onClick={setupNewGame}>Start Game</Button></div>}
            
            { !isActive && timeLeft === 0 && (
                <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold">Time's up!</h2>
                    <p className="text-xl">Your final score is: <span className="font-bold text-primary">{score}</span></p>
                    <Button onClick={setupNewGame}>Play Again</Button>
                </div>
            )}
            
            { isActive && (
                 <div className="space-y-6 text-center">
                    <div className="flex justify-around text-2xl font-bold">
                        <div>Time Left: <span className="text-primary">{timeLeft}s</span></div>
                        <div>Score: <span className="text-primary">{score}</span></div>
                    </div>

                    <div>
                        <p className="text-muted-foreground">Translate the word:</p>
                        <p className="text-4xl font-bold tracking-wider">{currentWord.en}</p>
                    </div>

                    <div className="flex justify-center">
                        <Input 
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Type translation in Polish..."
                            className="text-lg text-center max-w-sm"
                            autoFocus
                        />
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

export default TranslationRacePage;
