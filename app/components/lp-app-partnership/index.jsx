import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const LpAppPartnership = () => {
    const partners = [
        {
            title: "International Transfers",
            desc: "Mobile Apps Development Expertise (Native & Hybrid | Xamarin, React Native)"
        },
        {
            title: "Smart Budgeting Tools",
            desc: "Scientifically Designed Information Architecture and UX"
        },
        {
            title: "Investment Insights",
            desc: "Shorter Time to Market and Quicker Break-Even"
        },
        {
            title: "Virtual Banking",
            desc: "Accountability and Ownership of Execution with Low Supervision"
        },
    ]
    return (
        <div className="relative pb-[100px] max-sm:pb-[30px]">
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center">
                        <div className="flex justify-center pb-4 sm:pb-[22px]">
                            <CapsuleLabel secondWord="PARTNERSHIP" />
                        </div>
                        <div className="font-britanicaBlack text-[26px] leading-tight sm:text-[34px] md:text-[40px] lg:text-[42px] lg:leading-[52px] font-black">
                            <span className="text-[#F74B1C]">Partner </span>
                            <span className="text-white">with Us</span>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
                        <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px]">
                            Mobile app development should be simple and smart to move your business forward. At Tech Reforms, we build custom apps without the guesswork.
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6 pt-[40px]">
                    {
                        partners.map((partner, index) => (
                            <div className="col-span-12 md:col-span-6 lg:col-span-3" key={index}>
                                <div className="rounded-xl h-full bg-[#7724c100] border border-[#444444] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-[20px] py-[40px]">
                                    <div className="flex flex-col justify-between h-full">
                                        <div className="pb-[10px] flex justify-center">
                                            <Image
                                                className="w-[70px]"
                                                src="/images/earth.png"
                                                alt="Hero Background"
                                                width={1000}
                                                height={1000}
                                            />
                                        </div>
                                        <div className="font-britanicaBlack font-bold text-[20px] sm:text-[22px] md:text-[24px] font-regular text-white text-center pb-1 sm:pb-[5px]">
                                            {partner.title}
                                        </div>
                                        <div className="font-britanicaRegular text-[18  px] font-regular text-white text-center">
                                            {partner.desc}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default LpAppPartnership;
