'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Keyboard } from 'lucide-react';
import { cn } from '@/lib/utils';

const words = [
  { word: 'DEVELOPER', hint: 'Programista' },
  { word: 'REACT', hint: 'Popularna biblioteka JS' },
];

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const HangmanPage = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameLost, setIsGameLost] = useState(false);

  const setupNewGame = () => {
    const newWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(newWord);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setIsGameWon(false);
    setIsGameLost(false);
  };
  
  useEffect(() => {
    setupNewGame();
  }, []);

  const handleGuess = (letter: string) => {
    if (guessedLetters.includes(letter) || isGameWon || isGameLost) return;

    setGuessedLetters([...guessedLetters, letter]);

    if (currentWord.word.includes(letter)) {
      // Correct guess
      const wordGuessed = currentWord.word.split('').every(l => [...guessedLetters, letter].includes(l));
      if (wordGuessed) {
        setIsGameWon(true);
      }
    } else {
      // Incorrect guess
      setWrongGuesses(wrongGuesses + 1);
      if (wrongGuesses + 1 >= 6) {
        setIsGameLost(true);
      }
    }
  };

  const wordDisplay = currentWord.word.split('').map(letter => (guessedLetters.includes(letter) ? letter : '_')).join(' ');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="text-center p-6">
          <div className="flex items-center justify-center gap-4">
            <Keyboard className="h-8 w-8" />
            <CardTitle className="text-3xl font-bold tracking-tight">Hangman</CardTitle>
          </div>
          <p className="text-muted-foreground pt-2">Guess the word based on the Polish hint.</p>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
            <div className="text-center space-y-2">
                <p className="text-muted-foreground">Hint:</p>
                <p className="text-2xl font-bold">{currentWord.hint}</p>
            </div>

            <div className="text-4xl font-bold tracking-widest text-center py-4">{wordDisplay}</div>

            <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                {alphabet.map(letter => (
                    <Button 
                        key={letter}
                        variant="outline"
                        size="icon"
                        onClick={() => handleGuess(letter)}
                        disabled={guessedLetters.includes(letter)}
                        className={cn(
                            guessedLetters.includes(letter) && !currentWord.word.includes(letter) && 'bg-destructive text-destructive-foreground',
                            guessedLetters.includes(letter) && currentWord.word.includes(letter) && 'bg-success text-success-foreground'
                        )}
                    >
                        {letter}
                    </Button>
                ))}
            </div>

            <div className="text-center font-semibold">
                {isGameWon && <p className="text-success">Congratulations! You won!</p>}
                {isGameLost && <p className="text-destructive">Game Over! The word was: {currentWord.word}</p>}
                {!isGameWon && !isGameLost && <p>Wrong guesses: {wrongGuesses} / 6</p>}
            </div>

            <div className="flex justify-center">
                 <Button onClick={setupNewGame}>New Game</Button>
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

export default HangmanPage;
