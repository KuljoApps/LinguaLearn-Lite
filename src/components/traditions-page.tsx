"use client";

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ArrowLeft, Handshake } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { TraditionsPageData } from '@/lib/traditions';
import type { Language } from '@/lib/storage';

export default function TraditionsPage({ data }: { data: TraditionsPageData }) {
  const [displayLang, setDisplayLang] = React.useState<'pl' | 'native'>('native');

  const t = (key: keyof TraditionsPageData['ui']) => {
    const texts = data.ui[key];
    return texts[displayLang];
  };

  const getNativeLangName = (code: string) => {
    switch (code) {
      case 'en': return 'English';
      case 'de': return 'Deutsch';
      case 'fr': return 'Français';
      case 'it': return 'Italiano';
      case 'es': return 'Español';
      default: return 'Language';
    }
  };

  const flagMap: Record<Language, string> = {
    en: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    de: '🇩🇪',
    fr: '🇫🇷',
    it: '🇮🇹',
    es: '🇪🇸',
  };

  const displayedFlag = displayLang === 'native' ? flagMap[data.lang] : '🇵🇱';

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
          <div className="flex items-center gap-4">
            <Handshake className="h-8 w-8" />
            <CardTitle className="text-3xl">{t('title')}</CardTitle>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-auto p-1 rounded-md">
                <div className="flex items-center justify-center h-8 w-8 rounded-md border border-input bg-background">
                  <span className="text-xl">{displayedFlag}</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setDisplayLang('native')}>
                <span className="mr-2 text-lg">{flagMap[data.lang]}</span>
                {getNativeLangName(data.lang)}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDisplayLang('pl')}>
                <span className="mr-2 text-lg">🇵🇱</span>
                Polski
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="p-4 pt-2">
          <ScrollArea className="h-[70vh] w-full pr-4">
            <Accordion type="single" collapsible className="w-full">
              {data.traditions.map((tradition, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left">
                    {tradition.name[displayLang]}
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    <p className="text-muted-foreground text-justify">{tradition.description[displayLang]}</p>
                    <hr className="my-2 border-border" />
                    <p className="text-sm text-justify">{tradition.description[displayLang === 'native' ? 'pl' : 'native']}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollArea>
        </CardContent>
        <CardFooter className="flex justify-center p-4">
          <Link href={`/learning/${data.lang}/culture`} passHref>
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('backButton')}
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
