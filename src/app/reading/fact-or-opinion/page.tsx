'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { ArrowLeft, Scale } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const statements = [
    { id: 's1', text: 'The sun is a star.', correctAnswer: 'fact' },
    { id: 's2', text: 'Sunrises are the most beautiful part of the day.', correctAnswer: 'opinion' },
    { id: 's3', text: 'The sun is composed of hot plasma.', correctAnswer: 'fact' },
];

export default function FactOrOpinionPage() {
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const { toast } = useToast();

    const handleAnswerChange = (statementId: string, value: string) => {
        setAnswers(prev => ({ ...prev, [statementId]: value }));
    };

    const checkAnswers = () => {
        let correctCount = 0;
        statements.forEach(statement => {
            if (answers[statement.id] === statement.correctAnswer) {
                correctCount++;
            }
        });
        toast({ title: 'Results', description: `You correctly identified ${correctCount} out of ${statements.length} statements.` });
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <Card className="w-full max-w-2xl shadow-2xl">
                <CardHeader className="text-center">
                    <div className="flex items-center justify-center gap-4">
                        <Scale className="h-8 w-8" />
                        <CardTitle className="text-3xl">Fact or Opinion</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                    <p className="text-center text-muted-foreground">Read each statement and decide if it is a fact or an opinion.</p>
                    <div className="space-y-6">
                        {statements.map((statement, index) => (
                            <div key={statement.id}>
                                <p className="font-semibold mb-3 text-lg">"{statement.text}"</p>
                                <RadioGroup onValueChange={(value) => handleAnswerChange(statement.id, value as string)} className="flex space-x-6">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="fact" id={`${statement.id}-fact`} />
                                        <Label htmlFor={`${statement.id}-fact`}>Fact</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="opinion" id={`${statement.id}-opinion`} />
                                        <Label htmlFor={`${statement.id}-opinion`}>Opinion</Label>
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
