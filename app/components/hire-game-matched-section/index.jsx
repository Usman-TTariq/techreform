import Image from "next/image";
import CapsuleLabel from "../common/capsule-label";

const SEO_TAGS = [
  { label: "Hire Game Developer", highlighted: true },
  { label: "Hire Unity Developer", highlighted: true },
  { label: "Hire Mobile Game Developer", highlighted: true },
  { label: "Hire Unreal Engine Developer", highlighted: true },
  { label: "Game Developer for Hire", highlighted: false },
  { label: "Dedicated Game Developer", highlighted: false },
  { label: "Game App Developer", highlighted: false },
  { label: "Unity Game Developer", highlighted: false },
  { label: "Mobile Game Development Company", highlighted: false },
  { label: "Hire Game Programmer", highlighted: false },
  { label: "Casual Game Developer", highlighted: false },
  { label: "Hire AR/VR Game Developer", highlighted: false },
  { label: "Multiplayer Game Developer", highlighted: false },
  { label: "Indie Game Developer for Hire", highlighted: false },
];

const HireGameMatchedSection = () => {
  return (
    <section className="relative pb-12 sm:pb-16 md:pb-[120px] overflow-hidden w-full min-w-0 border-y border-[#444444]/50 bg-[#0E0E0E]">
      <Image
        className="w-[70%] sm:w-[50%] absolute -top-[15%] right-0 opacity-50 sm:opacity-70 pointer-events-none"
        src="https://ik.imagekit.io/sajib4aqc/whatwedobk_wisvaz.webp"
        alt=""
        width={1000}
        height={1000}
        aria-hidden
      />
      <div className="container relative z-10 px-4 sm:px-4 w-full max-w-[100vw] box-border">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start py-4 sm:py-6">
          <div className="col-span-12 lg:col-span-6 min-w-0">
            <CapsuleLabel firstWord="HIRE" secondWord="GAME DEV" />
            <h2 className="font-britanicaBlack text-[24px] leading-tight sm:text-[28px] md:text-[34px] font-black break-words pt-4 sm:pt-5">
              <span className="text-white">The Right Game Developer for Hire — </span>
              <span className="text-[#F74B1C]">Matched to Your Engine, Platform &amp; Genre</span>
            </h2>
            <p className="font-britanicaRegular text-[15px] sm:text-base text-white/85 pt-4 leading-relaxed">
              When you <strong className="text-white font-britanicaExtraBold">hire a game developer</strong>, the
              &ldquo;Unity developer&rdquo; on a resume and the engineer who can ship a live multiplayer game are
              rarely the same person. At TechReforms, we vet specifically for game development — real-time systems,
              physics, art pipelines, and platform submission experience included.
            </p>
            <p className="font-britanicaRegular text-[15px] sm:text-base text-white/85 pt-4 leading-relaxed">
              Whether you need to <strong className="text-white font-britanicaExtraBold">hire a Unity developer</strong>{" "}
              for a casual mobile title, an{" "}
              <strong className="text-white font-britanicaExtraBold">Unreal Engine developer</strong> for a
              high-fidelity PC game, or a{" "}
              <strong className="text-white font-britanicaExtraBold">dedicated mobile game developer</strong> for iOS
              and Android — we match you with specialists, not generalists.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6 min-w-0">
            <p className="font-britanicaExtraBold text-[12px] tracking-[0.1em] uppercase text-white/45 pb-3 sm:pb-4">
              We cover every search intent:
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {SEO_TAGS.map(({ label, highlighted }) => (
                <span
                  key={label}
                  className={`inline-flex items-center rounded-lg border px-3 py-1.5 text-[12px] sm:text-[13px] font-britanicaRegular ${
                    highlighted
                      ? "border-[#7724C1]/50 bg-[#7724C1]/20 text-[#C380FE]"
                      : "border-[#444444] bg-[#12141F] text-white/60"
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireGameMatchedSection;
