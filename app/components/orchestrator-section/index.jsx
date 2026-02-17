import Image from "next/image";
import Button from "../common/button";

const OrchestratorSection = () => {
    return (
        <div className="relative pb-12 sm:pb-16 md:pb-[100px] overflow-hidden w-full min-w-0">
            <Image
                className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[95%] sm:w-[80%]"
                src="/images/orchestrator.png"
                alt=""
                width={1000}
                height={1000}
            />
            <div className="container relative z-10 px-4 sm:px-4 w-full max-w-[100vw] box-border">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 min-w-0">
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                className="w-full max-w-full h-auto"
                                src="/images/Container.png"
                                alt=""
                                width={1000}
                                height={1000}
                            />
                            <div className="bg-[#000] py-8 sm:py-12 md:py-[60px] px-2 sm:px-4">
                                <div className="min-w-0">
                                    <div className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[40px] md:leading-[42px] font-black text-center break-words">
                                        <span className="text-white">Workflow Employee </span>
                                        <span className="text-[#F74B1C]">Orchestrator </span>
                                        <span className="text-white">Integration </span>
                                    </div>
                                    <div className="grid grid-cols-12">
                                        <div className="col-span-12 md:col-span-8 md:col-start-3 min-w-0">
                                            <div className="font-britanicaRegular text-[15px] sm:text-[18px] font-regular text-white text-center pt-4 sm:pt-[24px] max-w-full leading-relaxed">
                                                Integrate FlexFlow seamlessly as your workflow orchestrator. Elevate collaboration and automation with efficient integration solutions.
                                            </div>
                                            <div className="pt-5 sm:pt-[30px] flex justify-center">
                                                <Button text="View All Integrations" icon={false} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrchestratorSection;
