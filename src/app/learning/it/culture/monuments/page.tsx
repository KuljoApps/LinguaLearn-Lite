import MonumentsPage from '@/components/monuments-page';
import { allMonumentsData } from '@/lib/monuments';

export default function MonumentsItPage() {
    const data = allMonumentsData.it;
    return <MonumentsPage data={data} />;
}
