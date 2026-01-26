"use client";

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Type, Heart, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';

const wordList = ['apple', 'banana', 'cherry', 'orange', 'grape', 'lemon', 'melon'];

const WordfallPage = () => {
  const [currentWord, setCurrentWord] = useState('');
  const [typedWord, setTypedWord] = useState('');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isGameOver, setIsGameOver] = useState(false);

  const selectNewWord = useCallback(() => {
    const newWord = wordList[Math.floor(Math.random() * wordList.length)];
    setCurrentWord(newWord);
    setTimeLeft(10);
  }, []);

  useEffect(() => {
    if (!isGameOver) {
      selectNewWord();
    }
  }, [isGameOver, selectNewWord]);

  useEffect(() => {
    if (isGameOver) return;

    if (timeLeft <= 0) {
      setLives(prev => prev - 1);
      if (lives - 1 <= 0) {
        setIsGameOver(true);
      } else {
        selectNewWord();
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, lives, isGameOver, selectNewWord]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypedWord(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typedWord.toLowerCase() === currentWord.toLowerCase()) {
      setScore(prev => prev + 10);
      setTypedWord('');
      selectNewWord();
    }
  };
  
  const restartGame = () => {
    setScore(0);
    setLives(3);
    setIsGameOver(false);
    setTypedWord('');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center p-6">
          <div className="flex items-center justify-center gap-4">
            <Type className="h-8 w-8" />
            <CardTitle className="text-3xl font-bold tracking-tight">Wordfall</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Star className="h-6 w-6 text-amber" />
              <span className="text-xl font-bold">{score}</span>
            </div>
            <div className="flex items-center gap-2">
              {[...Array(lives)].map((_, i) => (
                <Heart key={i} className="h-6 w-6 text-red-500 fill-current" />
              ))}
              {[...Array(3 - lives)].map((_, i) => (
                  <Heart key={i} className="h-6 w-6 text-muted-foreground/50" />
              ))}
            </div>
          </div>
          
          {isGameOver ? (
             <div className="text-center space-y-4 py-10">
              <h2 className="text-2xl font-bold">Game Over!</h2>
              <p>Your final score is {score}.</p>
              <Button onClick={restartGame}>Play Again</Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative h-24 bg-muted rounded-lg overflow-hidden">
                <p className="text-4xl font-bold text-center absolute left-1/2 -translate-x-1/2 transition-all duration-1000 linear" style={{ top: `${(10 - timeLeft) * 10}%` }}>
                  {currentWord}
                </p>
              </div>
              <Progress value={timeLeft * 10} className="h-2" />
              <form onSubmit={handleFormSubmit}>
                <Input
                  type="text"
                  value={typedWord}
                  onChange={handleInputChange}
                  placeholder="Type the word..."
                  className="text-center text-lg h-12"
                  autoFocus
                />
              </form>
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

export default WordfallPage;
