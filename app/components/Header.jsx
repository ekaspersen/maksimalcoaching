"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ButtonPrimaryDark } from "../utilities/Buttons";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const MenuLink = ({ href, children }) => (
        <Link href={href} onClick={closeMenu}>
            {children}
        </Link>
    );

    return (
        <>
            <motion.header
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="inner py-4 bg-clr_black  flex items-center justify-between fixed w-full text-white font-extrabold left-0 right-0 top-0 z-50 overflow-clip"
            >
                <div className="flex gap-4">
                    <MenuLink href="/">
                        <Image
                            width={56}
                            height={48}
                            src="/M-logo.png"
                            alt="Maksimal Coaching logo"
                            className="w-9 h-8 md:w-14 md:h-12"
                        />
                    </MenuLink>
                </div>
                {/* dropdown button */}
                <AnimatePresence>
                    {!menuOpen ? (
                        <motion.div
                            key="menu-icon"
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
                    ) : (
                        <motion.div
                            key="close-icon"
                            initial={{ rotate: 45, opacity: 0, x: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            onClick={toggleMenu}
                            className="text-7xl font-light absolute right-0 px-4 py-4 md:hidden cursor-pointer"
                        >
                            +
                        </motion.div>
                    )}
                </AnimatePresence>
                {/* desktop menu */}
                <nav className="hidden md:flex gap-4 items-center">
                    <MenuLink href="/omoss">OM OSS</MenuLink>
                    <MenuLink href="/#PageFooter">KONTAKT</MenuLink>
                    <MenuLink href="/tjenester">
                        <ButtonPrimaryDark>BESTILL COACHING</ButtonPrimaryDark>
                    </MenuLink>
                    <MenuLink href="/team">FINN COACH</MenuLink>
                </nav>
            </motion.header>
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="flex md:hidden flex-col text-white font-extrabold bg-clr_black fixed top-0 bottom-32 left-0 right-0 mt-16 gap-8 text-lg items-center justify-center z-50"
                    >
                        <MenuLink href="/team">FINN COACH</MenuLink>
                        <MenuLink href="/tjenester">
                            <ButtonPrimaryDark>
                                BESTILL COACHING
                            </ButtonPrimaryDark>
                        </MenuLink>
                        <MenuLink href="/#PageFooter">KONTAKT</MenuLink>
                        <MenuLink href="/omoss">OM OSS</MenuLink>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
}

export default Header;
