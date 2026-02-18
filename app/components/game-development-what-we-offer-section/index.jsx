import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";
import Button from "../common/button";

const CARDS = [
    {
        title: "Custom Game Solutions",
        desc: "We offer end-to-end custom game development tailored to your concept, audience, and monetization strategy. As a trusted game development agency, we transform ideas into interactive gaming experiences using the latest technologies and engines.",
    },
    {
        title: "Mobile Game Development",
        desc: "Our team develops exciting iOS and Android games that are fun to play and built to perform smoothly. We focus on creating engaging experiences while also helping you generate revenue through smart monetization strategies.",
    },
    {
        title: "PC and Console Game Development",
        desc: "As a reliable PC Game Development Company, we build high-quality PC and console games designed to deliver rich visuals and immersive gameplay. From detailed environments to smooth mechanics, we focus on building gaming experiences that feel engaging, polished, and ready for modern platforms.",
    },
    {
        title: "Cross-Platform Game Solutions",
        desc: "We provide cross-platform game development to make sure your game runs seamlessly across devices and operating systems, and offers maximum reach and player engagement.",
    },
];

const GameDevelopmentWhatWeOfferSection = () => {
    return (
        <div className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
            <div className="container relative px-4 sm:px-4 w-full max-w-[100vw] box-border">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center min-w-0">
                        <div className="flex justify-center pb-4 sm:pb-[22px]">
                            <CapsuleLabel firstWord="WHAT" secondWord="WE" thirdWord="OFFER" />
                        </div>
                        <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
                            <span className="text-white">Secure and Innovative </span>
                            <span className="text-[#F74B1C]">Game Development Services</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 sm:gap-4 pt-8 sm:pt-10 md:pt-[52px]">
                    {CARDS.map((card, i) => (
                        <div key={i} className="col-span-12 md:col-span-6 lg:col-span-3 min-w-0">
                            <div className="rounded-xl h-full bg-[#7724c100] border border-[#C380FE] bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] p-5 sm:p-6 md:p-[30px] py-6 sm:py-8 md:py-[46px]">
                                <div className="flex flex-col justify-between h-full min-h-0">
                                    <div className="pb-3 sm:pb-[20px]">
                                        <Image
                                            className="w-12 h-12 sm:w-[70px] sm:h-[70px]"
                                            src="/images/gamingicon.png"
                                            alt={card.title}
                                            width={70}
                                            height={70}
                                        />
                                    </div>
                                    <div className="font-britanicaBlack font-bold text-[18px] sm:text-[22px] md:text-[24px] font-regular text-white text-left pb-1 sm:pb-[5px] leading-tight break-words">
                                        {card.title}
                                    </div>
                                    <div className="font-britanicaRegular text-[13px] sm:text-[14px] font-regular text-white text-left leading-relaxed">
                                        {card.desc}
                                    </div>
                                    <div className="pt-4 sm:pt-[30px] flex justify-start">
                                        <Button text="Learn More" icon={false} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-12 gap-4 sm:gap-4 pt-8 sm:pt-12 md:pt-[90px] items-center justify-center">
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 min-w-0">
                        <div>
                            <Image
                                className="w-[90%] max-w-[200px] sm:max-w-none m-auto"
                                src="/images/user1.png"
                                alt="Game development"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 min-w-0">
                        <div>
                            <Image
                                className="w-[90%] max-w-[200px] sm:max-w-none m-auto"
                                src="/images/user2.png"
                                alt="Game development"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 min-w-0">
                        <div>
                            <Image
                                className="w-[90%] max-w-[200px] sm:max-w-none m-auto"
                                src="/images/user3.png"
                                alt="Game development"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameDevelopmentWhatWeOfferSection;
