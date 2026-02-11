import MainLogo from "./svg/MainLogo";
import Button from "../common/button";

const Header = () => {
    return (
        <div className="container py-[30px]">
            <div className="flex items-center justify-between">
            <MainLogo className="w-[200px]" />
            <div>
                <ul className="flex items-center gap-6 text-white font-britanicaRegular text-[18px]">
                    <li className="hover:text-[#f74b1c] transition-colors cursor-pointer">Mobile</li>
                    <li className="hover:text-[#f74b1c] transition-colors cursor-pointer">Ecommerce</li>
                    <li className="hover:text-[#f74b1c] transition-colors cursor-pointer">Staff Augmentation</li>
                    <li className="hover:text-[#f74b1c] transition-colors cursor-pointer">Products</li>
                    <li className="hover:text-[#f74b1c] transition-colors cursor-pointer">Portfolio</li>
                    <li className="hover:text-[#f74b1c] transition-colors cursor-pointer">Company</li>
                </ul>
            </div>
            <Button icon={true}/>
            </div>
        </div>
    )
}

export default Header;
