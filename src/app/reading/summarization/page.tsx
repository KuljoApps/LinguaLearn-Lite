'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { ArrowLeft, Tally5 } from 'lucide-react';

const summaries = [
    { id: 's1', text: "The sun's magnetic field is not very important." },
    { id: 's2', text: "The sun, a central star made of hot plasma, creates a magnetic field and is Earth's main energy source." },
    { id: 's3', text: "Life on Earth depends on many sources of energy, including the sun." },
];
const correctAnswerId = 's2';

export default function SummarizationPage() {
    const [selectedSummary, setSelectedSummary] = useState<string | null>(null);
    const { toast } = useToast();

    const text = "The sun is a star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is by far the most important source of energy for life on Earth.";
    
    const checkAnswer = () => {
        if (!selectedSummary) {
            toast({ variant: 'destructive', title: 'No summary selected', description: 'Please choose an option.' });
            return;
        }
        if (selectedSummary === correctAnswerId) {
            toast({ title: 'Correct!', description: 'This summary best captures the main idea.' });
        } else {
            toast({ variant: 'destructive', title: 'Incorrect', description: `That summary is not the best fit.` });
        }
    };
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <Card className="w-full max-w-2xl shadow-2xl">
                <CardHeader className="text-center">
                    <div className="flex items-center justify-center gap-4">
                        <Tally5 className="h-8 w-8" />
                        <CardTitle className="text-3xl">Summarization</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                    <div className="rounded-lg border bg-muted/30 p-4">
                        <p className="text-lg leading-relaxed text-justify">{text}</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Which of the following best summarizes the text?</h3>
                        <RadioGroup onValueChange={setSelectedSummary}>
                            {summaries.map((summary) => (
                                <div key={summary.id} className="flex items-start space-x-2 p-3 rounded-lg border bg-card">
                                    <RadioGroupItem value={summary.id} id={summary.id} className="mt-1" />
                                    <Label htmlFor={summary.id} className="text-base leading-snug">{summary.text}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                    <div className="text-center pt-4">
                        <Button onClick={checkAnswer}>Check Summary</Button>
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
