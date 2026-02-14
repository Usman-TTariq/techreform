import Link from "next/link";
import MainLogo from "./svg/MainLogo";
import Button from "../common/button";

const Header = () => {
    return (
        <div className="container py-[30px] z-30 relative">
            <div className="flex items-center justify-between">
            <Link href="/"><MainLogo className="w-[200px]" /></Link>
            <div>
                <ul className="flex items-center gap-6 text-white font-britanicaRegular text-[18px]">
                    <li><Link href="/mobile" className="hover:text-[#f74b1c] transition-colors cursor-pointer">Mobile</Link></li>
                    <li className="hover:text-[#f74b1c] transition-colors cursor-pointer">Ecommerce</li>
                    <li className="hover:text-[#f74b1c] transition-colors cursor-pointer">Staff Augmentation</li>
                    <li><Link href="/products" className="hover:text-[#f74b1c] transition-colors cursor-pointer">Products</Link></li>
                    <li className="hover:text-[#f74b1c] transition-colors cursor-pointer">Portfolio</li>
                    <li><Link href="/about" className="hover:text-[#f74b1c] transition-colors cursor-pointer">Company</Link></li>
                </ul>
            </div>
            <Button icon={true}/>
            </div>
        </div>
    )
}

export default Header;
