"use client";

import { useState, useEffect, useMemo } from 'react';
import { ArrowLeft, PencilLine, FileText, MessagesSquare, AlignLeft, LayoutGrid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import ProgressRing from '@/components/ProgressRing';
import { getLanguage, type Language } from '@/lib/storage';

const VIEW_MODE_KEY = 'fillTheGapViewMode';

const uiTexts = {
    welcome: {
        en: 'Practice your language skills by filling in the missing parts.',
        fr: 'Exercez vos compétences linguistiques en comblant les parties manquantes.',
        de: 'Übe deine Sprachkenntnisse, indem du die fehlenden Teile ausfüllst.',
        it: 'Esercita le tue abilità linguistiche riempiendo le parti mancanti.',
        es: 'Practica tus habilidades lingüísticas rellenando las partes que faltan.'
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

const tasksData = [
    {
        href: '/fill-the-gap/gap-words',
        icon: FileText,
        titles: {
            en: 'Gap in the Words',
            fr: 'Trou dans les Mots',
            de: 'Lücke in den Wörtern',
            it: 'Spazio nelle Parole',
            es: 'Hueco en las Palabras',
        },
        description: 'Uzupełnij słowa, wpisując brakujące litery. Świetny sposób na ćwiczenie pisowni.',
    },
    {
        href: '/fill-the-gap/gap-sentences',
        icon: MessagesSquare,
        titles: {
            en: 'Gap in the Sentences',
            fr: 'Trou dans les Phrases',
            de: 'Lücke in den Sätzen',
            it: 'Spazio nelle Frasi',
            es: 'Hueco en las Oraciones',
        },
        description: 'Uzupełnij zdania, wpisując brakujące słowa. Sprawdź swoją gramatykę i słownictwo.',
    },
    {
        href: '/fill-the-gap/gap-text',
        icon: AlignLeft,
        titles: {
            en: 'Gap in the Text',
            fr: 'Trou dans le Texte',
            de: 'Lücke im Text',
            it: 'Spazio nel Testo',
            es: 'Hueco en el Texto',
        },
        description: 'Uzupełnij brakujące zdanie w tekście, wybierając najlepszą opcję, aby sprawdzić rozumienie spójności i logicznego przepływu.',
    },
];

export default function FillTheGapPage() {
    const [language, setLanguageState] = useState<Language>('en');
    const [view, setView] = useState<'grid' | 'list'>('list');
    const [progressData, setProgressData] = useState<{ completed: number; total: number; progress: number; }[]>([]);

    useEffect(() => {
        const handleLanguageChange = () => {
            setLanguageState(getLanguage());
        };
        handleLanguageChange();
        window.addEventListener('language-changed', handleLanguageChange);
        return () => {
            window.removeEventListener('language-changed', handleLanguageChange);
        };
    }, []);

    useEffect(() => {
        const savedView = localStorage.getItem(VIEW_MODE_KEY) as 'grid' | 'list' | null;
        if (savedView) {
            setView(savedView);
        }

        setProgressData(
            Array(tasksData.length)
                .fill(0)
                .map(() => {
                    const completed = Math.floor(10 + Math.random() * 96);
                    const total = 100;
                    const progress = (completed / total) * 100;
                    return {
                        completed,
                        total,
                        progress: Math.max(10, Math.min(95, progress)),
                    };
                })
        );
    }, []);

    const handleViewToggle = () => {
        const newView = view === 'grid' ? 'list' : 'grid';
        setView(newView);
        localStorage.setItem(VIEW_MODE_KEY, newView);
    };

    const getUIText = (key: keyof typeof uiTexts) => {
        return uiTexts[key][language] || uiTexts[key]['en'];
    };

    const tasks = useMemo(() => tasksData.map(task => ({
        ...task,
        title: task.titles[language] || task.titles.en
    })), [language]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <Card className={cn(
                "w-full max-w-md shadow-2xl text-center",
                view === 'grid' && "flex flex-col h-[90vh]"
            )}>
                <CardHeader className="text-center p-6 pb-2">
                    <div className="flex items-center justify-center gap-4">
                        <PencilLine className="h-8 w-8" />
                        <h1 className="text-3xl font-bold tracking-tight">
                            Fill{' '}
                            <span className="relative inline-block">
                                Gap
                                <span className="absolute -left-[30px] -bottom-3 text-sm font-semibold tracking-normal text-amber">
                                    Lite
                                </span>
                            </span>
                        </h1>
                    </div>
                </CardHeader>
                 <CardContent className={cn(
                    "p-6 pt-0 pb-4",
                    view === 'grid' && "flex-1 overflow-y-auto"
                )}>
                    <p className="text-muted-foreground text-center pb-4">
                        {getUIText('welcome')}
                    </p>
                    {view === 'list' ? (
                        <div className="flex flex-col space-y-2">
                            {tasks.map((task) => (
                                <div key={task.href}>
                                    <Link href={task.href} passHref>
                                        <Button className="w-full h-16 text-lg" size="lg">
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
                            {tasks.map((task, index) => {
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
