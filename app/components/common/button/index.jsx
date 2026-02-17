import PhoneIcon from "../../header/svg/phone-icon";

const Button = ({ text = "Contact Us", icon, onClick }) => {
    return (
        <button type="button" onClick={onClick} className="group relative overflow-hidden bg-white hover:bg-transparent rounded-full px-2 py-2 cursor-pointer flex items-center gap-0 border border-[#F74B1C]">
            <span className="absolute inset-0 bg-[#F74B1C] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
            <div className="text-[#0E0E0E] relative z-10 text-[20px] font-britanicaExtraBold px-[10px] group-hover:text-white transition-colors duration-300">
                {text}
            </div>
            {
                icon && (
                    <div className="relative w-[28px] h-[28px] rounded-full bg-[#f74b1c] flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                        <PhoneIcon className="w-[13px] text-white group-hover:text-[#F74B1C] transition-colors duration-300" />
                    </div>
                )
            }
        </button>
    )
}

export default Button;