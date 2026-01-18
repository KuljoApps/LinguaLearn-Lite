import TraditionsPage from '@/components/traditions-page';
import { allTraditionsData } from '@/lib/traditions';

export default function TraditionsEsPage() {
    const data = allTraditionsData.es;
    return <TraditionsPage data={data} />;
}
