"use client";

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ArrowRightLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { getLanguage, type Language } from '@/lib/storage';
import { allSynonymQuestions } from '@/lib/games/synonym-match';

const shuffle = <T,>(array: T[]): T[] => [...array].sort(() => Math.random() - 0.5);
const GAME_SIZE = 5;
const USED_SYNONYMS_KEY_PREFIX = 'linguaLearnUsedSynonyms_';

const uiTexts = {
    title: { en: 'Synonym Match', fr: 'Jeu des Synonymes', de: 'Synonym-Paare', it: 'Abbinamento Sinonimi', es: 'Coincidencia de Sinónimos' },
    description: { en: 'Match the words with their synonyms.', fr: 'Associez les mots à leurs synonymes.', de: 'Ordne die Wörter ihren Synonymen zu.', it: 'Abbina le parole con i loro sinonimi.', es: 'Empareja las palabras con sus sinónimos.' },
    correctToastTitle: { en: 'Correct!', fr: 'Correct !', de: 'Richtig!', it: 'Corretto!', es: '¡Correcto!' },
    correctToastDesc: { en: '"{word1}" and "{word2}" are synonyms.', fr: '"{word1}" et "{word2}" sont des synonymes.', de: '"{word1}" und "{word2}" sind Synonyme.', it: '"{word1}" e "{word2}" sono sinonimi.', es: '"{word1}" y "{word2}" son sinónimos.' },
    incorrectToastTitle: { en: 'Incorrect', fr: 'Incorrect', de: 'Falsch', it: 'Sbagliato', es: 'Incorrecto' },
    incorrectToastDesc: { en: '"{word1}" and "{word2}" are not synonyms.', fr: '"{word1}" et "{word2}" ne sont pas des synonymes.', de: '"{word1}" und "{word2}" sind keine Synonyme.', it: '"{word1}" e "{word2}" non sono sinonimi.', es: '"{word1}" y "{word2}" no son sinónimos.' },
    winTitle: { en: 'You matched them all!', fr: 'Vous les avez tous trouvés !', de: 'Du hast sie alle gefunden!', it: 'Li hai abbinati tutti!', es: '¡Los has emparejado todos!' },
    playAgain: { en: 'Play Again', fr: 'Rejouer', de: 'Nochmal spielen', it: 'Gioca di nuovo', es: 'Jugar de nuevo' },
    backToGames: { en: 'Back to Game Center', fr: 'Retour au Centre de jeux', de: 'Zurück zur Spielzentrale', it: 'Torna al Centro Giochi', es: 'Volver al Centro de Juegos' }
};

const SynonymMatchPage = () => {
    const [language, setLanguage] = useState<Language>('en');
    const [wordSet, setWordSet] = useState<{ words1: string[], words2: string[], matches: Record<string, string> } | null>(null);
    const [selected1, setSelected1] = useState<string | null>(null);
    const [selected2, setSelected2] = useState<string | null>(null);
    const [correctPairs, setCorrectPairs] = useState<string[]>([]);
    const [incorrectPair, setIncorrectPair] = useState<[string, string] | null>(null);
    const { toast } = useToast();

    const getUIText = (key: keyof typeof uiTexts, replacements: Record<string, string> = {}) => {
      let text = uiTexts[key][language] || uiTexts[key]['en'];
      for (const placeholder in replacements) {
          text = text.replace(`{${placeholder}}`, replacements[placeholder]);
      }
      return text;
    };

    const setupNewGame = useCallback((lang: Language) => {
        const STORAGE_KEY = `${USED_SYNONYMS_KEY_PREFIX}${lang}`;
        const allPairsForLang = allSynonymQuestions[lang];
        
        let usedWords: string[] = [];
        try {
            const usedWordsJson = localStorage.getItem(STORAGE_KEY);
            usedWords = usedWordsJson ? JSON.parse(usedWordsJson) : [];
        } catch (e) {
            console.error("Failed to parse used synonyms", e);
            usedWords = [];
        }

        let availablePairs = allPairsForLang.filter(p => !usedWords.includes(p.word1));

        if (availablePairs.length < GAME_SIZE) {
            availablePairs = allPairsForLang;
            usedWords = [];
            localStorage.removeItem(STORAGE_KEY);
        }

        const gamePairs = shuffle(availablePairs).slice(0, GAME_SIZE);
        const newUsedWords = [...usedWords, ...gamePairs.map(p => p.word1)];
        
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(newUsedWords));
        } catch (e) {
            console.error("Failed to save used synonyms", e);
        }

        const words1 = shuffle(gamePairs.map(p => p.word1));
        const words2 = shuffle(gamePairs.map(p => p.word2));
        
        const matches: Record<string, string> = {};
        gamePairs.forEach(p => {
            matches[p.word1] = p.word2;
            matches[p.word2] = p.word1;
        });

        setWordSet({ words1, words2, matches });
        setSelected1(null);
        setSelected2(null);
        setCorrectPairs([]);
        setIncorrectPair(null);
    }, []);

    useEffect(() => {
        const handleLanguageChange = () => {
            const newLang = getLanguage();
            setLanguage(newLang);
            setupNewGame(newLang);
        };
        
        handleLanguageChange();
        window.addEventListener('language-changed', handleLanguageChange);
        
        return () => window.removeEventListener('language-changed', handleLanguageChange);
    }, [setupNewGame]);

    const handleSelect1 = (word: string) => {
        if (correctPairs.includes(word) || incorrectPair) return;
        if (selected1 === word) {
            setSelected1(null);
        } else {
            setSelected1(word);
        }
    };

    const handleSelect2 = (word: string) => {
        if (correctPairs.includes(word) || !selected1 || incorrectPair) return;

        if (wordSet && wordSet.matches[selected1] === word) {
            // Correct match
            setCorrectPairs(prev => [...prev, selected1, word]);
            toast({ title: getUIText('correctToastTitle'), description: getUIText('correctToastDesc', { word1: selected1, word2: word }), duration: 2000 });
            setSelected1(null);
            setSelected2(null);
        } else {
            // Incorrect match
            setSelected2(word);
            setIncorrectPair([selected1, word]);
            toast({ variant: "destructive", title: getUIText('incorrectToastTitle'), description: getUIText('incorrectToastDesc', { word1: selected1, word2: word }), duration: 2000 });
            setTimeout(() => {
                setSelected1(null);
                setSelected2(null);
                setIncorrectPair(null);
            }, 800);
        }
    };

    if (!wordSet) {
        return null;
    }
    
    const isGameWon = correctPairs.length === GAME_SIZE * 2;

    const getButtonClasses = (word: string, isColumn1: boolean) => {
        const isSelected = isColumn1 ? selected1 === word : selected2 === word;
        const isCorrect = correctPairs.includes(word);
        const isIncorrect = incorrectPair?.includes(word) ?? false;
        
        return cn(
            "h-16 text-lg transition-all duration-150",
            isSelected && !isIncorrect && "border-primary border-2 ring-2 ring-primary/50",
            isCorrect && "bg-success/20 text-muted-foreground line-through pointer-events-none",
            isIncorrect && "bg-destructive/80 text-destructive-foreground border-destructive"
        );
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <Card className="w-full max-w-2xl shadow-2xl">
                <CardHeader className="text-center p-6">
                    <div className="flex items-center justify-center gap-4">
                        <ArrowRightLeft className="h-8 w-8" />
                        <CardTitle className="text-3xl font-bold tracking-tight">{getUIText('title')}</CardTitle>
                    </div>
                    <p className="text-muted-foreground pt-2">{getUIText('description')}</p>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                    {isGameWon ? (
                        <div className="text-center space-y-4">
                            <h2 className="text-2xl font-bold text-success">{getUIText('winTitle')}</h2>
                            <Button onClick={() => setupNewGame(language)}>{getUIText('playAgain')}</Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-8">
                            <div className="flex flex-col gap-4">
                                {wordSet.words1.map(word => (
                                    <Button
                                        key={word}
                                        variant="outline"
                                        className={getButtonClasses(word, true)}
                                        onClick={() => handleSelect1(word)}
                                    >
                                        {word}
                                    </Button>
                                ))}
                            </div>
                            <div className="flex flex-col gap-4">
                                {wordSet.words2.map(word => (
                                    <Button
                                        key={word}
                                        variant="outline"
                                        className={getButtonClasses(word, false)}
                                        onClick={() => handleSelect2(word)}
                                    >
                                        {word}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}
                </CardContent>
                <CardFooter className="flex justify-center p-6 border-t">
                    <Link href="/games" passHref>
                        <Button variant="outline" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            <span>{getUIText('backToGames')}</span>
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </main>
    );
};

export default SynonymMatchPage;
