"use client";

import PhrasesPage from '@/components/phrases-page';
import { allPhrases } from '@/lib/phrases';
import { Hotel } from 'lucide-react';

export default function EnglishHotelPhrases() {
    const phraseData = allPhrases.en['hotel'];

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <PhrasesPage 
                title={phraseData.title} 
                phrases={phraseData.phrases} 
                backHref="/learning/en/phrases"
            >
                <Hotel className="h-8 w-8" />
            </PhrasesPage>
        </main>
    );
}
