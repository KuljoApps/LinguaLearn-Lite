'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { ArrowLeft, PenTool } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const text = "While some may find the relentless chirping of birds at dawn to be a nuisance, I find it to be a rather charming, if slightly insistent, alarm clock provided by nature herself. It’s certainly better than the jarring beep of a digital device.";

const options = ["Sarcastic", "Formal", "Humorous", "Angry"];
const correctAnswer = "Humorous";

export default function ToneAnalysisPage() {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const { toast } = useToast();
    
    const checkAnswer = () => {
        if (!selectedAnswer) {
            toast({ variant: 'destructive', title: 'No answer selected', description: 'Please choose an option.' });
            return;
        }
        if (selectedAnswer === correctAnswer) {
            toast({ title: 'Correct!', description: `The author's tone is indeed humorous.` });
        } else {
            toast({ variant: 'destructive', title: 'Incorrect', description: `The correct answer was: "${correctAnswer}"` });
        }
    };
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <Card className="w-full max-w-2xl shadow-2xl">
                <CardHeader className="text-center">
                    <div className="flex items-center justify-center gap-4">
                        <PenTool className="h-8 w-8" />
                        <CardTitle className="text-3xl">Tone Analysis</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                    <div className="rounded-lg border bg-muted/30 p-4">
                        <p className="text-lg leading-relaxed text-justify italic">"{text}"</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">What is the tone of the author?</h3>
                        <RadioGroup onValueChange={setSelectedAnswer}>
                            {options.map((option) => (
                                <div key={option} className="flex items-center space-x-2">
                                    <RadioGroupItem value={option} id={option} />
                                    <Label htmlFor={option} className="text-lg">{option}</Label>
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
