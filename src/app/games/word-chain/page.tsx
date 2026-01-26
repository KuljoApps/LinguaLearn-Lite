'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Link2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const startingWords = ['APPLE', 'HOUSE'];

const WordChainPage = () => {
    const [wordChain, setWordChain] = useState<string[]>([]);
    const [currentInput, setCurrentInput] = useState('');
    const [error, setError] = useState<string | null>(null);
    const { toast } = useToast();

    const setupNewGame = () => {
        const startWord = startingWords[Math.floor(Math.random() * startingWords.length)];
        setWordChain([startWord]);
        setCurrentInput('');
        setError(null);
    }

    useEffect(() => {
        setupNewGame();
    }, [])

    const handleWordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (wordChain.length === 0) return;
        const lastWord = wordChain[wordChain.length - 1];
        const lastLetter = lastWord.slice(-1).toUpperCase();
        
        if (currentInput.length === 0) {
            setError('Input cannot be empty.');
            return;
        }

        if (currentInput.toUpperCase()[0] !== lastLetter) {
            setError(`Word must start with '${lastLetter}'.`);
            return;
        }

        if (wordChain.includes(currentInput.toUpperCase())) {
            setError('Word has already been used.');
            return;
        }

        setWordChain([...wordChain, currentInput.toUpperCase()]);
        setCurrentInput('');
        setError(null);
        toast({ title: 'Good one!', description: `Added "${currentInput.toUpperCase()}" to the chain.` });
    }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="text-center p-6">
          <div className="flex items-center justify-center gap-4">
            <Link2 className="h-8 w-8" />
            <CardTitle className="text-3xl font-bold tracking-tight">Word Chain</CardTitle>
          </div>
          <p className="text-muted-foreground pt-2">Create a chain of words where each word starts with the last letter of the previous one.</p>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
            <div className="text-center">
                <p className="text-muted-foreground">Last word in chain:</p>
                <p className="text-4xl font-bold tracking-wider">{wordChain.length > 0 ? wordChain[wordChain.length - 1] : '...'}</p>
            </div>
            
            <form onSubmit={handleWordSubmit} className="flex justify-center items-start gap-2">
                <div className="flex-grow max-w-sm">
                    <Input 
                        value={currentInput}
                        onChange={e => setCurrentInput(e.target.value)}
                        placeholder={wordChain.length > 0 ? `Word starting with '${wordChain[wordChain.length - 1].slice(-1).toUpperCase()}'...` : 'Loading game...'}
                        className="text-lg text-center"
                        disabled={wordChain.length === 0}
                    />
                    {error && <p className="text-destructive text-sm mt-1 text-center">{error}</p>}
                </div>
                <Button type="submit" disabled={wordChain.length === 0}>Add Word</Button>
            </form>

            <div className="flex flex-wrap gap-2 justify-center bg-muted/50 p-4 rounded-lg">
                {wordChain.map((word, index) => (
                    <span key={index} className="font-semibold">{word}{index < wordChain.length -1 ? ' →' : ''}</span>
                ))}
            </div>

            <div className="flex justify-center">
                <Button onClick={setupNewGame} variant="secondary">New Game</Button>
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

export default WordChainPage;
