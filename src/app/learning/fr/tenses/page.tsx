import TensesPage from '@/components/tenses-page';
import { allTenses } from '@/lib/tenses';
import type { Language } from '@/lib/storage';

export default function FrenchTenses() {
    const language: Language = 'fr';
    const tenses = allTenses.filter(t => t.language === language);
    const title = "Les Temps Verbaux";
    const backHref = "/learning/fr";

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <TensesPage title={title} tenses={tenses} backHref={backHref} language={language} />
        </main>
    );
}
