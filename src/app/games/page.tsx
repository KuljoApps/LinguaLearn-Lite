"use client";

import { ArrowLeft, Gamepad2, Brain, Type, Shuffle, Puzzle, Keyboard, Link2, EyeOff, FileCheck2, Timer, ArrowRightLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

const games = [
    { title: 'Memory', href: '/games/memory', icon: Brain, description: 'Match pairs of words and their translations. A classic game to test and improve your vocabulary retention.' },
    { title: 'Word Scramble', href: '/games/wordfall', icon: Shuffle, description: 'Unscramble the letters to form a word based on the hint. A great test of your vocabulary and spelling.' },
    { title: 'Sentence Scramble', href: '/games/sentence-scramble', icon: Shuffle, description: 'Unscramble the words to form a correct sentence. A perfect way to practice grammar and sentence structure.' },
    { title: 'Crossword', href: '/games/crossword', icon: Puzzle, description: 'Solve the crossword puzzle where clues are in one language and answers in another. A fun vocabulary challenge.' },
    { title: 'Hangman', href: '/games/hangman', icon: Keyboard, description: 'Guess the hidden word letter by letter based on a Polish hint. A classic word-guessing game.' },
    { title: 'Word Chain', href: '/games/word-chain', icon: Link2, description: 'Create a chain of words where each word starts with the last letter of the previous one. Tests your vocabulary on the fly.' },
    { title: 'Odd One Out', href: '/games/odd-one-out', icon: EyeOff, description: 'From a group of words, find the one that doesn\'t belong to the category. A test of logic and vocabulary.' },
    { title: 'Grammar Quiz', href: '/games/grammar-quiz', icon: FileCheck2, description: 'Choose the correct grammatical form to complete the sentence. A quick check of your grammar skills.' },
    { title: 'Translation Race', href: '/games/translation-race', icon: Timer, description: 'Translate as many words as you can in 60 seconds. A fast-paced challenge for quick thinkers.' },
    { title: 'Synonym Match', href: '/games/synonym-match', icon: ArrowRightLeft, description: 'Match words from two columns that have the same or similar meaning. A great way to expand your vocabulary.' },
]

export default function GamesPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <Card className="w-full max-w-4xl shadow-2xl">
                <CardHeader className="text-center p-6">
                    <div className="flex items-center justify-center gap-4">
                        <Gamepad2 className="h-8 w-8" />
                        <h1 className="text-3xl font-bold tracking-tight">Game Center</h1>
                    </div>
                     <p className="text-muted-foreground pt-2">Choose a game to practice your language skills in a fun way!</p>
                </CardHeader>
                <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 max-h-[70vh] overflow-y-auto">
                    {games.map((game) => {
                        const Icon = game.icon;
                        return (
                            <Card key={game.title}>
                                <CardHeader className="items-center">
                                    <Icon className="h-12 w-12 text-primary" />
                                    <CardTitle className="pt-2 text-center">{game.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-center text-muted-foreground h-20">{game.description}</p>
                                </CardContent>
                                <CardFooter>
                                    <Link href={game.href} className="w-full">
                                        <Button className="w-full">Play</Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </CardContent>
                <CardFooter className="flex justify-center p-6 border-t">
                    <Link href="/" passHref>
                        <Button variant="outline" className="gap-2">
                            <ArrowLeft className="h-4 w-4" /> 
                            <span>Back to Home</span>
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </main>
    );
}
