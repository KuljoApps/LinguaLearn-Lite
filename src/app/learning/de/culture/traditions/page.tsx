import TraditionsPage from '@/components/traditions-page';
import { allTraditionsData } from '@/lib/traditions';

export default function TraditionsDePage() {
    const data = allTraditionsData.de;
    return <TraditionsPage data={data} />;
}
