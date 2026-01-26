'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ReadAndAnswerPage() {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const { toast } = useToast();

    const text = "The sun is a star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is by far the most important source of energy for life on Earth.";
    const question = "What generates the sun's magnetic field?";
    const options = ["Its plasma", "Its heat", "Convective motion", "Life on Earth"];
    const correctAnswer = "Convective motion";

    const checkAnswer = () => {
        if (!selectedAnswer) {
            toast({ variant: 'destructive', title: 'No answer selected', description: 'Please choose an answer.' });
            return;
        }
        if (selectedAnswer === correctAnswer) {
            toast({ title: 'Correct!', description: 'Great job!' });
        } else {
            toast({ variant: 'destructive', title: 'Incorrect', description: `The correct answer was: "${correctAnswer}"` });
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <Card className="w-full max-w-2xl shadow-2xl">
                <CardHeader className="text-center">
                    <div className="flex items-center justify-center gap-4">
                        <HelpCircle className="h-8 w-8" />
                        <CardTitle className="text-3xl">Read and Answer</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                    <div className="rounded-lg border bg-muted/30 p-4">
                        <p className="text-lg leading-relaxed text-justify">{text}</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">{question}</h3>
                        <RadioGroup onValueChange={setSelectedAnswer}>
                            {options.map((option) => (
                                <div key={option} className="flex items-center space-x-2">
                                    <RadioGroupItem value={option} id={option} />
                                    <Label htmlFor={option} className="text-lg">{option}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                    <div className="text-center">
                        <Button onClick={checkAnswer}>Check Answer</Button>
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
