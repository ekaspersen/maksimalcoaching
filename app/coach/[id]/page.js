"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonPrimary } from "../../utilities/Buttons";
import { coaches } from "@/app/data/coaches";
import { useRouter } from "next/navigation";

export default function CoachProfile({ params }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const router = useRouter();

    const coach = coaches.find((c) => c.id === params.id);

    if (!coach) return <div>Coach not found</div>;

    const handleCoachChange = (coachId) => {
        router.push(`/coach/${coachId}`);
        setIsDropdownOpen(false);
    };

    return (
        <main className="pb-24 my-16 md:my-20 gap-8 flex flex-col">
            <section className="inner w-full pt-4 pb-12">
                <CoachDropdown
                    currentCoach={coach}
                    isOpen={isDropdownOpen}
                    setIsOpen={setIsDropdownOpen}
                    onChange={handleCoachChange}
                />
            </section>
            <section className="inner w-full flex flex-col lg:flex-row gap-8">
                <div className="gap-4 italic text-4xl flex flex-col z-10">
                    <h1 className="lg:text-4xl font-bold">{coach.name}</h1>
                    <h2 className="text-base lg:text-2xl max-w-xl">
                        {coach.specialties}
                    </h2>
                    <Image
                        src={coach.image}
                        width={420}
                        height={420}
                        alt={`Bilde av ${coach.name}`}
                        className="aspect-square w-full object-cover object-center border-2 max-w-96 rounded-lg"
                    />
                    <CoachDetails coach={coach} />
                </div>

                <div className="flex flex-col gap-4">
                    <CoachInfo coach={coach} />
                </div>
            </section>

            <section className="inner w-full py-12">
                <h4 className="pl-4 text-xs pb-2 italic">
                    Utforsk flere trenere
                </h4>
                <CoachDropdown
                    currentCoach={coach}
                    isOpen={isDropdownOpen}
                    setIsOpen={setIsDropdownOpen}
                    onChange={handleCoachChange}
                />
            </section>
        </main>
    );
}

const CoachDropdown = ({ currentCoach, isOpen, setIsOpen, onChange }) => (
    <div className="relative w-64">
        <div
            className="appearance-none w-full bg-clr_black border-2 border-clr_primary_dark rounded-full py-2 px-4 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-clr_primary focus:border-clr_primary cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
        >
            {currentCoach.name}
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-clr_primary_dark">
            <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
            >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
        </div>
        {isOpen && (
            <div className="absolute z-50 w-full bg-clr_black border-2 border-clr_primary_dark mt-1 rounded-lg">
                {coaches.map((c) => (
                    <div
                        key={c.id}
                        className="px-4 py-2 hover:bg-clr_primary_dark cursor-pointer"
                        onClick={() => onChange(c.id)}
                    >
                        {c.name}
                    </div>
                ))}
            </div>
        )}
    </div>
);

const CoachInfo = ({ coach }) => {
    const formatAbout = (text) => {
        const paragraphs = text.split("\n\n");
        return paragraphs.map((paragraph, index) => {
            const parts = paragraph.split(":");
            if (parts.length > 1 && parts[0] === parts[0].toUpperCase()) {
                // Dette er en undertittel med innhold
                return (
                    <div key={index}>
                        <h3 className="font-bold italic">{parts[0]}</h3>
                        <p className="font-light max-w-xl pl-2">
                            {parts.slice(1).join(":").trim()}
                        </p>
                    </div>
                );
            } else {
                // Dette er et vanlig avsnitt
                return (
                    <p key={index} className="font-light max-w-xl pl-2">
                        {paragraph}
                    </p>
                );
            }
        });
    };

    return (
        <div className="flex flex-col gap-4">
            <span className="italic font-bold text-4xl text-clr_primary">
                Om {coach.fname}
            </span>
            <span className="border-l-2 pl-4 flex flex-col gap-4">
                {formatAbout(coach.about)}
            </span>
        </div>
    );
};

const CoachDetails = ({ coach }) => (
    <div className="flex flex-col gap-6 ">
        <ul className="italic text-sm lg:text-base">
            <span className="italic font-bold text-lg text-clr_primary_dark">
                Utdannelser og kurs
            </span>
            {coach.experiences.map(
                (exp, index) =>
                    exp && (
                        <li className="ml-4 lg:ml-8" key={index}>
                            {exp}
                        </li>
                    )
            )}
        </ul>
        <ul className="flex flex-col gap-1">
            <span className="italic font-bold text-lg text-clr_primary_dark">
                Tjenester jeg tilbyr
            </span>
            {coach.tjeneste1 && (
                <li className="ml-4 lg:ml-8 text-sm lg:text-base italic">
                    {coach.tjeneste1}
                </li>
            )}
            {coach.tjeneste2 && (
                <li className="ml-4 lg:ml-8 text-sm lg:text-base italic">
                    {coach.tjeneste2}
                </li>
            )}
            {coach.tjeneste3 && (
                <li className="ml-4 lg:ml-8 text-sm lg:text-base italic">
                    {coach.tjeneste3}
                </li>
            )}
        </ul>
        <Link className="w-fit text-base" href={`/checkout?coach=${coach.id}`}>
            <ButtonPrimary>Bestill coaching med {coach.fname}</ButtonPrimary>
        </Link>
        <Link
            className="border-b-2 text-base italic font-bold border-white w-fit"
            href="/tjenester"
        >
            Les mer om priser og tjenester
        </Link>
        <div className="flex flex-col">
            <span className="italic font-bold text-lg text-clr_gray">
                Instagram
            </span>
            <span className="text-sm font-semibold italic text-clr_gray mt-[-4px]">
                @{coach.instagramAt}
            </span>
        </div>
    </div>
);
