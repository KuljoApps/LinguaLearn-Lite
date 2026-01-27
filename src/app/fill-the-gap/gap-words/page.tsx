"use client";

import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { ArrowLeft, FileText, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getLanguage, type Language, getGapWordsProgress, addCompletedGapWord } from '@/lib/storage';
import { allGapWordQuestions, type GapWordQuestion } from '@/lib/fill-the-gap/gap-words';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { playSound } from '@/lib/sounds';
import { vibrate } from '@/lib/vibrations';

const WordItem = ({
  question,
  isCompleted,
  inputValue,
  onInputChange,
  onCorrect,
}: {
  question: GapWordQuestion;
  isCompleted: boolean;
  inputValue: string;
  onInputChange: (value: string) => void;
  onCorrect: () => void;
}) => {
  const { wordWithGap, missingLetters, fullWord } = question;
  const parts = wordWithGap.split('_');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onInputChange(value);

    if (!isCompleted && value.toLowerCase() === missingLetters.toLowerCase()) {
      onCorrect();
      playSound('correct');
      vibrate('correct');
    }
  };

  return (
    <div className={cn("flex items-center gap-4 p-4 rounded-lg", isCompleted ? "bg-success/10 text-muted-foreground" : "bg-card")}>
      {isCompleted ? (
        <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
      ) : (
        <div className="h-6 w-6 flex-shrink-0" />
      )}
      <div className="flex-grow flex items-center gap-2 text-2xl font-mono tracking-wider flex-wrap">
        <span>{parts[0]}</span>
        <Input
          value={inputValue}
          onChange={handleChange}
          disabled={isCompleted}
          className={cn(
            "w-24 h-10 text-center text-2xl font-mono",
            isCompleted && "border-success bg-success/20 text-success-foreground cursor-default",
            !isCompleted && inputValue.toLowerCase() === missingLetters.toLowerCase() ? "border-success" : ""
          )}
          style={{ width: `${missingLetters.length * 1.25 + 2}rem` }}
        />
        <span>{parts[1]}</span>
      </div>
      {isCompleted && <span className="font-semibold text-success">{fullWord}</span>}
    </div>
  );
};


export default function GapWordsPage() {
    const [language, setLanguageState] = useState<Language>('en');
    const [questions, setQuestions] = useState<GapWordQuestion[]>([]);
    const [completedWords, setCompletedWords] = useState<Set<string>>(new Set());
    const [userInputs, setUserInputs] = useState<Record<string, string>>({});

    useEffect(() => {
        const handleLanguageChange = () => {
            const lang = getLanguage();
            setLanguageState(lang);
            setQuestions(allGapWordQuestions[lang] || []);
            setCompletedWords(getGapWordsProgress());
            setUserInputs({});
        };
        handleLanguageChange();

        window.addEventListener('language-changed', handleLanguageChange);
        return () => window.removeEventListener('language-changed', handleLanguageChange);
    }, []);

    const handleInputChange = (fullWord: string, value: string) => {
        setUserInputs(prev => ({ ...prev, [fullWord]: value }));
    };

    const handleCorrect = (fullWord: string) => {
        addCompletedGapWord(fullWord);
        setCompletedWords(prev => new Set(prev).add(fullWord));
    };

    const { uncompleted, completed } = useMemo(() => {
        const uncompleted: GapWordQuestion[] = [];
        const completed: GapWordQuestion[] = [];
        questions.forEach(q => {
            if (completedWords.has(q.fullWord)) {
                completed.push(q);
            } else {
                uncompleted.push(q);
            }
        });
        return { uncompleted, completed };
    }, [questions, completedWords]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <Card className="w-full max-w-2xl shadow-2xl">
                <CardHeader className="text-center">
                    <div className="flex items-center justify-center gap-4">
                        <FileText className="h-8 w-8" />
                        <CardTitle className="text-3xl">Gap in the Words</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[60vh] pr-4">
                        <div className="space-y-2">
                            {uncompleted.map(q => (
                                <WordItem
                                    key={q.fullWord}
                                    question={q}
                                    isCompleted={false}
                                    inputValue={userInputs[q.fullWord] || ''}
                                    onInputChange={(value) => handleInputChange(q.fullWord, value)}
                                    onCorrect={() => handleCorrect(q.fullWord)}
                                />
                            ))}
                            {completed.length > 0 && uncompleted.length > 0 && (
                                <Separator className="my-4" />
                            )}
                            {completed.map(q => (
                                <WordItem
                                    key={q.fullWord}
                                    question={q}
                                    isCompleted={true}
                                    inputValue={q.missingLetters}
                                    onInputChange={() => {}}
                                    onCorrect={() => {}}
                                />
                            ))}
                        </div>
                    </ScrollArea>
                </CardContent>
                <CardFooter className="flex justify-center p-6 border-t">
                    <Link href="/fill-the-gap" passHref>
                        <Button variant="outline">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Fill the Gap
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </main>
    );
}