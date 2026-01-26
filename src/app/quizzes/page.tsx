"use client";

import { BookOpen, Dumbbell, Sparkles, MessageSquareQuote, Layers, ArrowLeft, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { getLanguage } from '@/lib/storage';
import { useState, useEffect } from 'react';
import LinguaLearnLogo from '@/components/LinguaLearnLogo';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const DESCRIPTIONS_VISIBLE_KEY = 'quizzesDescriptionsVisible';

export default function QuizzesPage() {
    const [language, setCurrentLanguage] = useState<'en' | 'fr' | 'de' | 'it' | 'es'>('en');
    const [showDescriptions, setShowDescriptions] = useState(false);

    useEffect(() => {
        const handleLanguageChange = () => {
            setCurrentLanguage(getLanguage());
        };
        handleLanguageChange();

        const savedPreference = localStorage.getItem(DESCRIPTIONS_VISIBLE_KEY);
        if (savedPreference !== null) {
            setShowDescriptions(JSON.parse(savedPreference));
        }

        window.addEventListener('language-changed', handleLanguageChange);
        return () => {
            window.removeEventListener('language-changed', handleLanguageChange);
        };
    }, []);

    const handleToggleDescriptions = () => {
        const newValue = !showDescriptions;
        setShowDescriptions(newValue);
        localStorage.setItem(DESCRIPTIONS_VISIBLE_KEY, JSON.stringify(newValue));
    };
    
    const isFrench = language === 'fr';
    const isGerman = language === 'de';
    const isItalian = language === 'it';
    const isSpanish = language === 'es';

    const getWelcomeMessage = () => {
        if (isFrench) return "Prêt à remettre en question tes choix de vie dans une autre langue? Allons-y!";
        if (isGerman) return "Bereit, deine Lebensentscheidungen in einer anderen Sprache zu hinterfragen? Los geht's!";
        if (isItalian) return "Pronto a mettere in discussione le tue scelte di vita in un'altra lingua? Andiamo!";
        if (isSpanish) return "¿Listo para cuestionar tus elecciones de vida en otro idioma? ¡Vamos!";
        return "Ready to question your life choices in another language? Let's go!";
    };

    const getQuizTitle1 = () => {
        if (isFrench) return "Français - Polonais";
        if (isGerman) return "Deutsch - Polnisch";
        if (isItalian) return "Italiano - Polacco";
        if (isSpanish) return "Español - Polaco";
        return "English - Polish";
    };

     const getQuizDesc1 = () => {
        if (isFrench) return "Traduisez des mots du français vers le polonais. Un excellent moyen de tester et d'élargir votre vocabulaire de base.";
        if (isGerman) return "Übersetzen Sie Wörter vom Deutschen ins Polnische. Ideal, um Ihren Grundwortschatz zu testen und zu erweitern.";
        if (isItalian) return "Traduci parole dall'italiano al polacco. Un ottimo modo per testare ed espandere il tuo vocabolario di base.";
        if (isSpanish) return "Traduce palabras del español al polaco. Una forma excelente de probar y ampliar tu vocabulario básico.";
        return "Przetłumacz słowa z angielskiego na polski. Doskonały sposób na przetestowanie i poszerzenie podstawowego słownictwa.";
    };

    const getQuizTitle2 = () => {
        if (isFrench) return "Polonais - Français";
        if (isGerman) return "Polnisch - Deutsch";
        if (isItalian) return "Polacco - Italiano";
        if (isSpanish) return "Polaco - Español";
        return "Polish - English";
    };

    const getQuizDesc2 = () => {
        if (isFrench) return "Inversez les rôles ! Voyez si vous pouvez traduire des mots polonais en français pour renforcer vos compétences.";
        if (isGerman) return "Tauschen Sie die Rollen! Sehen Sie, ob Sie polnische Wörter ins Deutsche übersetzen können, um Ihre Fähigkeiten zu stärken.";
        if (isItalian) return "Inverti i ruoli! Vedi se riesci a tradurre parole polacche in italiano per rafforzare le tue competenze.";
        if (isSpanish) return "¡Invierte los papeles! Comprueba si puedes traducir palabras del polaco al español para fortalecer tus habilidades.";
        return "Odwróć role! Zobacz, czy potrafisz przetłumaczyć polskie słowa na angielski, aby wzmocnić swoje umiejętności.";
    };
    
    const getQuizTitle3 = () => {
        if (isFrench) return "Verbes & Aux.";
        if (isGerman) return "Unregelmäßige Verben";
        if (isItalian) return "Verbi Irregolari";
        if (isSpanish) return "Verbos Irregulares";
        return "Irregular Verbs";
    }

    const getQuizDesc3 = () => {
        if (isFrench) return "Testez vos connaissances des verbes et auxiliaires. Un quiz essentiel pour maîtriser la conjugaison française.";
        if (isGerman) return "Testen Sie Ihr Wissen über unregelmäßige Verben. Dieses Quiz hilft Ihnen, sich ihre wichtigen Formen einzuprägen.";
        if (isItalian) return "Metti alla prova la tua conoscenza dei verbi irregolari. Questo quiz ti aiuterà a memorizzare le loro forme chiave.";
        if (isSpanish) return "Pon a prueba tu conocimiento de los verbos irregulares. Este cuestionario te ayudará a memorizar sus formas clave.";
        return "Sprawdź swoją wiedzę o nieregularnych czasownikach. Ten quiz pomoże Ci zapamiętać ich kluczowe formy i zastosowanie.";
    }

    const getQuizTitle4 = () => {
        if (isFrench) return "Faux Amis";
        if (isGerman) return "Trennbare Verben";
        if (isItalian) return "Falsi Amici";
        if (isSpanish) return "Falsos Amigos";
        return "Phrasal Verbs";
    }

    const getQuizDesc4 = () => {
        if (isFrench) return "Méfiez-vous des 'faux amis' ! Identifiez les mots qui se ressemblent mais ont des significations différentes en français et en polonais.";
        if (isGerman) return "Testen Sie Ihr Verständnis von trennbaren Verben. Meistern Sie diese einzigartige deutsche Grammatikstruktur.";
        if (isItalian) return "Attenzione ai 'falsi amici'! Identifica le parole che sembrano simili ma hanno significati diversi in italiano e polacco.";
        if (isSpanish) return "¡Cuidado con los 'falsos amigos'! Identifica las palabras que parecen similares pero tienen significados diferentes en español y polaco.";
        return "Zmierz się z podchwytliwymi 'phrasal verbs'. Opanuj popularne zwroty, aby Twoja mowa brzmiała bardziej naturalnie i płynnie.";
    }
    
    const getQuizTitle5 = () => {
        if (isFrench) return "Idiomes";
        if (isGerman) return "Redewendungen";
        if (isItalian) return "Modi di dire";
        if (isSpanish) return "Modismos";
        return "Idioms";
    }

     const getQuizDesc5 = () => {
        if (isFrench) return "Devinez le sens des idiomes courants. Une excellente façon de comprendre les nuances culturelles de la langue.";
        if (isGerman) return "Errate die Bedeutung gängiger Redewendungen. Eine großartige Möglichkeit, die kulturellen Nuancen der Sprache zu verstehen.";
        if (isItalian) return "Indovina il significato degli idiomi comuni. Un ottimo modo per comprendere le sfumature culturali della lingua.";
        if (isSpanish) return "Adivina el significado de los modismos comunes. Una excelente manera de entender los matices culturales del idioma.";
        return "Zgadnij znaczenie popularnych idiomów. To świetny sposób na zrozumienie kulturowych niuansów języka i wzbogacenie wypowiedzi.";
    }

    const getTitle = () => {
        if (isFrench) return "Quiz";
        if (isGerman) return "Quiz";
        if (isItalian) return "Quiz";
        if (isSpanish) return "Cuestionarios";
        return "Quizzes";
    }

     const getBackText = () => {
        if (isFrench) return "Retour à l'accueil";
        if (isGerman) return "Zurück zur Startseite";
        if (isItalian) return "Torna alla Home";
        if (isSpanish) return "Volver al Inicio";
        return "Back to Home";
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <TooltipProvider>
                <Card className="w-full max-w-md shadow-2xl text-center">
                    <CardHeader>
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <LinguaLearnLogo width="48" height="48" />
                            <h1 className="text-4xl font-bold tracking-tight whitespace-nowrap">
                                Lingua
                                <span className="relative inline-block">
                                    Learn
                                    <span className="absolute -right-1 -bottom-4 text-lg font-semibold tracking-normal text-amber">
                                    Lite
                                    </span>
                                </span>
                            </h1>
                        </div>
                        <p className="text-muted-foreground">
                            {getWelcomeMessage()}
                        </p>
                        <div className="flex items-center justify-center pt-4">
                             <div className="w-10" />
                            <CardTitle className="text-3xl font-bold tracking-tight flex-1">{getTitle()}</CardTitle>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" onClick={handleToggleDescriptions}>
                                        <Info className="h-5 w-5" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{showDescriptions ? 'Ukryj opisy' : 'Pokaż opisy'}</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </CardHeader>
                    <CardContent data-tutorial-id="quiz-buttons" className="flex flex-col space-y-2 p-6 pt-2 pb-4">
                        <div>
                            <Link href={isFrench ? "/quiz/fr-pl" : isGerman ? "/quiz/de-pl" : isItalian ? "/quiz/it-pl" : isSpanish ? "/quiz/es-pl" : "/quiz/en-pl"} passHref>
                                <Button className="w-full h-12 text-lg" size="lg">
                                    <BookOpen className="mr-2 h-5 w-5" />
                                    {getQuizTitle1()}
                                </Button>
                            </Link>
                             {showDescriptions && <p className="text-xs italic text-muted-foreground mt-1 px-2">{getQuizDesc1()}</p>}
                        </div>
                        <div>
                            <Link href={isFrench ? "/quiz/pl-fr" : isGerman ? "/quiz/pl-de" : isItalian ? "/quiz/pl-it" : isSpanish ? "/quiz/pl-es" : "/quiz/pl-en"} passHref>
                                <Button className="w-full h-12 text-lg" size="lg">
                                    <Dumbbell className="mr-2 h-5 w-5" />
                                    {getQuizTitle2()}
                                </Button>
                            </Link>
                            {showDescriptions && <p className="text-xs italic text-muted-foreground mt-1 px-2">{getQuizDesc2()}</p>}
                        </div>
                        <div>
                            <Link href={isFrench ? "/quiz/irregular-verbs-fr" : isGerman ? "/quiz/irregular-verbs-de" : isItalian ? "/quiz/irregular-verbs-it" : isSpanish ? "/quiz/irregular-verbs-es" : "/quiz/irregular-verbs-en"} passHref>
                                <Button className="w-full h-12 text-lg" size="lg">
                                    <Sparkles className="mr-2 h-5 w-5" />
                                    {getQuizTitle3()}
                                </Button>
                            </Link>
                            {showDescriptions && <p className="text-xs italic text-muted-foreground mt-1 px-2">{getQuizDesc3()}</p>}
                        </div>
                         <div>
                            <Link href={isFrench ? "/quiz/phrasal-verbs-fr" : isGerman ? "/quiz/phrasal-verbs-de" : isItalian ? "/quiz/phrasal-verbs-it" : isSpanish ? "/quiz/phrasal-verbs-es" : "/quiz/phrasal-verbs-en"} passHref>
                                <Button className="w-full h-12 text-lg" size="lg">
                                    <Layers className="mr-2 h-5 w-5" />
                                    {getQuizTitle4()}
                                </Button>
                            </Link>
                            {showDescriptions && <p className="text-xs italic text-muted-foreground mt-1 px-2">{getQuizDesc4()}</p>}
                        </div>
                        <div>
                            <Link href={isFrench ? "/quiz/idioms-fr" : isGerman ? "/quiz/idioms-de" : isItalian ? "/quiz/idioms-it" : isSpanish ? "/quiz/idioms-es" : "/quiz/idioms-en"} passHref>
                                <Button className="w-full h-12 text-lg" size="lg">
                                    <MessageSquareQuote className="mr-2 h-5 w-5" />
                                    {getQuizTitle5()}
                                </Button>
                            </Link>
                             {showDescriptions && <p className="text-xs italic text-muted-foreground mt-1 px-2">{getQuizDesc5()}</p>}
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col p-6 pt-4 gap-4">
                        <Separator />
                         <Link href="/" passHref>
                            <Button variant="outline">
                                <ArrowLeft className="mr-2 h-4 w-4" /> {getBackText()}
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </TooltipProvider>
        </main>
    );
}
