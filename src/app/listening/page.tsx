"use client";

import { ArrowLeft, Ear, Mic, Keyboard, Puzzle, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import ButtonColors from '@/components/button-colors';
import { Separator } from '@/components/ui/separator';

export default function ListeningPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <Card className="w-full max-w-md shadow-2xl">
                 <CardHeader className="text-center p-6 pb-2">
                    <div className="flex items-center justify-center gap-4">
                        <Ear className="h-8 w-8" />
                        <h1 className="text-3xl font-bold tracking-tight">
                             <span className="relative inline-block">
                                Listening
                                <span className="absolute right-px -bottom-[10px] text-sm font-semibold tracking-normal text-amber">
                                Lite
                                </span>
                            </span>
                        </h1>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col space-y-4 p-6 pt-0 pb-4">
                    <p className="text-muted-foreground text-center pb-2">
                        Ćwicz swoje umiejętności słuchania i wymowy poprzez różnorodne zadania.
                    </p>
                    <div className="flex flex-col space-y-2">
                        <Button className="w-full h-16 text-lg" size="lg" disabled>
                            <Mic className="mr-2 h-5 w-5" />
                            Listen & Repeat
                        </Button>
                        <Button className="w-full h-16 text-lg" size="lg" disabled>
                            <Keyboard className="mr-2 h-5 w-5" />
                            Dictation
                        </Button>
                         <Button className="w-full h-16 text-lg" size="lg" disabled>
                            <Puzzle className="mr-2 h-5 w-5" />
                            What's that sound?
                        </Button>
                        <Button className="w-full h-16 text-lg" size="lg" disabled>
                            <BookOpen className="mr-2 h-5 w-5" />
                            Story Comprehension
                        </Button>
                    </div>
                    <div className="pt-4">
                        <ButtonColors />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col p-6 pt-4 gap-4">
                    <Separator />
                     <Link href="/" passHref>
                        <Button variant="outline">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </main>
    );
}
