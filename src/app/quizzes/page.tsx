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
        'native-pl': { title: 'English - Polish', description: 'Translate words from English to Polish. An excellent way to test and expand your basic vocabulary.' },
        'pl-native': { title: 'Polish - English', description: 'Reverse the roles! See if you can translate Polish words into English to strengthen your skills.' },
        'irregulars': { title: 'Irregular Verbs', description: 'Test your knowledge of irregular verbs. This quiz will help you remember their key forms and usage.' },
        'phrasals': { title: 'Phrasal Verbs', description: 'Tackle tricky phrasal verbs. Master common expressions to make your speech sound more natural.' },
        'idioms': { title: 'Idioms', description: 'Guess the meaning of popular idioms. A great way to understand cultural nuances and enrich your speech.' }
    },
    fr: {
        'native-pl': { title: 'Français - Polonais', description: 'Traduisez des mots du français vers le polonais. Un excellent moyen de tester et d\'élargir votre vocabulaire de base.' },
        'pl-native': { title: 'Polonais - Français', description: 'Inversez les rôles ! Voyez si vous pouvez traduire des mots polonais en français pour renforcer vos compétences.' },
        'irregulars': { title: 'Verbes & Aux.', description: 'Testez vos connaissances sur les verbes irréguliers et leurs auxiliaires. Ce quiz vous aidera à mémoriser leurs formes clés.' },
        'phrasals': { title: 'Faux Amis', description: 'Affrontez les "faux amis" piégeux. Maîtrisez ces mots pour éviter les malentendus courants.' },
        'idioms': { title: 'Idiomes', description: 'Devinez le sens des idiomes populaires. C\'est un excellent moyen de comprendre les nuances culturelles de la langue et d\'enrichir votre discours.' }
    },
    de: {
        'native-pl': { title: 'Deutsch - Polnisch', description: 'Übersetze Wörter aus dem Deutschen ins Polnische. Eine ausgezeichnete Möglichkeit, deinen Grundwortschatz zu testen und zu erweitern.' },
        'pl-native': { title: 'Polnisch - Deutsch', description: 'Tausche die Rollen! Sieh, ob du polnische Wörter ins Deutsche übersetzen kannst, um deine Fähigkeiten zu stärken.' },
        'irregulars': { title: 'Unregelmäßige Verben', description: 'Teste dein Wissen über unregelmäßige Verben. Dieses Quiz hilft dir, dich an ihre Schlüsselformen und deren Verwendung zu erinnern.' },
        'phrasals': { title: 'Trennbare Verben', description: 'Meistere trennbare Verben. Lerne, wie man sie korrekt im Satz verwendet, um natürlicher zu klingen.' },
        'idioms': { title: 'Redewendungen', description: 'Errate die Bedeutung populärer Redewendungen. Eine großartige Möglichkeit, kulturelle Nuancen der Sprache zu verstehen und deinen Ausdruck zu bereichern.' }
    },
    it: {
        'native-pl': { title: 'Italiano - Polacco', description: 'Traduci parole dall\'italiano al polacco. Un ottimo modo per testare ed espandere il tuo vocabolario di base.' },
        'pl-native': { title: 'Polacco - Italiano', description: 'Inverti i ruoli! Vedi se riesci a tradurre parole polacche in italiano per rafforzare le tue abilità.' },
        'irregulars': { title: 'Verbi Irregolari', description: 'Metti alla prova la tua conoscenza dei verbi irregolari. Questo quiz ti aiuterà a ricordare le loro forme chiave e il loro utilizzo.' },
        'phrasals': { title: 'Falsi Amici', description: 'Affronta i "falsi amici" ingannevoli. Padroneggia queste parole per evitare malintesi comuni.' },
        'idioms': { title: 'Modi di dire', description: 'Indovina il significato dei modi di dire popolari. Questo è un ottimo modo per comprendere le sfumature culturali della lingua e arricchire il tuo discorso.' }
    },
    es: {
        'native-pl': { title: 'Español - Polaco', description: 'Traduce palabras del español al polaco. Una excelente manera de probar y ampliar tu vocabulario básico.' },
        'pl-native': { title: 'Polaco - Español', description: '¡Invierte los papeles! Comprueba si puedes traducir palabras polacas al español para fortalecer tus habilidades.' },
        'irregulars': { title: 'Verbos Irregulares', description: 'Pon a prueba tus conocimientos sobre los verbos irregulares. Este cuestionario te ayudará a recordar sus formas clave y su uso.' },
        'phrasals': { title: 'Falsos Amigos', description: 'Enfréntate a los "falsos amigos" engañosos. Domina estas palabras para evitar malentendidos comunes.' },
        'idioms': { title: 'Modismos', description: 'Adivina el significado de los modismos populares. Es una excelente manera de entender los matices culturales del idioma y enriquecer tu habla.' }
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
                                <span className="absolute -right-1 -bottom-[7px] text-sm font-semibold tracking-normal text-amber">
                                Lite
                                </span>
                            </span>
                        </h1>
                    </div>
                </CardHeader>
                <CardContent data-tutorial-id="quiz-buttons" className={cn(
                    "p-6 pt-0 pb-4",
                    view === 'grid' ? "flex-1 overflow-y-auto" : "flex flex-col space-y-2"
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
