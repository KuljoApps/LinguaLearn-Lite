import { BookOpen, Dumbbell, Sparkles, Settings, BarChart, ShieldX, MessageSquareQuote, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

const LinguaLearnLogo = (props) => (
    <svg width="48" height="48" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        {/* Book */}
        <path d="M50 42C69.33 42 85 47.58 85 55.5V60.5C85 55.91 69.33 50.33 50 50.33C30.67 50.33 15 55.91 15 60.5V55.5C15 47.58 30.67 42 50 42Z" fill="hsl(var(--primary))"/>
        <path d="M95 55.5C95 47.58 79.33 42 60 42V67C79.33 67 95 61.42 95 53.5V55.5Z" fill="hsl(var(--primary))"/>
        <path d="M5 55.5C5 47.58 20.67 42 40 42V67C20.67 67 5 61.42 5 53.5V55.5Z" fill="hsl(var(--primary))"/>
        <path d="M90 55.5C90 47.58 74.33 42 55 42V63C74.33 63 90 57.42 90 49.5V55.5Z" fill="white"/>
        <path d="M10 55.5C10 47.58 25.67 42 45 42V63C25.67 63 10 57.42 10 49.5V55.5Z" fill="white"/>
        <path d="M50 43.5V63" stroke="hsl(var(--primary))" strokeWidth="2"/>

        {/* Mortarboard */}
        <path d="M50 5L10 25L50 45L90 25L50 5Z" fill="hsl(var(--destructive))"/>
        {/* White lines */}
        <path d="M10 25L50 45L90 25" stroke="white" strokeWidth="4"/>
        <path d="M50 5V45" stroke="white" strokeWidth="4"/>
        <path d="M25.5 32L10 25L25.5 18" stroke="white" strokeWidth="4"/>
        <path d="M74.5 32L90 25L74.5 18" stroke="white" strokeWidth="4"/>
        {/* Blue outline */}
        <path d="M50 5L10 25L50 45L90 25L50 5Z" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinejoin="round"/>

        {/* Tassel */}
        <path d="M88 25V31" stroke="hsl(var(--destructive))" strokeWidth="2"/>
        <path d="M88 38C90.2091 38 92 36.2091 92 34C92 31.7909 90.2091 30 88 30C85.7909 30 84 31.7909 84 34C84 36.2091 85.7909 38 88 38Z" fill="hsl(var(--destructive))"/>
        <path d="M88 31.5a2.5 2.5 0 0 0 0 5" stroke="white" strokeWidth="1"/>
    </svg>
);


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-2xl text-center">
            <CardHeader>
                <div className="flex items-center justify-center gap-4 mb-4">
                    <LinguaLearnLogo />
                    <h1 className="text-4xl font-bold tracking-tight">LinguaLearn</h1>
                </div>
                <p className="text-muted-foreground">
                    Ready to question your life choices in another language? Let's go!
                </p>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4 p-6 pt-0">
                <Link href="/quiz/en-pl" passHref>
                    <Button className="w-full h-12 text-lg" size="lg">
                        <BookOpen className="mr-2 h-5 w-5" />
                        English - Polish Quiz
                    </Button>
                </Link>
                <Link href="/quiz/pl-en" passHref>
                    <Button className="w-full h-12 text-lg" size="lg">
                        <Dumbbell className="mr-2 h-5 w-5" />
                        Polish - English Quiz
                    </Button>
                </Link>
                <Link href="/quiz/irregular-verbs" passHref>
                    <Button className="w-full h-12 text-lg" size="lg">
                        <Sparkles className="mr-2 h-5 w-5" />
                        Irregular Verbs
                    </Button>
                </Link>
                <Link href="/quiz/phrasal-verbs" passHref>
                    <Button className="w-full h-12 text-lg" size="lg">
                        <Layers className="mr-2 h-5 w-5" />
                        Phrasal Verbs
                    </Button>
                </Link>
                <Link href="/quiz/idioms" passHref>
                    <Button className="w-full h-12 text-lg" size="lg">
                        <MessageSquareQuote className="mr-2 h-5 w-5" />
                        Idioms
                    </Button>
                </Link>
            </CardContent>
            <CardFooter className="flex justify-center gap-4 p-6 pt-0">
                <Link href="/settings" passHref>
                    <Button variant="outline" size="icon">
                        <Settings />
                    </Button>
                </Link>
                <Link href="/stats" passHref>
                    <Button variant="outline" size="icon">
                        <BarChart />
                    </Button>
                </Link>
                <Link href="/errors" passHref>
                    <Button variant="outline" size="icon">
                        <ShieldX />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    </main>
  );
}
