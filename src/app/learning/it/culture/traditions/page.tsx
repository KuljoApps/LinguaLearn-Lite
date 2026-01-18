import TraditionsPage from '@/components/traditions-page';
import { allTraditionsData } from '@/lib/traditions';

export default function TraditionsItPage() {
    const data = allTraditionsData.it;
    return <TraditionsPage data={data} />;
}
