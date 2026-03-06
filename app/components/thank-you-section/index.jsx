import Image from "next/image";
import ThankYouText from "./svg/thank-you-text";

const ThankYouSection = () => {
    return (
        <div className="relative h-[100vh] overflow-hidden z-10">
            <Image className="absolute top-[50%] -translate-y-1/2 right-0 w-[40%]" src="https://res.cloudinary.com/dtfy8a1wo/image/upload/v1772831281/thankyouimg_hwhncw.png" alt="Thank You" width={1000} height={1000} />
            <div className="container relative z-10 px-4 sm:px-4 w-full max-w-[100vw] box-border">
                <div className="grid grid-cols-12">
                    <div className="col-span-8">
                        <div>
                            {/* <ThankYouText /> */}
                            <Image className="absolute top-[50%] -translate-y-1/2 right-0 w-[40%]" src="https://res.cloudinary.com/dtfy8a1wo/image/upload/v1772831281/thankyouimg_hwhncw.png" alt="Thank You" width={1000} height={1000} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThankYouSection;
