import Link from "next/link";

export function FooterTitle({ children }) {
    return (
        <h3 className="font-black text-xl sm:text-2xl  italic text-clr_primary">
            {children}
        </h3>
    );
}

export function FooterLink({ href, children }) {
    return (
        <Link
            href={href}
            className="font-black w-fit italic hover:text-clr_primary hover:skew-x-12 transition-all duration-300 ease-in-out"
        >
            {children}
        </Link>
    );
}

export default function Footer() {
    return (
        <footer id="PageFooter" className="bg-clr_black">
            <section className="inner flex flex-col xs:flex-row justify-between py-8 md:py-16 gap-8 md:gap-16 text-base sm:text-lg">
                <div className="flex flex-col gap-4 w-fit">
                    <FooterTitle>Naviger</FooterTitle> <hr />
                    <FooterLink href="/">Hjem</FooterLink>
                    <FooterLink href="/team">Finn din coach</FooterLink>
                    <FooterLink href="/#PageFooter">Kontakt</FooterLink>
                    <FooterLink href="/">Tjenester</FooterLink>
                    <FooterLink href="/">Om oss</FooterLink>
                </div>
                <div className="flex flex-col gap-8 w-fit">
                    <div className="flex flex-col gap-4">
                        <FooterTitle>Sosiale Medier</FooterTitle> <hr />
                        <a
                            target="blank"
                            className="font-black w-fit italic hover:text-clr_primary hover:skew-x-12 transition-all duration-300 ease-in-out"
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
                            Tlf: +47 90 40 66 77
                        </p>
                    </div>
                </div>
            </section>
        </footer>
    );
}
