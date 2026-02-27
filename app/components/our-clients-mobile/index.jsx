import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const OurClientsMobile = () => {
    return (
        <div className="relative bg-[linear-gradient(46deg,rgba(119,36,193,1)_0%,rgba(0,0,0,0)_100%)] py-[2px] mb-[120px]">
            <div className="bg-black py-[120px]">
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
                                From startups to established enterprises, we’ve partnered with businesses of all sizes across various industries. These achievements represent only a glimpse of the impactful work we continue to deliver for our clients.
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-10 pt-14">
                        <div className="col-span-12 md:col-span-3">
                            <div className="bg-white rounded-xl p-4 flex items-center justify-center h-full min-h-[100px]">
                                <Image
                                    className="w-[120px]"
                                    src="/images/travellogo.png"
                                    alt="Hero Background"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-3">
                            <div className="bg-white rounded-xl p-4 flex items-center justify-center h-full min-h-[100px]">
                                <Image
                                    className="w-[200px]"
                                    src="/images/octanelogo.png"
                                    alt="Hero Background"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-3">
                            <div className="bg-white rounded-xl p-4 flex items-center justify-center h-full min-h-[100px]">
                                <Image
                                    className="w-[200px]"
                                    src="/images/lifelogo.png"
                                    alt="Hero Background"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-3">
                            <div className="bg-white rounded-xl p-4 flex items-center justify-center h-full min-h-[100px]">
                                <Image
                                    className="w-[100px]"
                                    src="/images/smilelogo.png"
                                    alt="Hero Background"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-3">
                            <div className="bg-white rounded-xl p-4 flex items-center justify-center h-full min-h-[100px]">
                                <Image
                                    className="w-[200px]"
                                    src="/images/truelogo.png"
                                    alt="Hero Background"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-3">
                            <div className="bg-white rounded-xl p-4 flex items-center justify-center h-full min-h-[100px]">
                                <Image
                                    className="w-[150px]"
                                    src="/images/cybexlogo.png"
                                    alt="Hero Background"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-3">
                            <div className="bg-white rounded-xl p-4 flex items-center justify-center h-full min-h-[100px]">
                                <Image
                                    className="w-[100px]"
                                    src="/images/mockuplogo.png"
                                    alt="Hero Background"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-3">
                            <div className="bg-white rounded-xl p-4 flex items-center justify-center h-full min-h-[100px]">
                                <Image
                                    className="w-[100px]"
                                    src="/images/precorlogo.png"
                                    alt="Hero Background"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClientsMobile;
