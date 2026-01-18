"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Search, BookCopy } from 'lucide-react';
import type { Language } from '@/lib/storage';

type StandardQuestion = { id: number; word: string; correctAnswer: string; options?: string[] };
type StandardIrregularVerb = { id: number; verb: string; form2: string; form3: string; correctTranslation: string; translationOptions?: string[] };
type FrenchIrregularVerb = { id: number; verb: string; participle: string; auxiliary: 'avoir' | 'être'; translationOptions: string[]; correctTranslation: string };
type GermanIrregularVerb = { id: number; verb: string; form2: string; form3: string; auxiliary: 'hat' | 'ist'; translationOptions: string[]; correctTranslation: string; }

type AnyQuestion = StandardQuestion | StandardIrregularVerb | FrenchIrregularVerb | GermanIrregularVerb;


interface QuestionBaseProps {
    language: Language;
    uiTexts: {
        title: string;
        searchPlaceholder: string;
        noResults: string;
        back: string;
    };
    questionSets: {
        title: string;
        questions: AnyQuestion[];
    }[];
    backHref: string;
}

function isGermanIrregularVerb(q: AnyQuestion): q is GermanIrregularVerb {
    return 'verb' in q && ('auxiliary' in q) && ('form2' in q);
}

function isFrenchIrregularVerb(q: AnyQuestion): q is FrenchIrregularVerb {
    return 'verb' in q && 'participle' in q;
}

function isStandardIrregularVerb(q: AnyQuestion): q is StandardIrregularVerb {
    return 'verb' in q && 'form2' in q && !('auxiliary' in q);
}


export default function QuestionBase({ uiTexts, questionSets, backHref }: QuestionBaseProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSets = useMemo(() => {
        if (!searchTerm.trim()) {
            return questionSets;
        }

        const lowerCaseSearch = searchTerm.toLowerCase();

        return questionSets.map(set => {
            const filteredQuestions = set.questions.filter(q => {
                if (isGermanIrregularVerb(q) || isStandardIrregularVerb(q) || isFrenchIrregularVerb(q)) {
                    return (
                        q.verb.toLowerCase().includes(lowerCaseSearch) ||
                        q.correctTranslation.toLowerCase().includes(lowerCaseSearch)
                    );
                }
                else { // StandardQuestion
                    return (
                        q.word.toLowerCase().includes(lowerCaseSearch) ||
                        q.correctAnswer.toLowerCase().includes(lowerCaseSearch)
                    );
                }
            });
            return { ...set, questions: filteredQuestions };
        }).filter(set => set.questions.length > 0);

    }, [searchTerm, questionSets]);

    return (
        <Card className="w-full max-w-2xl shadow-2xl">
            <CardHeader className="text-center space-y-10">
                <div className="flex items-center justify-center gap-4">
                    <BookCopy className="h-8 w-8" />
                    <CardTitle className="text-3xl">{uiTexts.title}</CardTitle>
                </div>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder={uiTexts.searchPlaceholder}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                    />
                </div>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-96 w-full pr-4">
                    {filteredSets.length > 0 ? (
                        <Accordion type="multiple" className="w-full">
                            {filteredSets.map((set) => (
                                <AccordionItem value={set.title} key={set.title}>
                                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                                        {set.title} ({set.questions.length})
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex flex-col gap-3">
                                            {set.questions.map((q, index) => (
                                                <React.Fragment key={q.id}>
                                                    <div className="text-sm">
                                                        {isGermanIrregularVerb(q) ? (
                                                            <>
                                                                <p><span className="font-bold">{q.verb}</span> - {q.correctTranslation}</p>
                                                                <p className="text-muted-foreground">{q.form2}, {q.auxiliary} {q.form3}</p>
                                                            </>
                                                        ) : isFrenchIrregularVerb(q) ? (
                                                             <>
                                                                <p><span className="font-bold">{q.verb}</span> - {q.correctTranslation}</p>
                                                                <p className="text-muted-foreground">Participe: {q.participle}, Auxiliaire: {q.auxiliary}</p>
                                                            </>
                                                        ) : isStandardIrregularVerb(q) ? (
                                                            <>
                                                                <p><span className="font-bold">{q.verb}</span> - {q.correctTranslation}</p>
                                                                <p className="text-muted-foreground">{q.form2}, {q.form3}</p>
                                                            </>
                                                        ) : (
                                                            <p><span className="font-bold">{(q as StandardQuestion).word}</span> - {(q as StandardQuestion).correctAnswer}</p>
                                                        )}
                                                    </div>
                                                    {index < set.questions.length - 1 && <Separator />}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    ) : (
                        <p className="text-center text-muted-foreground pt-10">{uiTexts.noResults}</p>
                    )}
                </ScrollArea>
            </CardContent>
            <CardFooter className="flex justify-center p-6 border-t">
                <Link href={backHref} passHref>
                    <Button variant="outline">
                        <ArrowLeft className="mr-2 h-4 w-4" /> {uiTexts.back}
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
