import { TopContentType } from "@/lib/types"
import CardWrapper from "./CardWrapper"
// import { iconBgs } from "@/lib/constants";

interface TopCardProps {
    content: TopContentType,
}

const TopCard: React.FC<TopCardProps> = ({ content }) => {
    const formatter = new Intl.NumberFormat('en-US');
    const positive = content.profit > 0;

    const iconBgs: {
        [key: string]: string,
    } = {
        revenue: 'bg-[#7FCD93]',
        transactions: 'bg-[#A9B0E5]',
        likes: 'bg-[#ECA4A4]',
        users: 'bg-[#A9B0E5]'
    }
    
    return (
        <CardWrapper additionalClassNames="flex-1 max-w-[290px] basis-[25%] sm:basis-[none]">

            <div className="flex flex-col gap-2">
                <div className={`${iconBgs[content.name]} w-8 h-8 rounded-full grid place-items-center`}>
                    <content.icon color="#fff" className="bg-[transparent] w-5 h-5" />
                </div>
                <p className="text-xs">{content.title}</p>
                <div className="flex justify-between flex-wrap gap-2">
                    <strong className="lg:text-base md:text-sm text-xs">{content.currency && '$'}{formatter.format(content.data)}</strong>
                    <span className={`rounded-[34px] px-3 py2 text-xs grid place-items-center  ${positive ? 'bg-[#E9F9EB] text-[#3CC952]' : ''}`}>{content.profit}%</span>
                </div>
            </div>
        </CardWrapper>
    )
}
export default TopCard