import AlphabetPage from '@/components/alphabet-page';
import { allAlphabetData } from '@/lib/alphabet';

export default function AlphabetFrPage() {
    const data = allAlphabetData.fr;
    return <AlphabetPage data={data} />;
}
