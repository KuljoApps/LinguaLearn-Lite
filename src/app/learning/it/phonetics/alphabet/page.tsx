import AlphabetPage from '@/components/alphabet-page';
import { allAlphabetData } from '@/lib/alphabet';

export default function AlphabetItPage() {
    const data = allAlphabetData.it;
    return <AlphabetPage data={data} />;
}
