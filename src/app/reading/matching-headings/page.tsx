'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { ArrowLeft, ListCollapse } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const paragraphs = [
    { id: 'A', text: 'The sun is a star, a hot ball of glowing gases at the heart of our solar system. Its influence extends far beyond its boundaries, and life on Earth depends on it.' },
    { id: 'B', text: 'The sun’s core is extremely hot and dense. Nuclear fusion reactions in the core convert hydrogen into helium, releasing a tremendous amount of energy.' },
];

const headings = [
    { id: 'h1', text: 'Energy Production' },
    { id: 'h2', text: 'Introduction to the Sun' },
];

const correctMatches = { A: 'h2', B: 'h1' };

export default function MatchingHeadingsPage() {
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const { toast } = useToast();
    
    const handleSelect = (paragraphId: string, headingId: string) => {
        setAnswers(prev => ({ ...prev, [paragraphId]: headingId }));
    };
    
    const checkAnswers = () => {
        let correctCount = 0;
        for (const p of paragraphs) {
            if (answers[p.id] === correctMatches[p.id as keyof typeof correctMatches]) {
                correctCount++;
            }
        }
        toast({ title: 'Results', description: `You matched ${correctCount} out of ${paragraphs.length} headings correctly.` });
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <Card className="w-full max-w-2xl shadow-2xl">
                <CardHeader className="text-center">
                    <div className="flex items-center justify-center gap-4">
                        <ListCollapse className="h-8 w-8" />
                        <CardTitle className="text-3xl">Matching Headings</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Headings:</h3>
                        <ul className="list-disc list-inside bg-muted/30 p-3 rounded-lg">
                            {headings.map(h => <li key={h.id}>{h.text}</li>)}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        {paragraphs.map(p => (
                            <div key={p.id} className="rounded-lg border p-4">
                                <div className="flex items-center gap-4 mb-2">
                                     <span className="font-bold text-xl">Paragraph {p.id}</span>
                                     <Select onValueChange={(value) => handleSelect(p.id, value)}>
                                        <SelectTrigger className="w-[200px]">
                                            <SelectValue placeholder="Select heading..." />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {headings.map(h => <SelectItem key={h.id} value={h.id}>{h.text}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <p className="text-muted-foreground">{p.text}</p>
                            </div>
                        ))}
                    </div>
                     <div className="text-center pt-4">
                        <Button onClick={checkAnswers}>Check Answers</Button>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center p-6 border-t">
                    <Link href="/reading" passHref>
                        <Button variant="outline">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Reading
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </main>
    );
}
