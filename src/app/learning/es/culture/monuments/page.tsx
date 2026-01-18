import MonumentsPage from '@/components/monuments-page';
import { allMonumentsData } from '@/lib/monuments';

export default function MonumentsEsPage() {
    const data = allMonumentsData.es;
    return <MonumentsPage data={data} />;
}
