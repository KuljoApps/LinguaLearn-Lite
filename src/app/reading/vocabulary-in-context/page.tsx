'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { ArrowLeft, ScanSearch } from 'lucide-react';

const questions = [
    { word: 'sphere', options: ['A flat circle', 'A round solid figure', 'A cube', 'A pyramid'], answer: 'A round solid figure' },
    { word: 'generates', options: ['Stops', 'Reduces', 'Creates', 'Consumes'], answer: 'Creates' },
    { word: 'source', options: ['Ending', 'Origin', 'Effect', 'Destination'], answer: 'Origin' },
]

export default function VocabularyInContextPage() {
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const { toast } = useToast();

    const text = "The sun is a star at the center of the Solar System. It is a nearly perfect <b>sphere</b> of hot plasma, with internal convective motion that <b>generates</b> a magnetic field. It is by far the most important <b>source</b> of energy for life on Earth.";
    
    const handleSelect = (word: string, value: string) => {
        setAnswers(prev => ({...prev, [word]: value}));
    };

    const checkAnswers = () => {
        let correctCount = 0;
        questions.forEach(q => {
            if (answers[q.word] === q.answer) {
                correctCount++;
            }
        });
        toast({ title: 'Results', description: `You got ${correctCount} out of ${questions.length} correct.` });
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <Card className="w-full max-w-2xl shadow-2xl">
                <CardHeader className="text-center">
                    <div className="flex items-center justify-center gap-4">
                        <ScanSearch className="h-8 w-8" />
                        <CardTitle className="text-3xl">Vocabulary in Context</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                    <div className="rounded-lg border bg-muted/30 p-4">
                        <p className="text-lg leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: text }} />
                    </div>
                    <div className="space-y-4">
                        {questions.map(q => (
                            <div key={q.word} className="grid grid-cols-3 items-center gap-4">
                                <p className="font-bold text-lg text-right">{q.word}:</p>
                                <Select onValueChange={(value) => handleSelect(q.word, value)}>
                                    <SelectTrigger className="col-span-2">
                                        <SelectValue placeholder="Choose the best definition..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {q.options.map(opt => (
                                            <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
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
