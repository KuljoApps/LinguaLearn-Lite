'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

type Answer = 'true' | 'false' | 'not-given';

const statements = [
    { id: 's1', text: 'The sun is a planet.', correctAnswer: 'false' },
    { id: 's2', text: 'The sun is mainly composed of hot plasma.', correctAnswer: 'true' },
    { id: 's3', text: 'The sun has life on it.', correctAnswer: 'not-given' },
];

export default function TrueFalsePage() {
    const [answers, setAnswers] = useState<Record<string, Answer | null>>({});
    const { toast } = useToast();

    const text = "The sun is a star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field. It is by far the most important source of energy for life on Earth.";

    const handleAnswerChange = (statementId: string, value: Answer) => {
        setAnswers(prev => ({ ...prev, [statementId]: value }));
    };

    const checkAnswers = () => {
        let correctCount = 0;
        statements.forEach(statement => {
            if (answers[statement.id] === statement.correctAnswer) {
                correctCount++;
            }
        });
        toast({ title: 'Results', description: `You got ${correctCount} out of ${statements.length} correct.` });
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <Card className="w-full max-w-2xl shadow-2xl">
                <CardHeader className="text-center">
                    <div className="flex items-center justify-center gap-4">
                        <CheckCircle2 className="h-8 w-8" />
                        <CardTitle className="text-3xl">True or False</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                    <div className="rounded-lg border bg-muted/30 p-4">
                        <p className="text-lg leading-relaxed text-justify">{text}</p>
                    </div>
                    <div className="space-y-6">
                        {statements.map((statement, index) => (
                            <div key={statement.id}>
                                <p className="font-semibold mb-3 text-lg">{index + 1}. {statement.text}</p>
                                <RadioGroup onValueChange={(value) => handleAnswerChange(statement.id, value as Answer)} className="flex space-x-6">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="true" id={`${statement.id}-true`} />
                                        <Label htmlFor={`${statement.id}-true`}>True</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="false" id={`${statement.id}-false`} />
                                        <Label htmlFor={`${statement.id}-false`}>False</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="not-given" id={`${statement.id}-not-given`} />
                                        <Label htmlFor={`${statement.id}-not-given`}>Not Given</Label>
                                    </div>
                                </RadioGroup>
                                {index < statements.length - 1 && <Separator className="mt-6" />}
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
