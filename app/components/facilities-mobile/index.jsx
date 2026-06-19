import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const FacilitiesMobile = () => {
    return (
        <div className="relative pt-[100px] max-sm:pt-[40px] mb-[160px] max-sm:mb-[50px]">
            <Image
                className="w-full absolute top-0 left-0 h-full"
                src="/images/facilitiesbk.png"
                alt="Background graphic for Facilities mobile apps section"
                width={1000}
                height={1000}
            />
            <div className="container relative z-10">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center">
                        <div className="flex justify-center pb-4 sm:pb-[22px]">
                            <CapsuleLabel firstWord="FACILITIES" />
                        </div>
                        <div className="font-britanicaBlack text-[26px] leading-tight sm:text-[34px] md:text-[40px] lg:text-[42px] lg:leading-[52px] font-black">
                            <span className="text-white">We Create </span>
                            <span className="text-[#F74B1C]">Mobile Apps </span>
                            <span className="text-white">That</span>
                            <br />
                            <span className="text-white">Deliver Results!</span>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
                        <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px]">
                        As a forward-thinking digital product studio based in the USA, we build impactful, scalable applications. Our establishment works on a structured workflow that works overtime to convert your vision into a sleek, easy-to-use mobile app. Our maestros: expert product consultants, UI/UX designers, developers, and quality analysts design, draft, and implement your apps for 100% validty and performance. 
                        </div>
                    </div>

                </div>
                <div className="pt-[80px] max-sm:pt-[30px]">
                    <Image
                        className="w-full"
                        src="/images/bulletpoints.png"
                        alt="Facilities and workflow bullet points infographic"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
        </div>
    )
}

export default FacilitiesMobile;