'use client';

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Puzzle } from 'lucide-react';
import { Input } from '@/components/ui/input';

const CrosswordPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-4xl shadow-2xl">
        <CardHeader className="text-center p-6">
          <div className="flex items-center justify-center gap-4">
            <Puzzle className="h-8 w-8" />
            <CardTitle className="text-3xl font-bold tracking-tight">Crossword</CardTitle>
          </div>
          <p className="text-muted-foreground pt-2">Translate the Polish clues to fill in the Spanish words.</p>
        </CardHeader>
        <CardContent className="p-6 flex flex-col md:flex-row gap-8 items-center md:items-start justify-center">
            <div className="grid grid-cols-3 gap-1 bg-background relative">
              {/* Clue numbers */}
              <span className="absolute top-1 left-1 text-xs text-muted-foreground">1</span>

              {Array(9).fill(0).map((_, index) => {
                const row = Math.floor(index / 3);
                const col = index % 3;
                let disabled = true;
                
                // L-shape for SOL and SAL
                if (row === 0 || col === 0) {
                   disabled = false;
                }
                
                return (
                    <Input
                        key={index}
                        type="text"
                        maxLength={1}
                        className="w-12 h-12 text-center text-2xl font-bold border-2 border-primary rounded-none disabled:bg-muted"
                        disabled={disabled}
                    />
                )
              })}
            </div>
            <div className="space-y-4">
                <div>
                    <h3 className="font-bold text-lg">Across</h3>
                    <p className="text-muted-foreground">1. Słońce</p>
                </div>
                 <div>
                    <h3 className="font-bold text-lg">Down</h3>
                    <p className="text-muted-foreground">1. Sól</p>
                </div>
                <div className="pt-4">
                  <Button disabled>Check Answers</Button>
                </div>
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

export default CrosswordPage;
