import TensesPage from '@/components/tenses-page';
import { allTenses } from '@/lib/tenses';
import type { Language } from '@/lib/storage';

export default function EnglishTenses() {
    const language: Language = 'en';
    const tenses = allTenses.filter(t => t.language === language);
    const title = "English Tenses";
    const backHref = "/learning/en";

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <TensesPage title={title} tenses={tenses} backHref={backHref} language={language} />
        </main>
    );
}
