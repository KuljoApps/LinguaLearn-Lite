import AlphabetPage from '@/components/alphabet-page';
import { allAlphabetData } from '@/lib/alphabet';

export default function AlphabetEnPage() {
    const data = allAlphabetData.en;
    return <AlphabetPage data={data} />;
}
