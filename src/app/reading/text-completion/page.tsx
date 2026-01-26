'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { ArrowLeft, Puzzle } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const textPart1 = "The sun is a star at the center of the Solar System. It is a nearly perfect sphere of hot plasma. ";
const textPart2 = " It is by far the most important source of energy for life on Earth.";
const options = [
    "Its surface is called the photosphere.",
    "This energy is released through nuclear fusion.",
    "It has a diameter of about 1.39 million kilometers."
];
const correctAnswer = "This energy is released through nuclear fusion.";

export default function TextCompletionPage() {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const { toast } = useToast();

    const checkAnswer = () => {
        if (!selectedAnswer) {
            toast({ variant: 'destructive', title: 'No answer selected', description: 'Please choose a sentence to complete the text.' });
            return;
        }
        if (selectedAnswer === correctAnswer) {
            toast({ title: 'Correct!', description: 'This sentence fits perfectly!' });
        } else {
            toast({ variant: 'destructive', title: 'Incorrect', description: `The correct answer was: "${correctAnswer}"` });
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <Card className="w-full max-w-2xl shadow-2xl">
                <CardHeader className="text-center">
                    <div className="flex items-center justify-center gap-4">
                        <Puzzle className="h-8 w-8" />
                        <CardTitle className="text-3xl">Text Completion</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                    <div className="rounded-lg border bg-muted/30 p-4">
                        <p className="text-lg leading-relaxed text-justify">
                            {textPart1}
                            <span className="font-bold text-primary">[...]</span>
                            {textPart2}
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Choose the best sentence to fill the blank:</h3>
                        <RadioGroup onValueChange={setSelectedAnswer}>
                            {options.map((option, index) => (
                                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg border bg-card">
                                    <RadioGroupItem value={option} id={`option-${index}`} />
                                    <Label htmlFor={`option-${index}`} className="text-base leading-snug">{option}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                    <div className="text-center pt-4">
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
