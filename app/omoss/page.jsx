import React from "react";
import { ButtonGhost, ButtonPrimary } from "../utilities/Buttons";
import Link from "next/link";

export const metadata = {
    title: "Om Oss | Maksimal Coaching - Din Partner for Personlig Utvikling",
    description:
        "Lær mer om Maksimal Coaching, vår filosofi, og hvordan vi hjelper deg å nå dine treningsmål. Opplev forskjellen med våre dedikerte, sertifiserte trenere.",
    keywords:
        "om oss, personlig trening, treningsfilosofi, sertifiserte trenere, treningsresultater",
    openGraph: {
        title: "Om Maksimal Coaching | Din Partner for Treningssuksess",
        description:
            "Oppdag vår unike tilnærming til personlig trening og hvordan vi kan hjelpe deg å oppnå dine treningsmål.",
        images: [{ url: "https://www.maksimalcoaching.no/M-logo.png" }],
    },
};

export default function Omoss() {
    return (
        <>
            <section className="inner w-full relative min-h-[480px] lg:min-h-[600px] my-16 md:my-20 flex flex-col justify-end lg:gap-1 py-8 ">
                <div className="absolute right-0 w-full  lg:max-w-[900px] top-0 bottom-0 bg-[url('/ina-spottes.PNG')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-b lg:h-3/4 lg:mt-auto from-transparent to-clr_black"></div>

                <h2 className="font-bold italic text-3xl flex flex-col z-10">
                    Om oss
                </h2>
                <div className="flex flex-col gap-2 z-10">
                    <h1 className="text-xl flex flex-col italic">
                        <span className="h1_text text-clr_primary">
                            Maksimal Coaching{" "}
                        </span>
                        <span className="text-base lg:text-lg font-semibold pt-2">
                            Hvor ditt potensiale blir maksimert!
                        </span>
                    </h1>
                </div>
            </section>
            <div className="flex flex-col gap-16 pb-16">
                <div className="flex flex-col gap-8 inner w-full">
                    <p className="max-w-3xl font-bold text-clr_gray">
                        Hos Maksimal Coaching er vår visjon enkel: Vi ønsker å
                        hjelpe deg med å oppnå dine mål, tilpasset det livet du
                        lever. Vårt team av erfarne og sertifiserte coacher er
                        dedikerte og støtter deg på din treningsreise, uansett
                        hvor du befinner deg i livet.
                    </p>
                    <div className="flex flex-col gap-2">
                        <h3 className="h3_text">Hvem er vi?</h3>
                        <p className="max-w-3xl pl-4">
                            Maksimal Coaching ble grunnlagt med en lidenskap for
                            å hjelpe mennesker med trening, kosthold og bedre
                            helse. Vi tilbyr forskjellige typer tjenester
                            innenfor 1-1 online coaching, hvor du får hjelp med
                            både trening og kosthold.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="h3_text">Vår tilnærming</h3>
                        <p className="max-w-3xl pl-4 ">
                            Vi tror på en helhetlig tilnærming til coachingen
                            som vi leverer, hvor vi setter mennesket og dine
                            personlige mål i fokus. Våre programmer er
                            skreddersydd for å møte dine behov og mål, og
                            coachingen vår er bygget på gode prinsipper,
                            oppdatert forskning innen trening og kosthold og
                            lang erfaring i treningsbransjen. Vi er spesielt
                            opptatt av at du skal oppnå en varig endring, og
                            ikke en «quick-fix».
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="h3_text">Våre verdier</h3>
                        <p className="max-w-3xl pl-4">
                            Vi er opptatt av å levere en tjeneste av høy
                            kvalitet og som er tilpasset dine behov. Våre
                            verdier er bygget på integritet, respekt, kunnskap
                            og engasjement. Vi ønsker å være en støttespiller
                            for deg på din reise mot bedre helse og et sunnere
                            liv, og vi er her for å hjelpe deg med å oppnå dine
                            mål.
                        </p>
                        <Link className="mt-4" href="/team">
                            <ButtonGhost>Se teamet vårt</ButtonGhost>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-8 mt-8">
                        <h3 className="h2_text text-clr_primary_dark">
                            Hvorfor velge oss?
                        </h3>
                        <p className="max-w-md border-l-2 pl-4">
                            <span className="font-semibold italic text-clr_primary text-lg lg:text-xl">
                                Personlig tilpasning
                            </span>
                            {" - "}
                            Vi vet at ingen reise er lik, og vi skreddersyr våre
                            programmer for å møte dine spesifikke behov.
                        </p>
                        <p className="max-w-md border-l-2 pl-4">
                            <span className="font-semibold italic text-clr_primary text-lg lg:text-xl">
                                Erfaring og ekspertise
                            </span>
                            {" - "}
                            Vårt team består av kompetente coacher med bred
                            erfaring innen ulike områder, og du kan være trygg
                            på at vi alltid holder oss faglig oppdatert for å
                            kunne tilby deg en best mulig tjeneste.
                        </p>
                    </div>
                </div>

                <div className="inner w-full flex flex-col gap-8">
                    {" "}
                    <h3 className="h1_text text-clr_primary_dark">
                        Kontakt oss
                    </h3>
                    <p className="max-w-3xl text-lg">
                        Er du klar til å ta det neste steget for å oppnå ditt
                        maksimale potensiale og en varig endring? Kontakt oss i
                        dag for en gratis konsultasjon og finn ut hvordan vi kan
                        hjelpe deg!
                    </p>
                    <p className="max-w-lg font-light italic text-lg">
                        Takk for at du besøkte Maksimal Coaching. <br /> Vi ser
                        frem til å være en del av din reise!
                    </p>
                    <Link href="/tjenester">
                        <ButtonPrimary>Bestill Coaching</ButtonPrimary>
                    </Link>
                </div>
            </div>
        </>
    );
}
