'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Shuffle, CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const sentences = [
  'The cat sat on the mat.',
  'I love learning new languages.',
  'She is reading a very interesting book.',
  'Where is the nearest train station?',
];

const SentenceScramblePage = () => {
  const [currentSentence, setCurrentSentence] = useState('');
  const [scrambledWords, setScrambledWords] = useState<string[]>([]);
  const [playerSentence, setPlayerSentence] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const setupNewSentence = () => {
    const sentence = sentences[Math.floor(Math.random() * sentences.length)];
    setCurrentSentence(sentence);
    const words = sentence.replace('.', '').split(' ');
    setScrambledWords(words.sort(() => Math.random() - 0.5));
    setPlayerSentence([]);
    setFeedback(null);
  };
  
  useEffect(() => {
    setupNewSentence();
  }, []);

  const handleWordClick = (word: string, from: 'scrambled' | 'player', index: number) => {
    if (from === 'scrambled') {
      setPlayerSentence([...playerSentence, word]);
      const newScrambled = [...scrambledWords];
      newScrambled.splice(index, 1);
      setScrambledWords(newScrambled);
    } else {
      const newPlayerSentence = [...playerSentence];
      newPlayerSentence.splice(index, 1);
      setPlayerSentence(newPlayerSentence);
      setScrambledWords([...scrambledWords, word]);
    }
     setFeedback(null);
  };

  const checkAnswer = () => {
    const constructed = playerSentence.join(' ') + '.';
    if (constructed.toLowerCase() === currentSentence.toLowerCase()) {
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
            <CardTitle className="text-3xl font-bold tracking-tight">Sentence Scramble</CardTitle>
          </div>
          <p className="text-muted-foreground pt-2">Unscramble the words to form a correct sentence.</p>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
            <div className="min-h-[6rem] p-4 bg-muted/50 rounded-lg border-2 border-dashed flex items-center justify-center gap-2 flex-wrap">
              {playerSentence.map((word, index) => (
                  <Button key={`${word}-${index}`} variant="secondary" onClick={() => handleWordClick(word, 'player', index)}>{word}</Button>
              ))}
            </div>

            <div className="min-h-[6rem] flex items-center justify-center gap-2 flex-wrap">
                {scrambledWords.map((word, index) => (
                    <Button key={`${word}-${index}`} variant="outline" onClick={() => handleWordClick(word, 'scrambled', index)}>{word}</Button>
                ))}
            </div>

            {feedback && (
                <div className={cn("flex items-center justify-center gap-2 p-2 rounded-lg", feedback === 'correct' ? 'bg-success/20 text-success' : 'bg-destructive/20 text-destructive')}>
                    {feedback === 'correct' ? <CheckCircle /> : <XCircle />}
                    <p className="font-semibold">{feedback === 'correct' ? 'Correct!' : 'Try again!'}</p>
                </div>
            )}

            <div className="flex justify-center gap-4">
                <Button onClick={checkAnswer} disabled={scrambledWords.length > 0}>Check Answer</Button>
                <Button onClick={setupNewSentence} variant="secondary">New Sentence</Button>
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

export default SentenceScramblePage;
