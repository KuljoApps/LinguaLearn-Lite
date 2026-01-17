import PhrasesPage from '@/components/phrases-page';
import { allPhrases } from '@/lib/phrases';
import { Utensils } from 'lucide-react';

export default function ItalianRestaurantPhrases() {
    const phraseData = allPhrases.it['restaurant'];

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <PhrasesPage 
                title={phraseData.title} 
                phrases={phraseData.phrases} 
                backHref="/learning/it/phrases"
                Icon={Utensils}
            />
        </main>
    );
}
