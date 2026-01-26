"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Shuffle, CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const wordList = [
  { en: 'APPLE', pl: 'Jabłko' },
  { en: 'HOUSE', pl: 'Dom' },
  { en: 'WATER', pl: 'Woda' },
  { en: 'TABLE', pl: 'Stół' },
  { en: 'CHAIR', pl: 'Krzesło' },
  { en: 'BANANA', pl: 'Banan' },
  { en: 'CHERRY', pl: 'Wiśnia' },
  { en: 'ORANGE', pl: 'Pomarańcza' },
];

const shuffle = (array: string[]) => {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

const WordScramblePage = () => {
  const [currentWord, setCurrentWord] = useState(wordList[0]);
  const [scrambledLetters, setScrambledLetters] = useState<string[]>([]);
  const [playerAnswer, setPlayerAnswer] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const setupNewWord = () => {
    const newWord = wordList[Math.floor(Math.random() * wordList.length)];
    setCurrentWord(newWord);
    setScrambledLetters(shuffle(newWord.en.split('')));
    setPlayerAnswer([]);
    setFeedback(null);
  };
  
  useEffect(() => {
    setupNewWord();
  }, []);

  const handleLetterClick = (letter: string, from: 'scrambled' | 'player', index: number) => {
    if (from === 'scrambled') {
      if (playerAnswer.length < currentWord.en.length) {
        setPlayerAnswer([...playerAnswer, letter]);
        const newScrambled = [...scrambledLetters];
        newScrambled.splice(index, 1);
        setScrambledLetters(newScrambled);
      }
    } else { // from 'player'
      const newPlayerAnswer = [...playerAnswer];
      newPlayerAnswer.splice(index, 1);
      setPlayerAnswer(newPlayerAnswer);
      setScrambledLetters(shuffle([...scrambledLetters, letter]));
    }
     setFeedback(null);
  };

  const checkAnswer = () => {
    if (playerAnswer.length !== currentWord.en.length) return;
    const constructedWord = playerAnswer.join('');
    if (constructedWord === currentWord.en) {
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="text-center p-6">
          <div className="flex items-center justify-center gap-4">
            <Shuffle className="h-8 w-8" />
            <CardTitle className="text-3xl font-bold tracking-tight">Word Scramble</CardTitle>
          </div>
          <p className="text-muted-foreground pt-2">Unscramble the letters to form the English word.</p>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
            <div className="text-center">
              <p className="text-muted-foreground">Polish hint:</p>
              <p className="text-2xl font-bold">{currentWord.pl}</p>
            </div>

            <div className="min-h-[4rem] p-4 bg-muted/50 rounded-lg border-2 border-dashed flex items-center justify-center gap-2 flex-wrap">
              {playerAnswer.map((letter, index) => (
                  <Button key={`${letter}-${index}`} variant="secondary" onClick={() => handleLetterClick(letter, 'player', index)} className="text-2xl font-bold w-12 h-12">{letter}</Button>
              ))}
              {Array(currentWord.en.length - playerAnswer.length).fill(0).map((_, index) => (
                <div key={`placeholder-${index}`} className="w-12 h-12 bg-muted/20 rounded-md border border-dashed" />
              ))}
            </div>

            <div className="min-h-[6rem] flex items-center justify-center gap-2 flex-wrap">
                {scrambledLetters.map((letter, index) => (
                    <Button key={`${letter}-${index}`} variant="outline" onClick={() => handleLetterClick(letter, 'scrambled', index)} className="text-2xl font-bold w-12 h-12">{letter}</Button>
                ))}
            </div>

            {feedback && (
                <div className={cn("flex items-center justify-center gap-2 p-2 rounded-lg", feedback === 'correct' ? 'bg-success/20 text-success' : 'bg-destructive/20 text-destructive')}>
                    {feedback === 'correct' ? <CheckCircle /> : <XCircle />}
                    <p className="font-semibold">{feedback === 'correct' ? 'Correct!' : `Not quite. The word was ${currentWord.en}.`}</p>
                </div>
            )}

            <div className="flex justify-center gap-4">
                <Button onClick={checkAnswer} disabled={playerAnswer.length !== currentWord.en.length || !!feedback}>Check Answer</Button>
                <Button onClick={setupNewWord} variant="secondary">New Word</Button>
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

export default WordScramblePage;
