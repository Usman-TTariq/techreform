import Image from "next/image";

const ProductDashboardSection = () => {
    return (
        <div className="relative w-full min-w-0 overflow-hidden">
            <Image
                className="absolute -bottom-[10%] right-0 w-[60%] sm:w-[40%] opacity-60 sm:opacity-100 hidden sm:block"
                src="/images/dashboardbk.png"
                alt=""
                width={1000}
                height={1000}
            />
            <div className="container relative px-4 sm:px-4 w-full max-w-[100vw] box-border">
                <Image
                    className="absolute top-[35%] -left-[4%] w-[120px] sm:w-[180px] md:w-[280px] hidden sm:block"
                    src="/images/dash1.png"
                    alt=""
                    width={1000}
                    height={1000}
                />
                <Image
                    className="absolute bottom-[2%] -left-[5%] w-[130px] sm:w-[200px] md:w-[300px] z-10 hidden sm:block"
                    src="/images/dash2.png"
                    alt=""
                    width={1000}
                    height={1000}
                />
                <Image
                    className="absolute top-[25%] -right-[5%] w-[130px] sm:w-[200px] md:w-[300px] z-10 hidden sm:block"
                    src="/images/dash3.png"
                    alt=""
                    width={1000}
                    height={1000}
                />
                <Image
                    className="absolute bottom-[5%] -right-[5%] w-[130px] sm:w-[200px] md:w-[300px] z-10 hidden sm:block"
                    src="/images/dash4.png"
                    alt=""
                    width={1000}
                    height={1000}
                />
                <div className="min-w-0">
                    <Image
                        className="w-full max-w-full h-auto"
                        src="/images/productdashboard.png"
                        alt="Product dashboard"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductDashboardSection;