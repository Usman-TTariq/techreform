
import CapsuleLabel from "../common/capsule-label";
import ShopCartIcon from "./svg/shop-cart-icon";

const DevelopingARSoftware = () => {
    return (
        <div className="relative pb-[100px]">
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center">
                        <div className="flex justify-center pb-4 sm:pb-[22px]">
                            <CapsuleLabel firstWord="DEVELOPING" secondWord="AR" thirdWord="SOFTWARE" />
                        </div>
                        <div className="font-britanicaBlack text-[26px] leading-tight sm:text-[34px] md:text-[40px] lg:text-[42px] lg:leading-[52px] font-black">
                            <span className="text-white">Budget & Time </span>
                            <span className="text-[#F74B1C]">Needed To</span>
                            <br />
                            <span className="text-[#F74B1C]">Develop </span>
                            <span className="text-white">AR Software</span>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
                        <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[20px] font-regular text-white pt-4 sm:pt-[22px]">
                            AR applications vary in complexity depending on the implemented logic and the number of graphical assets involved. Broadly speaking, development costs typically range from $25,000 to $150,000, with higher budgets required for more advanced solutions.
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 pt-[60px] gap-18">
                    <div className="col-span-12 md:col-span-4">
                        <div>
                            <div className="w-full max-sm:mb-5 h-[2px] bg-[linear-gradient(46deg,rgba(119,36,193,1)_0%,rgba(0,0,0,0)_100%)]"></div>
                            <div className="flex items-center justify-start gap-8 pt-[30px]">
                                <ShopCartIcon className="w-[45px]" />
                                <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[28px] font-semibold text-white">
                                    AR-Powered Try-On <br /> Ecommerce App
                                </div>
                            </div>
                            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[28px] font-semibold text-white pt-4">
                                From $25,000 - $40,000
                            </div>
                            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[28px] font-semibold text-[#FF5A2D] pt-4">
                                ~ 3 months
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <div>
                            <div className="w-full max-sm:mb-5 h-[2px] bg-[linear-gradient(46deg,rgba(119,36,193,1)_0%,rgba(0,0,0,0)_100%)]"></div>
                            <div className="flex items-center justify-start gap-8 pt-[30px]">
                                <ShopCartIcon className="w-[45px]" />
                                <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[28px] font-semibold text-white">
                                    AR-Powered Training <br /> App
                                </div>
                            </div>
                            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[28px] font-semibold text-white pt-4">
                                From $30,000
                            </div>
                            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[28px] font-semibold text-[#FF5A2D] pt-4">
                                ~ 3 months
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 pt-[60px] gap-18">
                    <div className="col-span-12 md:col-span-4">
                        <div>
                            <div className="w-full max-sm:mb-5 h-[2px] bg-[linear-gradient(46deg,rgba(119,36,193,1)_0%,rgba(0,0,0,0)_100%)]"></div>
                            <div className="flex items-center justify-start gap-8 pt-[30px]">
                                <ShopCartIcon className="w-[45px]" />
                                <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[28px] font-semibold text-white">
                                    AR Software For <br /> Maintenance & Repair
                                </div>
                            </div>
                            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[28px] font-semibold text-white pt-4">
                                From $70,000 - $150,000
                            </div>
                            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[28px] font-semibold text-[#FF5A2D] pt-4">
                                ~ 3-6 months
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <div>
                            <div className="w-full max-sm:mb-5 h-[2px] bg-[linear-gradient(46deg,rgba(119,36,193,1)_0%,rgba(0,0,0,0)_100%)]"></div>
                            <div className="flex items-center justify-start gap-8 pt-[30px]">
                                <ShopCartIcon className="w-[45px]" />
                                <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[28px] font-semibold text-white">
                                    AR Software For <br/> Manufacturing Process
                                </div>
                            </div>
                            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[28px] font-semibold text-white pt-4">
                                From $100,000
                            </div>
                            <div className="font-britanicaRegular text-base sm:text-[18px] md:text-[28px] font-semibold text-[#FF5A2D] pt-4">
                                ~ 3-6 months
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DevelopingARSoftware;
