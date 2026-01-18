import TraditionsPage from '@/components/traditions-page';
import { allTraditionsData } from '@/lib/traditions';

export default function TraditionsEnPage() {
    const data = allTraditionsData.en;
    return <TraditionsPage data={data} />;
}
