import GrammarPage from '@/components/grammar-page';
import { allGrammar } from '@/lib/grammar';

export default function ItalianPronouns() {
    const grammarData = allGrammar.it['pronouns'];

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <GrammarPage title={grammarData.title} content={grammarData.content} backHref="/learning/it/grammar" />
        </main>
    );
}
