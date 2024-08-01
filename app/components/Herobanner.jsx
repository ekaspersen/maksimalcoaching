import Image from "next/image";
import { ButtonGhost, ButtonPrimaryDark } from "../utilities/Buttons";
import Link from "next/link";

export default function Herobanner() {
    return (
        <div className="relative inner h-screen flex flex-col items-center justify-center overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute z-0 w-auto min-w-full min-h-full object-cover"
            >
                <source
                    src="/HeroVideo-small.mp4"
                    type="video/mp4"
                    media="(max-width: 720px)"
                />
                <source
                    src="/HeroVideo-wide.webm"
                    type="video/webm"
                    media="(min-width: 721px)"
                />
                Your browser does not support the video tag.
            </video>
            <div className="absolute z-0 w-auto min-w-full min-h-full bg-clr_black opacity-90"></div>

            <div className="relative z-10 flex flex-col items-center py-28 gap-16">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-center gap-2">
                        <Image
                            src="/M-logo.png"
                            width={300}
                            height={300}
                            alt="Maksimal Coaching logo"
                            className="max-w-32 md:max-w-44"
                        />
                        <h1 className="herotxt font-extrabold text-clr_white">
                            MAKSIMAL COACHING
                        </h1>
                    </div>
                    <h2 className="flex flex-col items-center font-bold italic text-clr_gray lg:text-xl">
                        <span>ONLINE</span> <span>PERSONLIG TRENER</span>
                    </h2>
                </div>
                <div className="grid place-items-center gap-8">
                    <Link href="/checkout">
                        <ButtonGhost>BESTILL COACHING NÅ</ButtonGhost>
                    </Link>

                    <Link href="/team">
                        <ButtonPrimaryDark>FINN DIN COACH</ButtonPrimaryDark>
                    </Link>
                </div>
            </div>
        </div>
    );
}
