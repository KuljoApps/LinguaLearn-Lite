"use client";

import { useEffect, useRef, useState, useMemo } from 'react';
import { ArrowLeft, Gamepad2, Brain, Puzzle, Keyboard, EyeOff, Timer, ArrowRightLeft, Star, List, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { getFavoriteGames, toggleFavoriteGame, getLanguage, type Language } from '@/lib/storage';
import { cn } from '@/lib/utils';

const allGamesData = [
    { href: '/games/memory', icon: Brain, titles: { en: 'Memory', fr: 'Mémoire', de: 'Memory', it: 'Memory', es: 'Memoria' }, description: 'Dopasuj pary słów i ich tłumaczeń. Klasyczna gra do testowania i poprawiania zapamiętywania słownictwa.' },
    { href: '/games/crossword', icon: Puzzle, titles: { en: 'Crossword', fr: 'Mots Croisés', de: 'Kreuzworträtsel', it: 'Cruciverba', es: 'Crucigrama' }, description: 'Rozwiąż krzyżówkę, w której wskazówki są w jednym języku, a odpowiedzi w drugim. Zabawne wyzwanie słownikowe.' },
    { href: '/games/hangman', icon: Keyboard, titles: { en: 'Hangman', fr: 'Pendu', de: 'Galgenmännchen', it: 'Impiccato', es: 'Ahorcado' }, description: 'Zgadnij ukryte słowo litera po literze na podstawie polskiej wskazówki. Klasyczna gra w odgadywanie słów.' },
    { href: '/games/odd-one-out', icon: EyeOff, titles: { en: 'Odd One Out', fr: 'L\'intrus', de: 'Der Ausreißer', it: 'L\'intruso', es: 'El Intruso' }, description: 'Z grupy słów znajdź to, które nie pasuje do kategorii. Test na logikę i słownictwo.' },
    { href: '/games/translation-race', icon: Timer, titles: { en: 'Translation Race', fr: 'Course de Traduction', de: 'Übersetzungsrennen', it: 'Gara di Traduzione', es: 'Carrera de Traducción' }, description: 'Przetłumacz jak najwięcej słów w 60 sekund. Szybkie wyzwanie dla bystrych umysłów.' },
    { href: '/games/synonym-match', icon: ArrowRightLeft, titles: { en: 'Synonym Match', fr: 'Jeu des Synonymes', de: 'Synonym-Paare', it: 'Abbinamento Sinonimi', es: 'Coincidencia de Sinónimos' }, description: 'Dopasuj słowa z dwóch kolumn, które mają takie samo lub podobne znaczenie. Świetny sposób na poszerzenie słownictwa.' },
]

const SCROLL_POSITION_KEY = 'gamesScrollPosition';
const VIEW_MODE_KEY = 'gamesViewMode';

const uiTexts = {
    welcome: {
        en: 'Choose a game to practice your language skills in a fun way!',
        fr: 'Choisissez un jeu pour pratiquer vos compétences linguistiques de manière amusante !',
        de: 'Wähle ein Spiel, um deine Sprachkenntnisse auf spielerische Weise zu üben!',
        it: 'Scegli un gioco per praticare le tue abilità linguistiche in modo divertente!',
        es: '¡Elige un juego para practicar tus habilidades lingüísticas de forma divertida!'
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
    play: {
        en: 'Play',
        fr: 'Jouer',
        de: 'Spielen',
        it: 'Gioca',
        es: 'Jugar'
    }
};

const cardColors = [
    { border: 'border-amber', bg: 'bg-orange-500/10' },
    { border: 'border-destructive', bg: 'bg-destructive/10' },
    { border: 'border-success', bg: 'bg-success/10' },
    { border: 'border-blue-500', bg: 'bg-blue-500/10' },
    { border: 'border-deep-purple', bg: 'bg-deep-purple/10' },
    { border: 'border-yellow-500', bg: 'bg-yellow-500/10' },
]

export default function GamesPage() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [favorites, setFavorites] = useState<string[]>([]);
    const [view, setView] = useState<'grid' | 'list'>('grid');
    const [language, setLanguageState] = useState<Language>('en');

    useEffect(() => {
        const handleLanguageChange = () => {
            setLanguageState(getLanguage());
        };
        handleLanguageChange();
        window.addEventListener('language-changed', handleLanguageChange);

        const container = scrollContainerRef.current;
        if (container) {
            const scrollPosition = sessionStorage.getItem(SCROLL_POSITION_KEY);
            if (scrollPosition) {
                container.scrollTop = parseInt(scrollPosition, 10);
                sessionStorage.removeItem(SCROLL_POSITION_KEY);
            }
        }
        
        const loadFavorites = () => setFavorites(getFavoriteGames());
        loadFavorites();

        const savedView = localStorage.getItem(VIEW_MODE_KEY);
        if (savedView === 'list' || savedView === 'grid') {
            setView(savedView);
        }

        window.addEventListener('favorites-changed', loadFavorites);
        
        return () => {
            window.removeEventListener('language-changed', handleLanguageChange);
            window.removeEventListener('favorites-changed', loadFavorites);
        }
    }, []);

    const handleFavoriteToggle = (href: string) => {
        setFavorites(toggleFavoriteGame(href));
    }

    const handleGameClick = () => {
        const container = scrollContainerRef.current;
        if (container) {
            sessionStorage.setItem(SCROLL_POSITION_KEY, String(container.scrollTop));
        }
    };

    const handleViewToggle = () => {
        const newView = view === 'grid' ? 'list' : 'grid';
        setView(newView);
        localStorage.setItem(VIEW_MODE_KEY, newView);
    };

    const getUIText = (key: keyof typeof uiTexts) => {
        return uiTexts[key][language] || uiTexts[key]['en'];
    };

    const games = useMemo(() => allGamesData.map(game => ({
        ...game,
        title: game.titles[language] || game.titles.en
    })), [language]);

    const sortedGames = useMemo(() => {
        const favoriteGames = games.filter(game => favorites.includes(game.href));
        const otherGames = games.filter(game => !favorites.includes(game.href));

        favoriteGames.sort((a, b) => favorites.indexOf(a.href) - favorites.indexOf(b.href));

        return [...favoriteGames, ...otherGames];
    }, [favorites, games]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <Card className="w-full max-w-4xl shadow-2xl">
                <CardHeader className="text-center p-6">
                    <div className="flex items-center justify-center gap-4">
                        <Gamepad2 className="h-8 w-8" />
                        <h1 className="text-3xl font-bold tracking-tight">
                            Game{' '}
                            <span className="relative inline-block">
                                Center
                                <span className="absolute right-px -bottom-[10px] text-sm font-semibold tracking-normal text-amber">
                                Lite
                                </span>
                            </span>
                        </h1>
                    </div>
                </CardHeader>
                <CardContent ref={scrollContainerRef} className="px-6 pb-6 pt-0 max-h-[70vh] overflow-y-auto">
                    <p className="text-muted-foreground text-center pb-4">{getUIText('welcome')}</p>
                    <div className={cn(
                        view === 'grid' 
                        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4' 
                        : 'flex flex-col gap-2'
                    )}>
                        {sortedGames.map((game, index) => {
                            const Icon = game.icon;
                            const isFavorite = favorites.includes(game.href);
                            const color = cardColors[index % cardColors.length];
                            
                            if (view === 'list') {
                                return (
                                    <Link key={game.title} href={game.href} onClick={handleGameClick} className="w-full">
                                        <div className={cn("relative border-2 flex items-center p-2 justify-between rounded-lg", color.border, color.bg)}>
                                            <div className="flex items-center gap-4">
                                                <Icon className="h-8 w-8 text-primary" />
                                                <h2 className="text-lg font-semibold">{game.title}</h2>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 z-10"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    handleFavoriteToggle(game.href);
                                                }}
                                            >
                                                <Star className={cn(
                                                    "h-5 w-5 transition-colors",
                                                    isFavorite ? "text-amber fill-amber" : "text-muted-foreground/50 hover:text-muted-foreground"
                                                )} />
                                            </Button>
                                        </div>
                                    </Link>
                                )
                            }

                            return (
                                <Card key={game.title} className={cn("relative border-2", color.border, color.bg)}>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute top-2 right-2 z-10 h-8 w-8"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleFavoriteToggle(game.href);
                                        }}
                                    >
                                        <Star className={cn(
                                            "h-5 w-5 transition-colors",
                                            isFavorite ? "text-amber fill-amber" : "text-muted-foreground/50 hover:text-muted-foreground"
                                        )} />
                                    </Button>
                                    <CardHeader className="items-center">
                                        <Icon className="h-12 w-12 text-primary" />
                                        <CardTitle className="pt-2 text-center">{game.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-center text-muted-foreground h-20">{game.description.replace(/ a /g, ' a\u00A0').replace(/ i /g, ' i\u00A0').replace(/ o /g, ' o\u00A0').replace(/ u /g, ' u\u00A0').replace(/ w /g, ' w\u00A0').replace(/ z /g, ' z\u00A0')}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <Link href={game.href} className="w-full" onClick={handleGameClick}>
                                            <Button className="w-full">{getUIText('play')}</Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                            );
                        })}
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center p-6 border-t gap-4">
                    <Link href="/" passHref>
                        <Button variant="outline" className="gap-2">
                            <ArrowLeft className="h-4 w-4" /> 
                            <span>{getUIText('backToHome')}</span>
                        </Button>
                    </Link>
                    <Button variant="outline" onClick={handleViewToggle} className="gap-2">
                        {view === 'grid' ? <List className="h-4 w-4" /> : <LayoutGrid className="h-4 w-4" />}
                        <span>{getUIText('view')}</span>
                    </Button>
                </CardFooter>
            </Card>
        </main>
    );
}
