import Image from "next/image";
import { ButtonGhost, ButtonPrimaryDark } from "../utilities/Buttons";

export default function Herobanner() {
    return (
        <div className="flex flex-col items-center inner py-28 gap-16">
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
                <span className="flex flex-col items-center font-bold italic text-clr_gray lg:text-xl">
                    <span>ONLINE</span>
                    <span>PERSONLIG TRENER</span>
                </span>
            </div>
            <div className="grid place-items-center gap-8">
                <ButtonGhost>BOOK KONSULTASJON NÅ</ButtonGhost>
                <Link href="/team">
                    <ButtonPrimaryDark>FINN DIN COACH</ButtonPrimaryDark>
                </Link>
            </div>
        </div>
    );
}
