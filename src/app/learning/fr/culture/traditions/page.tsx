import TraditionsPage from '@/components/traditions-page';
import { allTraditionsData } from '@/lib/traditions';

export default function TraditionsFrPage() {
    const data = allTraditionsData.fr;
    return <TraditionsPage data={data} />;
}
