import Image from "next/image";
import Link from "next/link";
import CapsuleLabel from "../common/capsule-label";
import { HIRE_DEVELOPER_CATEGORIES } from "../../constants/staff-augmentation-roles";

const CARD_CLASS =
  "group flex h-full items-center gap-3 sm:gap-4 rounded-2xl border-2 border-[#C380FE] p-4 sm:p-5 transition-all duration-200 bg-[linear-gradient(148deg,_#7724c114_0%,_#44444433_84%)] hover:shadow-[0_0_20px_rgba(195,128,254,0.15)]";

const RoleCard = ({ role }) => {
  const Icon = role.Icon;

  return (
    <Link href={role.href} className={CARD_CLASS}>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#7724C1]/30 border border-[#7724C1]/50">
        <Icon
          className="h-5 w-5 text-[#C380FE]"
          strokeWidth={1.75}
          aria-hidden
        />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-britanicaBlack text-[15px] sm:text-[16px] text-white leading-tight group-hover:text-[#F74B1C] transition-colors">
          {role.name}
        </p>
        <p className="flex items-center gap-1.5 pt-1 font-britanicaRegular text-[12px] sm:text-[13px] text-[#66BB6A]">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#66BB6A]" aria-hidden />
          Available now
        </p>
      </div>
    </Link>
  );
};

const HireDevelopersByRoleSection = () => {
  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0">
      <Image
        className="w-[70%] sm:w-[50%] absolute -top-[20%] right-0 opacity-50 sm:opacity-70 pointer-events-none"
        src="https://ik.imagekit.io/sajib4aqc/whatwedobk_wisvaz.webp"
        alt=""
        width={1000}
        height={1000}
        aria-hidden
      />

      <div className="container relative z-10 px-4 sm:px-4 w-full max-w-[100vw] box-border">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center min-w-0">
            <div className="flex justify-center pb-4 sm:pb-[22px]">
              <CapsuleLabel firstWord="HIRE" secondWord="BY" thirdWord="ROLE" />
            </div>
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[32px] md:text-[42px] md:leading-[52px] font-black break-words">
              <span className="text-white">Hire </span>
              <span className="text-[#F74B1C]">Dedicated Developers </span>
              <span className="text-white">by Role &amp; Technology</span>
            </h2>
          </div>
        </div>

        <div className="mx-auto max-w-6xl pt-8 sm:pt-10 md:pt-[52px] space-y-8 sm:space-y-10">
          {HIRE_DEVELOPER_CATEGORIES.map((category) => (
            <div key={category.title}>
              <div className="mb-4 sm:mb-5 flex items-center gap-3 sm:gap-4">
                <span className="shrink-0 font-britanicaRegular text-[11px] sm:text-xs uppercase tracking-[0.12em] text-[#C380FE]/80">
                  {category.title}
                </span>
                <div className="h-px flex-1 bg-[#C380FE]/25" aria-hidden />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {category.roles.map((role) => (
                  <RoleCard key={role.name} role={role} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireDevelopersByRoleSection;
