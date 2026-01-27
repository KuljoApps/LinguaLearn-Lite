'use client';

import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, FileText, CheckCircle, Pencil, LayoutGrid, List } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getLanguage, type Language, getGapWordsProgress } from '@/lib/storage';
import { allGapWordQuestions, type GapWordQuestion } from '@/lib/fill-the-gap/gap-words';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const VIEW_MODE_KEY = 'gapWordsViewMode';

export default function GapWordsListPage() {
    const [language, setLanguageState] = useState<Language>('en');
    const [questions, setQuestions] = useState<GapWordQuestion[]>([]);
    const [completedWords, setCompletedWords] = useState<Set<string>>(new Set());
    const [view, setView] = useState<'list' | 'grid'>('list');

    useEffect(() => {
        const savedView = localStorage.getItem(VIEW_MODE_KEY) as 'list' | 'grid' | null;
        if (savedView) {
            setView(savedView);
        }
        
        const handleStateUpdate = () => {
            const lang = getLanguage();
            setLanguageState(lang);
            setQuestions(allGapWordQuestions[lang] || []);
            setCompletedWords(getGapWordsProgress());
        };
        handleStateUpdate();

        window.addEventListener('language-changed', handleStateUpdate);
        window.addEventListener('storage', handleStateUpdate); 

        return () => {
            window.removeEventListener('language-changed', handleStateUpdate);
            window.removeEventListener('storage', handleStateUpdate);
        };
    }, []);

    const handleViewToggle = () => {
        const newView = view === 'grid' ? 'list' : 'grid';
        setView(newView);
        localStorage.setItem(VIEW_MODE_KEY, newView);
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

    const renderWordItem = (question: GapWordQuestion, index: number, isCompleted: boolean) => (
        <Link href={`/fill-the-gap/gap-words/${encodeURIComponent(question.fullWord)}`} key={question.fullWord}>
            <div className={cn(
                "flex items-center justify-between p-4 rounded-lg transition-colors",
                isCompleted ? "bg-success/10 text-muted-foreground" : "bg-card hover:bg-muted/50"
            )}>
                <div className="flex items-center gap-4">
                    <span className="text-muted-foreground font-mono w-6 text-right">{index + 1}.</span>
                    <span className={cn("font-semibold text-lg", !isCompleted && "font-mono tracking-wider")}>
                        {isCompleted ? question.fullWord : question.wordWithGap}
                    </span>
                </div>
                {isCompleted ? <CheckCircle className="h-5 w-5 text-success" /> : <Pencil className="h-5 w-5 text-muted-foreground/50" />}
            </div>
        </Link>
    );

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
                        {view === 'list' ? (
                            <div className="space-y-1">
                                {uncompleted.map((q, i) => renderWordItem(q, i, false))}
                                {completed.length > 0 && uncompleted.length > 0 && (
                                    <div className="py-4">
                                        <h3 className="text-sm font-semibold text-muted-foreground text-center uppercase tracking-wider">Completed</h3>
                                        <Separator className="mt-2" />
                                    </div>
                                )}
                                {completed.map((q, i) => renderWordItem(q, uncompleted.length + i, true))}
                            </div>
                        ) : (
                             <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                                {questions.map((question, index) => {
                                    const isCompleted = completedWords.has(question.fullWord);
                                    return (
                                        <Link href={`/fill-the-gap/gap-words/${encodeURIComponent(question.fullWord)}`} key={question.fullWord}>
                                            <div className={cn(
                                                "flex items-center justify-center aspect-square rounded-lg transition-colors border-2 cursor-pointer",
                                                isCompleted 
                                                    ? "bg-success/10 text-success-foreground border-success/20 hover:bg-success/20" 
                                                    : "bg-card hover:bg-muted/50 border-primary"
                                            )}>
                                                <span className="font-bold text-xl">{index + 1}</span>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        )}
                    </ScrollArea>
                </CardContent>
                <CardFooter className="flex justify-center p-6 border-t">
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/fill-the-gap" passHref>
                            <Button variant="outline">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Fill the Gap
                            </Button>
                        </Link>
                        <Button variant="outline" onClick={handleViewToggle}>
                            {view === 'list' ? <LayoutGrid className="h-4 w-4 mr-2" /> : <List className="h-4 w-4 mr-2" />}
                            View
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </main>
    );
}
