import MonumentsPage from '@/components/monuments-page';
import { allMonumentsData } from '@/lib/monuments';

export default function MonumentsDePage() {
    const data = allMonumentsData.de;
    return <MonumentsPage data={data} />;
}
