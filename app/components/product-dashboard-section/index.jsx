import Image from "next/image";

const ProductDashboardSection = () => {
    return (
        <div className="relative">
            <Image
                className="absolute -bottom-[10%] right-[0%] w-[40%]"
                src="/images/dashboardbk.png"
                alt="Hero Background"
                width={1000}
                height={1000}
            />
            <div className="container relative">
                <Image
                    className="absolute top-[35%] -left-[4%] w-[280px]"
                    src="/images/dash1.png"
                    alt="Hero Background"
                    width={1000}
                    height={1000}
                />
                <Image
                    className="absolute bottom-[2%] -left-[5%] w-[300px] z-10"
                    src="/images/dash2.png"
                    alt="Hero Background"
                    width={1000}
                    height={1000}
                />
                <Image
                    className="absolute top-[25%] -right-[5%] w-[300px] z-10"
                    src="/images/dash3.png"
                    alt="Hero Background"
                    width={1000}
                    height={1000}
                />
                <Image
                    className="absolute bottom-[5%] -right-[5%] w-[300px] z-10"
                    src="/images/dash4.png"
                    alt="Hero Background"
                    width={1000}
                    height={1000}
                />
                <div>
                    <Image
                        className="w-[100%]"
                        src="/images/productdashboard.png"
                        alt="Hero Background"
                        width={1000}
                        height={1000}
                    />
                </div>
               
            </div>
        </div>
    )
}

export default ProductDashboardSection;