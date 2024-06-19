import Image from "next/image";
import Link from "next/link";
import { ButtonPrimaryDark } from "../utilities/Buttons";

function Header() {
    return (
        <header className="inner py-4 bg-clr_black shadow-md shadow-clr_black flex items-center justify-between sticky text-white font-extrabold top-0">
            <div className="flex gap-4">
                <Image
                    width={56}
                    height={48}
                    src="/M-logo.png"
                    alt="Maksimal Coaching logo"
                    className="w-9 h-8 md:w-14 md:h-12"
                />
            </div>
            <div className="lg:hidden">
                <Image
                    width={32}
                    height={24}
                    src="/menu.svg"
                    alt="Meny"
                    className="cursor-pointer"
                />
            </div>
            <nav className="hidden lg:flex gap-4 items-center">
                <Link href="/">FINN DIN COACH</Link>
                <Link href="/">KONTAKT</Link>
                <Link href="/">
                    <ButtonPrimaryDark>TJENESTER</ButtonPrimaryDark>
                </Link>
                <Link href="/">OM OSS</Link>
            </nav>
        </header>
    );
}

export default Header;
