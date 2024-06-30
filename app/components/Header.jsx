"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ButtonPrimaryDark } from "../utilities/Buttons";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header className="inner py-4 bg-clr_black shadow-md shadow-clr_black flex items-center justify-between sticky text-white font-extrabold top-0 z-50">
                <div className="flex gap-4">
                    <Link href="/">
                        <Image
                            width={56}
                            height={48}
                            src="/M-logo.png"
                            alt="Maksimal Coaching logo"
                            className="w-9 h-8 md:w-14 md:h-12"
                        />
                    </Link>
                </div>
                {/* dropdown button */}
                {!menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="md:hidden"
                    >
                        <Image
                            width={32}
                            height={24}
                            src="/menu.svg"
                            alt="Meny"
                            className="cursor-pointer"
                            aria-label="Toggle menu"
                            onClick={toggleMenu}
                        />
                    </motion.div>
                )}

                {menuOpen && (
                    <motion.div
                        initial={{ rotate: 45, opacity: 0, x: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        onClick={toggleMenu}
                        className="text-7xl font-light absolute right-0 px-4 py-4"
                    >
                        +
                    </motion.div>
                )}
                {/* mobile menu */}

                {/* desktop menu */}
                <nav className="hidden md:flex gap-4 items-center">
                    <Link href="/team">FINN DIN COACH</Link>
                    <Link href="/">KONTAKT</Link>
                    <Link href="/">
                        <ButtonPrimaryDark>TJENESTER</ButtonPrimaryDark>
                    </Link>
                    <Link href="/">OM OSS</Link>
                </nav>
            </header>
            {menuOpen && (
                <motion.nav
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex md:hidden flex-col text-white font-extrabold bg-clr_black fixed top-0 bottom-32 left-0 right-0 mt-16 gap-8 text-lg items-center justify-center"
                >
                    <Link href="/team">FINN DIN COACH</Link>
                    <Link href="/">KONTAKT</Link>
                    <Link href="/">
                        <ButtonPrimaryDark>TJENESTER</ButtonPrimaryDark>
                    </Link>
                    <Link href="/">OM OSS</Link>
                </motion.nav>
            )}
        </>
    );
}

export default Header;
