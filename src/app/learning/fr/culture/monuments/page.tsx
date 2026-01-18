import MonumentsPage from '@/components/monuments-page';
import { allMonumentsData } from '@/lib/monuments';

export default function MonumentsFrPage() {
    const data = allMonumentsData.fr;
    return <MonumentsPage data={data} />;
}
