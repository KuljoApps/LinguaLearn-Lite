import QuestionBase from '@/components/learning-module';
import { questions as dePlQuestions } from '@/lib/questions/native-PL/questions-de-pl';
import { questions as plDeQuestions } from '@/lib/questions/PL-native/questions-pl-de';
import { questions as irregularVerbsDeQuestions } from '@/lib/questions/irregulars/questions-irregular-verbs-de';
import { questions as separableVerbsDeQuestions } from '@/lib/questions/phrasals/questions-phrasal-verbs-de';
import { questions as idiomsDeQuestions } from '@/lib/questions/idioms/questions-idioms-de';
import type { Language } from '@/lib/storage';

export default function LearningDeQuestionsPage() {
    const language: Language = 'de';
    const uiTexts = {
        title: "Fragendatenbank",
        searchPlaceholder: "Fragen durchsuchen...",
        noResults: "Keine Ergebnisse für Ihre Suche gefunden.",
        back: "Zurück zum Lernen"
    };

    const questionSets = [
        { title: 'Deutsch - Polnisch', questions: dePlQuestions },
        { title: 'Polnisch - Deutsch', questions: plDeQuestions },
        { title: 'Unregelmäßige Verben', questions: irregularVerbsDeQuestions },
        { title: 'Trennbare Verben', questions: separableVerbsDeQuestions },
        { title: 'Redewendungen', questions: idiomsDeQuestions },
    ];

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <QuestionBase
                language={language}
                uiTexts={uiTexts}
                questionSets={questionSets}
                backHref="/learning/de"
            />
        </main>
    );
}
