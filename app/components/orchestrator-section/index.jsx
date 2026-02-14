import Image from "next/image";
import Button from "../common/button";

const OrchestratorSection = () => {
    return (
        <div className="relative pb-[100px]">
            <Image
                className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[80%]"
                src="/images/orchestrator.png"
                alt="Hero Background"
                width={1000}
                height={1000}
            />
            <div className="container relative z-10">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                className="w-[100%]"
                                src="/images/Container.png"
                                alt="Hero Background"
                                width={1000}
                                height={1000}
                            />
                            <div className="bg-[#000] py-[60px]">
                                <div>
                                    <div className="font-britanicaBlack text-[40px] leading-[42px] font-black text-center">
                                        <span className="text-white">Workflow Employee </span>
                                        <span className="text-[#F74B1C]">Orchestrator </span>
                                        <span className="text-white">Integration </span>
                                    </div>
                                    <div className="grid grid-cols-12">
                                        <div className="col-span-8 col-start-3">
                                            <div className="font-britanicaRegular text-[18px] font-regular text-white text-center pt-[24px]">
                                                Integrate FlexFlow seamlessly as your workflow orchestrator. Elevate collaboration and
                                                automation with efficient integration solutions.
                                            </div>
                                            <div className="pt-[30px] flex justify-center">
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
