import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const CLIENT_LOGOS = [
    { name: "Travel client", src: "/images/travellogo.png", className: "w-[120px]" },
    { name: "Octane", src: "/images/octanelogo.png", className: "w-[200px]" },
    { name: "Life", src: "/images/lifelogo.png", className: "w-[200px]" },
    { name: "Smile", src: "/images/smilelogo.png", className: "w-[100px]" },
    { name: "True", src: "/images/truelogo.png", className: "w-[200px]" },
    { name: "Cybex", src: "/images/cybexlogo.png", className: "w-[150px]" },
    { name: "Mockup", src: "/images/mockuplogo.png", className: "w-[100px]" },
    { name: "Precor", src: "/images/precorlogo.png", className: "w-[100px]" },
];

const OurClientsMobile = () => {
    return (
        <div className="relative bg-[linear-gradient(46deg,rgba(119,36,193,1)_0%,rgba(0,0,0,0)_100%)] py-[2px] mb-[120px] max-sm:mb-[0px]">
            <div className="bg-black py-[120px] max-sm:py-[50px]">
                <div className="container relative z-10">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 text-center">
                            <div className="flex justify-center pb-4 sm:pb-[22px]">
                                <CapsuleLabel firstWord="OUR CLIENTS" />
                            </div>
                            <div className="font-britanicaBlack text-[26px] leading-tight sm:text-[34px] md:text-[40px] lg:text-[42px] lg:leading-[52px] font-black">
                                <span className="text-white">Our Success </span>
                                <span className="text-[#F74B1C]">Lies In Our </span>
                                <br />
                                <span className="text-[#F74B1C]">Client’s Success</span>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-12 text-center">
                            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px]">
                            We’ve worked with many businesses across industries and growth stages, both ambitious startups and established enterprises. Here are some of the many snapshots of the meaningful results we continue to create for our clients every day.
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-10 max-sm:gap-[0px] pt-14 max-sm:pt-[30px]">
                        {CLIENT_LOGOS.map((client) => (
                            <div key={client.src} className="col-span-12 md:col-span-3 max-sm:mb-[14px]">
                                <div className="bg-white rounded-xl p-4 flex items-center justify-center h-full min-h-[100px]">
                                    <Image
                                        className={client.className}
                                        src={client.src}
                                        alt={`${client.name} client logo`}
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClientsMobile;
