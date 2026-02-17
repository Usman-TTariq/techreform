"use client";
import Image from "next/image";
import { useMemo } from "react";

const ThreeDTextRotationSection = () => {
    const text = "contact us contact us";
    const letters = useMemo(() => text.split(""), [text]);

    return (
        <>
            <style>{`
            /* Responsive vars — mobile first, Tailwind breakpoints */
            .td-wrapper {
              --td-scene-w: 140px;
              --td-scene-h: 100px;
              --td-perspective: 1800px;
              --td-shape-w: 160px;
              --td-shape-h: 200px;
              --td-radius: 160px;
              --td-cell-fs: 7vw;
              --td-cell-w: 12px;
              --td-cell-h: 80px;
            }
            @media (min-width: 480px) {
              .td-wrapper {
                --td-scene-w: 160px;
                --td-scene-h: 110px;
                --td-perspective: 2000px;
                --td-shape-w: 180px;
                --td-shape-h: 220px;
                --td-radius: 260px;
                --td-cell-fs: 7.5vw;
                --td-cell-w: 14px;
                --td-cell-h: 90px;
              }
            }
            @media (min-width: 640px) {
              .td-wrapper {
                --td-scene-w: 220px;
                --td-scene-h: 150px;
                --td-perspective: 2600px;
                --td-shape-w: 280px;
                --td-shape-h: 320px;
                --td-radius: 320px;
                --td-cell-fs: 7vw;
                --td-cell-w: 18px;
                --td-cell-h: 120px;
              }
            }
            @media (min-width: 768px) {
              .td-wrapper {
                --td-scene-w: 260px;
                --td-scene-h: 170px;
                --td-perspective: 2800px;
                --td-shape-w: 340px;
                --td-shape-h: 380px;
                --td-radius: 320px;
                --td-cell-fs: 6vw;
                --td-cell-w: 20px;
                --td-cell-h: 130px;
              }
            }
            @media (min-width: 1024px) {
              .td-wrapper {
                --td-scene-w: 300px;
                --td-scene-h: 200px;
                --td-perspective: 3000px;
                --td-shape-w: 400px;
                --td-shape-h: 440px;
                --td-radius: 320px;
                --td-cell-fs: 5vw;
                --td-cell-w: 22px;
                --td-cell-h: 140px;
              }
            }
            @media (min-width: 1280px) {
              .td-wrapper {
                --td-scene-w: 340px;
                --td-scene-h: 220px;
                --td-perspective: 3200px;
                --td-shape-w: 440px;
                --td-shape-h: 480px;
                --td-radius: 320px;
                --td-cell-fs: 4.5vw;
                --td-cell-w: 24px;
                --td-cell-h: 150px;
              }
            }
            @media (min-width: 1536px) {
              .td-wrapper {
                --td-scene-w: 380px;
                --td-scene-h: 260px;
                --td-perspective: 3400px;
                --td-shape-w: 480px;
                --td-shape-h: 520px;
                --td-radius: 320px;
                --td-cell-fs: 4vw;
                --td-cell-w: 26px;
                --td-cell-h: 160px;
              }
            }

            .td-wrapper {
              width: 100%;
              height: 420px;
              min-height: 420px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            @media (min-width: 480px) {
              .td-wrapper { height: 520px; min-height: 520px; }
            }
            @media (min-width: 640px) {
              .td-wrapper { height: 600px; min-height: 600px; }
            }
            @media (min-width: 768px) {
              .td-wrapper { height: 700px; min-height: 700px; }
            }
            @media (min-width: 1024px) {
              .td-wrapper { height: 800px; min-height: 800px; }
            }
            .td-scene {
              width: var(--td-scene-w);
              height: var(--td-scene-h);
              position: relative;
              perspective: var(--td-perspective);
            }
            .td-carousel {
              width: 100%;
              height: 100%;
              position: absolute;
              transform-style: preserve-3d;
              --tiltX: -20deg;
              --tiltY: 0deg;
              animation: td-rotate 20s linear infinite;
            }
            .td-shape {
              position: absolute;
              left: 50%;
              top: 50%;
              width: var(--td-shape-w);
              height: var(--td-shape-h);
              margin-left: calc(var(--td-shape-w) / -2);
              margin-top: calc(var(--td-shape-h) / -2);
              transform: translateZ(0);
              pointer-events: none;
              filter: drop-shadow(0 12px 32px rgba(0,0,0,0.5));
              z-index: 1;
              animation: td-rotate-counter 20s linear infinite;
            }
            .td-shape img {
              object-fit: contain;
              width: 100%;
              height: 100%;
            }
            @keyframes td-rotate-counter {
              0% { transform: translateZ(0) rotateY(0deg); }
              100% { transform: translateZ(0) rotateY(360deg); }
            }
            .td-cell {
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              width: var(--td-cell-w);
              height: var(--td-cell-h);
              left: 50%;
              top: 50%;
              margin-left: calc(var(--td-cell-w) / -2);
              margin-top: calc(var(--td-cell-h) / -2);
              font-size: var(--td-cell-fs);
              font-weight: 800;
              color: white;
              // text-transform: uppercase;
              transform: rotateY(calc((360deg / var(--count)) * var(--i))) translateZ(var(--td-radius));
            }
            @keyframes td-rotate {
              0% {
                transform: rotateY(0deg) rotateX(var(--tiltX)) rotateY(var(--tiltY));
              }
              100% {
                transform: rotateY(-360deg) rotateX(var(--tiltX)) rotateY(var(--tiltY));
              }
            }
          `}</style>
            <div className="relative -mt-8 sm:-mt-16 md:-mt-[100px] lg:-mt-[150px] z-10 overflow-hidden">
                <Image
                    src="/images/remove.png"
                    alt=""
                    width={280}
                    height={360}
                    className="absolute -top-[10%] sm:-top-[20%] left-0 w-[35%] sm:w-[30%] md:w-[25%] max-w-[140px] sm:max-w-none opacity-90"
                />
                <div className="container relative px-4 sm:px-4">
                    <div className="grid grid-cols-12 justify-center items-center">
                        <div className="col-span-12 m-auto max-w-[100vw]">
                            <div className="td-wrapper">
                                <div className="td-scene">
                                    <div className="td-carousel">
                                        {/* Central gradient shape — at z=0 so rotating text passes in front and behind */}
                                        <div className="td-shape" aria-hidden>
                                            <Image
                                                src="/images/vector.png"
                                                alt=""
                                                width={280}
                                                height={360}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        {letters.map((ch, i) => (
                                            <div
                                                key={`${ch}-${i}`}
                                                className="td-cell"
                                                style={{
                                                    // angle based on index
                                                    "--i": i,
                                                    "--count": letters.length,
                                                }}
                                            >
                                                {ch}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ThreeDTextRotationSection;