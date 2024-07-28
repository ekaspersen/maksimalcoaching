"use client";
import Image from "next/image";
import Link from "next/link";
import ToS from "./ToS";

export function FooterTitle({ children }) {
    return (
        <h3 className="font-black text-xl sm:text-2xl  italic text-clr_white">
            {children}
        </h3>
    );
}

export function FooterLink({ href, children }) {
    return (
        <Link
            href={href}
            className="font-black border-b-2 hover:border-clr_primary  w-fit italic hover:text-clr_white text-clr_primary hover:skew-x-12 transition-all duration-300 ease-in-out"
        >
            {children}
        </Link>
    );
}

export default function Footer() {
    return (
        <footer id="PageFooter" className="bg-clr_black">
            <section className="inner flex flex-col xs:flex-row justify-between py-8 md:py-16 gap-8 md:gap-16 text-base sm:text-lg">
                <div className="flex flex-col gap-8 w-fit">
                    <div className="flex flex-col gap-4">
                        <FooterTitle>Sosiale Medier</FooterTitle> <hr />
                        <a
                            target="blank"
                            className="font-black border-b-2 hover:border-clr_primary  w-fit italic hover:text-clr_white text-clr_primary hover:skew-x-12 transition-all duration-300 ease-in-out"
                            href="https://www.instagram.com/maksimalcoaching/"
                        >
                            Instagram
                        </a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <FooterTitle>Kontakt Oss</FooterTitle> <hr />
                        <p className="font-black italic text-base sm:text-lg">
                            post@maksimalcoaching.no
                        </p>
                        <p className="font-black italic text-base sm:text-lg">
                            Tlf +47 919 99 449
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-fit">
                    <FooterTitle>Naviger</FooterTitle> <hr />
                    <FooterLink href="/">Hjem</FooterLink>
                    <FooterLink href="/team">Finn din coach</FooterLink>
                    <FooterLink href="/#PageFooter">Kontakt</FooterLink>
                    <FooterLink href="/tjenester">Tjenester</FooterLink>
                    <FooterLink href="/omoss">Om oss</FooterLink>
                </div>
            </section>
            <div className="inner pb-8">
                <ToS />
            </div>
            <div className="pb-8 inner">
                <Image
                    className="max-w-full"
                    src="/logo-maksimal-left.png"
                    width={300}
                    height={76}
                    alt="Maksimal Coaching logo"
                />
            </div>
        </footer>
    );
}
