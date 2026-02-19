const CapsuleLabel = ({ firstWord, secondWord, thirdWord }) => {
  return (
    <div className="flex items-start justify-start border border-[#7724C1] bg-[#7824c12c] rounded-full px-[20px] py-[10px] w-fit">
      <div className="flex justify-center items-center gap-2">
        <div className="text-white font-britanicaRegular text-[16px] uppercase font-bold max-sm:text-[12px]">{firstWord}</div>
        {
          secondWord && <div className="text-[#C88BFF] font-britanicaRegular text-[16px] uppercase font-bold max-sm:text-[12px]">{secondWord}</div>
        }
        {
            thirdWord && <div className="text-white font-britanicaRegular text-[16px] uppercase font-bold max-sm:text-[12px]">{thirdWord}</div>
        }
      </div>
    </div>
  );
};

export default CapsuleLabel;
