import AlphabetPage from '@/components/alphabet-page';
import { allAlphabetData } from '@/lib/alphabet';

export default function AlphabetDePage() {
    const data = allAlphabetData.de;
    return <AlphabetPage data={data} />;
}
