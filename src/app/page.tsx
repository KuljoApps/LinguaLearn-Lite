import { BookOpen, Dumbbell, Sparkles, Settings, BarChart, ShieldX, MessageSquareQuote, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

const LinguaLearnLogo = (props) => (
    <svg width="48" height="48" viewBox="0 0 100 85" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        {/* Book */}
        <path d="M50 52C69.33 52 85 57.58 85 65.5V70.5C85 65.91 69.33 60.33 50 60.33C30.67 60.33 15 65.91 15 70.5V65.5C15 57.58 30.67 52 50 52Z" fill="#012169"/>
        <path d="M95 65.5C95 57.58 79.33 52 60 52V77C79.33 77 95 71.42 95 63.5V65.5Z" fill="#012169"/>
        <path d="M5 65.5C5 57.58 20.67 52 40 52V77C20.67 77 5 71.42 5 63.5V65.5Z" fill="#012169"/>
        <path d="M90 65.5C90 57.58 74.33 52 55 52V73C74.33 73 90 67.42 90 59.5V65.5Z" fill="white"/>
        <path d="M10 65.5C10 57.58 25.67 52 45 52V73C25.67 73 10 67.42 10 59.5V65.5Z" fill="white"/>
        <path d="M50 53.5V73" stroke="#C8102E" strokeWidth="2"/>

        {/* Mortarboard */}
        <path d="M50 5L10 25L50 45L90 25L50 5Z" fill="#C8102E"/>
        {/* White lines (St. George's cross) */}
        <path d="M10 25L90 25" stroke="white" strokeWidth="5"/>
        <path d="M50 5V45" stroke="white" strokeWidth="5"/>
        {/* Blue outline */}
        <path d="M50 5L10 25L50 45L90 25L50 5Z" stroke="#012169" strokeWidth="3.5" strokeLinejoin="round"/>
        
        {/* Tassel */}
        <path d="M88 25V31" stroke="#012169" strokeWidth="2"/>
        <path d="M88 38C90.2091 38 92 36.2091 92 34C92 31.7909 90.2091 30 88 30C85.7909 30 84 31.7909 84 34C84 36.2091 85.7909 38 88 38Z" fill="#012169"/>
        <path d="M88 31.5a2.5 2.5 0 0 0 0 5" stroke="white" strokeWidth="1.5"/>
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
