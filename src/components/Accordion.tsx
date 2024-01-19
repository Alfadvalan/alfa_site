import { useState } from "react";

const Accordion =  (props: any) => {
    const [data, setData] = useState(props.datas);
    
    const handleToggleActive = () => {
        const activeNew = data.active === 1 ? 0 : 1;
        setData({...data, active : activeNew});
    }

    return (
        <div className={`w-full p-5 md:py-8 bg-white border-red-700 border-s-4 rounded-sm mb-2 md:mb-5 lg:mr-20 duration-500 cursor-pointer group ${data.active === 1 ? 'is-active bg-white' : ''}`}
        onClick={handleToggleActive}
        >
            <div className="flex items-center">
                <div className="w-full font-bold md:text-xl">
                {data.question} 
                </div>
                <div className="text-xl rotate-90 cursor-pointer duration-500 group-[.is-active]:rotate-[270deg] font-mono">
                    {'>'}
                </div>
            </div>
            <div className="overflow-hidden duration-500 max-h-0 min-h-1 group-[.is-active]:max-h-[500px] md:text-lg md:mt-1">{data.answer}
            </div>
        </div>
    );
}
export default Accordion;