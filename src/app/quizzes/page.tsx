"use client";

import { useState, useEffect, useMemo } from 'react';
import { BookOpen, Dumbbell, Sparkles, MessageSquareQuote, Layers, ArrowLeft, LayoutGrid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { getLanguage, type Language } from '@/lib/storage';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import ProgressRing from '@/components/ProgressRing';

const VIEW_MODE_KEY = 'quizzesViewMode';

const uiTexts = {
    welcome: {
        en: 'Test your language skills with a variety of quizzes.',
        fr: 'Testez vos compétences linguistiques avec une variété de quiz.',
        de: 'Teste deine Sprachkenntnisse mit einer Vielzahl von Quizfragen.',
        it: 'Metti alla prova le tue abilità linguistiche con una varietà di quiz.',
        es: 'Pon a prueba tus habilidades lingüísticas con una variedad de cuestionarios.'
    },
    backToHome: {
        en: 'Back to Home',
        fr: "Retour à l'accueil",
        de: 'Zurück zur Startseite',
        it: 'Torna alla Home',
        es: 'Volver al Inicio'
    },
    view: {
        en: 'View',
        fr: 'Vue',
        de: 'Ansicht',
        it: 'Vista',
        es: 'Vista'
    },
    start: {
        en: 'Start',
        fr: 'Démarrer',
        de: 'Start',
        it: 'Inizia',
        es: 'Empezar'
    }
};

const quizContent: Record<Language, {
    'native-pl': { title: string; description: string };
    'pl-native': { title: string; description: string };
    'irregulars': { title: string; description: string };
    'phrasals': { title: string; description: string };
    'idioms': { title: string; description: string };
}> = {
    en: {
        'native-pl': { title: 'English - Polish', description: 'Przetłumacz słowa z języka angielskiego na polski. Doskonały sposób na sprawdzenie i poszerzenie podstawowego słownictwa.' },
        'pl-native': { title: 'Polish - English', description: 'Odwróć role! Sprawdź, czy potrafisz przetłumaczyć polskie słowa na angielski, aby wzmocnić swoje umiejętności.' },
        'irregulars': { title: 'Irregular Verbs', description: 'Sprawdź swoją wiedzę o angielskich czasownikach nieregularnych. Ten quiz pomoże Ci zapamiętać ich kluczowe formy i użycie.' },
        'phrasals': { title: 'Phrasal Verbs', description: 'Zmierz się z podchwytliwymi angielskimi "phrasal verbs". Opanuj popularne wyrażenia, aby Twoja mowa brzmiała bardziej naturalnie.' },
        'idioms': { title: 'Idioms', description: 'Zgadnij znaczenie popularnych angielskich idiomów. Świetny sposób na zrozumienie niuansów kulturowych i wzbogacenie mowy.' }
    },
    fr: {
        'native-pl': { title: 'Français - Polonais', description: 'Przetłumacz słowa z języka francuskiego na polski. Doskonały sposób na sprawdzenie i poszerzenie podstawowego słownictwa.' },
        'pl-native': { title: 'Polonais - Français', description: 'Odwróć role! Sprawdź, czy potrafisz przetłumaczyć polskie słowa na francuski, aby wzmocnić swoje umiejętności.' },
        'irregulars': { title: 'Verbes & Aux.', description: 'Sprawdź swoją wiedzę o francuskich czasownikach nieregularnych i posiłkowych. Ten quiz pomoże Ci zapamiętać ich kluczowe formy.' },
        'phrasals': { title: 'Faux Amis', description: 'Zmierz się z podchwytliwymi francuskimi "fałszywymi przyjaciółmi". Opanuj te słowa, aby uniknąć typowych nieporozumień.' },
        'idioms': { title: 'Idiomes', description: 'Zgadnij znaczenie popularnych francuskich idiomów. Świetny sposób na zrozumienie niuansów kulturowych i wzbogacenie mowy.' }
    },
    de: {
        'native-pl': { title: 'Deutsch - Polnisch', description: 'Przetłumacz słowa z języka niemieckiego na polski. Doskonały sposób na sprawdzenie i poszerzenie podstawowego słownictwa.' },
        'pl-native': { title: 'Polnisch - Deutsch', description: 'Odwróć role! Sprawdź, czy potrafisz przetłumaczyć polskie słowa na niemiecki, aby wzmocnić swoje umiejętności.' },
        'irregulars': { title: 'Unregelmäßige Verben', description: 'Sprawdź swoją wiedzę o niemieckich czasownikach nieregularnych. Ten quiz pomoże Ci zapamiętać ich kluczowe formy i użycie.' },
        'phrasals': { title: 'Trennbare Verben', description: 'Opanuj niemieckie czasowniki rozdzielnie złożone. Naucz się, jak poprawnie używać ich w zdaniu, aby brzmieć bardziej naturalnie.' },
        'idioms': { title: 'Redewendungen', description: 'Zgadnij znaczenie popularnych niemieckich idiomów. Świetny sposób na zrozumienie niuansów kulturowych i wzbogacenie mowy.' }
    },
    it: {
        'native-pl': { title: 'Italiano - Polacco', description: 'Przetłumacz słowa z języka włoskiego na polski. Doskonały sposób na sprawdzenie i poszerzenie podstawowego słownictwa.' },
        'pl-native': { title: 'Polacco - Italiano', description: 'Odwróć role! Sprawdź, czy potrafisz przetłumaczyć polskie słowa na włoski, aby wzmocnić swoje umiejętności.' },
        'irregulars': { title: 'Verbi Irregolari', description: 'Sprawdź swoją wiedzę o włoskich czasownikach nieregularnych. Ten quiz pomoże Ci zapamiętać ich kluczowe formy i użycie.' },
        'phrasals': { title: 'Falsi Amici', description: 'Zmierz się z podchwytliwymi włoskimi "fałszywymi przyjaciółmi". Opanuj te słowa, aby uniknąć typowych nieporozumień.' },
        'idioms': { title: 'Modi di dire', description: 'Zgadnij znaczenie popularnych włoskich idiomów. Świetny sposób na zrozumienie niuansów kulturowych i wzbogacenie mowy.' }
    },
    es: {
        'native-pl': { title: 'Español - Polaco', description: 'Przetłumacz słowa z języka hiszpańskiego na polski. Doskonały sposób na sprawdzenie i poszerzenie podstawowego słownictwa.' },
        'pl-native': { title: 'Polaco - Español', description: 'Odwróć role! Sprawdź, czy potrafisz przetłumaczyć polskie słowa na hiszpański, aby wzmocnić swoje umiejętności.' },
        'irregulars': { title: 'Verbos Irregulares', description: 'Sprawdź swoją wiedzę o hiszpańskich czasownikach nieregularnych. Ten quiz pomoże Ci zapamiętać ich kluczowe formy i użycie.' },
        'phrasals': { title: 'Falsos Amigos', description: 'Zmierz się z podchwytliwymi hiszpańskimi "fałszywymi przyjaciółmi". Opanuj te słowa, aby uniknąć typowych nieporozumień.' },
        'idioms': { title: 'Modismos', description: 'Zgadnij znaczenie popularnych hiszpańskich idiomów. Świetny sposób na zrozumienie niuansów kulturowych i wzbogacenie mowy.' }
    }
};

export default function QuizzesPage() {
    const [language, setCurrentLanguage] = useState<Language>('en');
    const [view, setView] = useState<'grid' | 'list'>('list');
    const [progressData, setProgressData] = useState<{ completed: number; total: number; progress: number; }[]>([]);

    useEffect(() => {
        const handleLanguageChange = () => {
            setCurrentLanguage(getLanguage());
        };
        handleLanguageChange();

        const savedView = localStorage.getItem(VIEW_MODE_KEY) as 'grid' | 'list' | null;
        if (savedView) {
            setView(savedView);
        }

        window.addEventListener('language-changed', handleLanguageChange);
        return () => {
            window.removeEventListener('language-changed', handleLanguageChange);
        };
    }, []);

    const handleViewToggle = () => {
        const newView = view === 'grid' ? 'list' : 'grid';
        setView(newView);
        localStorage.setItem(VIEW_MODE_KEY, newView);
    };

    const getUIText = (key: keyof typeof uiTexts) => {
        return uiTexts[key][language] || uiTexts[key]['en'];
    };

    const quizTasks = useMemo(() => {
        const lang = language;
        
        return [
            { 
                href: `/quiz/${lang}-pl`, 
                icon: BookOpen, 
                title: quizContent[lang]['native-pl'].title,
                description: quizContent[lang]['native-pl'].description
            },
            { 
                href: `/quiz/pl-${lang}`, 
                icon: Dumbbell, 
                title: quizContent[lang]['pl-native'].title,
                description: quizContent[lang]['pl-native'].description 
            },
            { 
                href: `/quiz/irregular-verbs-${lang}`, 
                icon: Sparkles, 
                title: quizContent[lang]['irregulars'].title,
                description: quizContent[lang]['irregulars'].description
            },
            { 
                href: `/quiz/phrasal-verbs-${lang}`, 
                icon: Layers, 
                title: quizContent[lang]['phrasals'].title,
                description: quizContent[lang]['phrasals'].description
            },
            { 
                href: `/quiz/idioms-${lang}`, 
                icon: MessageSquareQuote, 
                title: quizContent[lang]['idioms'].title,
                description: quizContent[lang]['idioms'].description
            },
    ]}, [language]);

    useEffect(() => {
        setProgressData(
            Array(quizTasks.length)
                .fill(0)
                .map(() => {
                    const completed = Math.floor(10 + Math.random() * 86);
                    const total = 100;
                    const progress = (completed / total) * 100;
                    return {
                        completed,
                        total,
                        progress: Math.max(10, Math.min(95, progress)),
                    };
                })
        );
    }, [quizTasks]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <Card className={cn(
                "w-full max-w-md shadow-2xl text-center",
                view === 'grid' && "flex flex-col h-[90vh]"
            )}>
                <CardHeader className="text-center p-6 pb-2">
                    <div className="flex items-center justify-center gap-4">
                        <LayoutGrid className="h-8 w-8" />
                        <h1 className="text-3xl font-bold tracking-tight">
                            <span className="relative inline-block">
                                Quizzes
                                <span className="absolute -right-1 -bottom-[8px] text-sm font-semibold tracking-normal text-amber">
                                    Lite
                                </span>
                            </span>
                        </h1>
                    </div>
                </CardHeader>
                <CardContent data-tutorial-id="quiz-buttons" className={cn(
                    "p-6 pt-0 pb-4",
                    view === 'grid' ? "flex-1 overflow-y-auto" : "flex flex-col"
                )}>
                    <p className="text-muted-foreground text-center pb-4">
                        {getUIText('welcome')}
                    </p>
                    {view === 'list' ? (
                        <div className="flex flex-col space-y-2">
                            {quizTasks.map((task) => (
                                <div key={task.href}>
                                    <Link href={task.href} passHref>
                                        <Button className="w-full h-12 text-lg" size="lg">
                                            <task.icon className="mr-2 h-5 w-5" />
                                            {task.title}
                                        </Button>
                                    </Link>
                                    <p className="text-xs italic text-muted-foreground mt-1 px-2">{task.description}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {quizTasks.map((task, index) => {
                                const Icon = task.icon;
                                const { completed, total, progress } = progressData[index] || { completed: 0, total: 0, progress: 0 };
                                return (
                                    <Card key={task.title} className="relative border-2 overflow-hidden">
                                        <ProgressRing progress={progress} completed={completed} total={total} />
                                        <CardHeader className="items-center pt-12">
                                            <Icon className="h-12 w-12 text-primary" />
                                            <CardTitle className="pt-2 text-center">{task.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-center text-muted-foreground h-20">{task.description}</p>
                                        </CardContent>
                                        <CardFooter>
                                            <Link href={task.href} className="w-full">
                                                <Button className="w-full">{getUIText('start')}</Button>
                                            </Link>
                                        </CardFooter>
                                    </Card>
                                );
                            })}
                        </div>
                    )}
                </CardContent>
                <CardFooter className={cn(
                    "flex flex-col p-6 pt-4 gap-4",
                    view === 'grid' && "mt-auto"
                )}>
                    <Separator />
                    <div className="flex justify-center gap-4">
                         <Link href="/" passHref>
                            <Button variant="outline">
                                <ArrowLeft className="mr-2 h-4 w-4" /> {getUIText('backToHome')}
                            </Button>
                        </Link>
                        <Button variant="outline" onClick={handleViewToggle} className="gap-2">
                            {view === 'grid' ? <List className="h-4 w-4" /> : <LayoutGrid className="h-4 w-4" />}
                            <span>{getUIText('view')}</span>
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </main>
    );
}
