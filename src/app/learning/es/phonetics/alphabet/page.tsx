import AlphabetPage from '@/components/alphabet-page';
import { allAlphabetData } from '@/lib/alphabet';

export default function AlphabetEsPage() {
    const data = allAlphabetData.es;
    return <AlphabetPage data={data} />;
}
