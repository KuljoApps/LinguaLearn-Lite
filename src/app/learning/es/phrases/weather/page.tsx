"use client";

import PhrasesPage from '@/components/phrases-page';
import { allPhrases } from '@/lib/phrases';
import { CloudSun } from 'lucide-react';

export default function SpanishWeatherPhrases() {
    const phraseData = allPhrases.es['tiempo'];

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <PhrasesPage 
                title={phraseData.title} 
                phrases={phraseData.phrases} 
                backHref="/learning/es/phrases"
            >
                <CloudSun className="h-8 w-8" />
            </PhrasesPage>
        </main>
    );
}
