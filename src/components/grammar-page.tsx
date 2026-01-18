"use client";

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowLeft, BookText } from 'lucide-react';
import type { GrammarRule } from '@/lib/types';
import type { Language } from '@/lib/storage';

interface GrammarPageProps {
    title: string;
    backHref: string;
    content: GrammarRule[];
}

export default function GrammarPage({ title, backHref, content }: GrammarPageProps) {
    const lang = backHref.split('/')[2] as Language;

    const backButtonTexts: Record<Language, string> = {
        en: 'Back to Grammar',
        de: 'Zurück zur Grammatik',
        es: 'Volver a Gramática',
        fr: 'Retour à la Grammaire',
        it: 'Torna a Grammatica',
    };
    
    const backText = backButtonTexts[lang] || 'Back to Grammar';

    return (
        <Card className="w-full max-w-2xl shadow-2xl">
            <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-4">
                    <BookText className="h-8 w-8" />
                    <CardTitle className="text-3xl">{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-96 w-full pr-4">
                    <Accordion type="single" collapsible className="w-full" defaultValue={content[0]?.heading}>
                        {content.map((rule) => (
                            <AccordionItem value={rule.heading} key={rule.heading}>
                                <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left">
                                    {rule.heading}
                                </AccordionTrigger>
                                <AccordionContent className="space-y-4">
                                    <p className="text-base">{rule.text}</p>
                                    {rule.examples && rule.examples.length > 0 && (
                                        <div>
                                            <p className="font-semibold">Przykłady:</p>
                                            {rule.examples.map((example, index) => (
                                                <div key={index} className="mt-2 pl-3 border-l-2 border-muted-foreground/20 pt-1 pb-2">
                                                    <p className="italic">"{example.original}"</p>
                                                    <p className="text-sm text-muted-foreground">Tłumaczenie: "{example.translation}"</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </ScrollArea>
            </CardContent>
            <CardFooter className="flex justify-center p-6 border-t">
                <Link href={backHref} passHref>
                    <Button variant="outline">
                        <ArrowLeft className="mr-2 h-4 w-4" /> {backText}
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
