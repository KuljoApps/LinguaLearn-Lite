import MonumentsPage from '@/components/monuments-page';
import { allMonumentsData } from '@/lib/monuments';

export default function MonumentsEnPage() {
    const data = allMonumentsData.en;
    return <MonumentsPage data={data} />;
}
