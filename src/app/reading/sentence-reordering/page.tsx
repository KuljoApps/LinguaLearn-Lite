'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { ArrowLeft, Shuffle } from 'lucide-react';
import { cn } from '@/lib/utils';

const sentences = [
    "It is a nearly perfect sphere of hot plasma.",
    "The sun is a star at the center of the Solar System.",
    "It is by far the most important source of energy for life on Earth.",
    "This motion generates a magnetic field via a dynamo process."
];

export default function SentenceReorderingPage() {
    const { toast } = useToast();

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <Card className="w-full max-w-2xl shadow-2xl">
                <CardHeader className="text-center">
                    <div className="flex items-center justify-center gap-4">
                        <Shuffle className="h-8 w-8" />
                        <CardTitle className="text-3xl">Sentence Reordering</CardTitle>
                    </div>
                     <p className="text-muted-foreground pt-2">Drag and drop the sentences into the correct order.</p>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                   <div className="flex flex-col gap-3">
                       {sentences.map((sentence, index) => (
                           <div key={index} className="p-4 rounded-lg border bg-card cursor-grab active:cursor-grabbing">
                               <p className="text-lg">{sentence}</p>
                           </div>
                       ))}
                   </div>
                    <div className="text-center pt-4">
                        <Button disabled>Check Order</Button>
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
