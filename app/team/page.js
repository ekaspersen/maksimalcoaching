import Image from "next/image";
import Link from "next/link";
import { ButtonGhost, ButtonPrimary } from "../utilities/Buttons";

export const metadata = {
    title: "Maksimal Coaching | Finn din coach",
    description:
        "Maksimal Coaching, nå dine mål med sertifiserte personlige trenere online",
};

// coachesData.js
export const coaches = [
    {
        // Markus Råheim
        id: 1,
        name: "Markus Råheim",
        image: "/markusRaheim.jpg",
        specialties:
            "Trening for muskelvekst, Maksimal styrke, Kosthold og vektnedgang",
        experiences: [
            "Personlig trener - AFPT",
            "10 års erfaring som styrketrening",
        ],
        about: "Markus Råheim er din guide til varige endringer i livsstilen. Med en personlig vektnedgang på 40 kg og over ti års erfaring i trening, tilbyr han ekspertise innen kostholdsveiledning, styrketrening og hypertrofi. La Markus hjelpe deg med å finne treningsformer som motiverer og engasjerer deg, enten det er på treningsstudioet eller utendørs.",
        email: "markusraheim@maksimalcoaching.no",
        instagram: "https://www.instagram.com/markusraaheim/",
        instagramAt: "markusraaheim",
        tjeneste1: "Kombinert oppfølging",
        tjeneste2: "treningsoppfølging",
        tjeneste3: "kostholdsoppfølging",
    },
    {
        // Ina Kolstad Rustad
        id: 2,
        name: "Ina Kolstad Rustad",
        image: "/ina-on.jpg",
        specialties:
            "Trening for muskelvekst, Trening for økt styrke og Kosthold",
        experiences: [
            "Personlig trener - Safe Education",
            "Kostholdsveileder - Safe Education",
            "Trening under og etter svangerskap - Safe Education",
            "Mobility trainer - Safe Education",
        ],
        about: "Ina har 20 års erfaring fra egentrening, både styrke og kondisjon, og har jobbet i treningsbransjen i 12 år og 4 år som Online Coach. For Ina er det viktig å finne en balanse mellom trening, jobb, familie - og sosialt liv. Trening skal være utfordrende, gøy og gi energi. Alle har tunge dager, men du angrer aldri på en treningsøkt!",
        email: "ina.rustad@maksimalcoaching.no",
        instagram: "https://www.instagram.com/inasuper/",
        instagramAt: "inasuper",
        tjeneste1: "Kombinert oppfølging",
        tjeneste2: "treningsoppfølging",
        tjeneste3: "kostholdsoppfølging",
    },
    {
        // Anders Felipe
        id: 3,
        name: "Anders Felipe",
        image: "/andersSeated.jpg",
        specialties:
            "Trening for muskelvekst, Trening for vektnedgang, Motivasjon",
        experiences: ["Personlig trener - AFPT", "Coaching - AFPT"],
        about: "Med Anders Felipe som din trener, kan du være sikker på at du vil få den veiledningen og motivasjonen du trenger for å bli en enda bedre versjon av deg selv. Han lytter til deg og hjelper akkurat deg på best mulig måte. Du vil ikke bare få en kostholdsplan/treningsplan, men et tilpasset opplegg for deg, med ukentlig oppfølging og justeringer.",
        email: "anders.felipe@maksimalcoaching.no",
        instagram: "https://www.instagram.com/felipejrjr/",
        instagramAt: "felipejrjr",
        tjeneste1: "Kombinert oppfølging",
        tjeneste2: "treningsoppfølging",
        tjeneste3: "kostholdsoppfølging",
    },
    {
        // Mathias Abrahamsen
        id: 4,
        name: "Mathias Abrahamsen",
        image: "/mathias.png",
        specialties: "Fitness, Trening for muskelvekst, Kosthold",
        experiences: [
            "Sertifisert Personlig trener - Active Education",
            "Kostholdsveileder - Active Education",
        ],
        about: "Med Mathias som coach får du ikke bare en plan og instrukser om hva du skal gjøre. Du får også en engasjert støttespiller som jobber beinhardt for at du skal nå målene dine. I et samarbeid med Mathias vil du ikke bare nå målene dine, du vil også lære mye på veien. Mathias er opptatt av at hans kunder skal lære og forstå hele prosessen, og hvorfor vi gjør som vi gjør.",
        email: "mathias.abrahamsen@maksimalcoaching.no",
        instagram: "https://www.instagram.com/mathiasabra/",
        instagramAt: "mathiasabra",
        tjeneste1: "Kombinert oppfølging",
        tjeneste2: "treningsoppfølging",
        tjeneste3: "kostholdsoppfølging",
    },
    {
        // Gro Eli
        id: 5,
        name: "Gro Eli",
        image: "/groeli_preshoot.jpg",
        specialties:
            "Trening før, under og etter graviditet, Trening for muskelvekst og bedre helse, Kosthold, rehabilitering",
        experiences: [
            "Bachelor i Ergoterapi, NTNU Trondheim",
            "Personlig trener, AFPT",
            "Kostholdsveileder, AFPT",
        ],
        about: "Gro-Eli har vært aktiv gjennom hele livet og drevet med fotball i over 10 år. I tillegg har hun flere års erfaring med styrketrening. Trening har blitt en del av hennes hverdag og en rutine i livet. Utover dette har hun en Bachelor i Ergoterapi. Hun brenner for at alle skal kunne delta i aktivitet uansett hvilke forutsetninger eller utgangspunkt de har, og har siden 2021 jobbet med hverdagsrehabilitering. Gro-Eli er utdannet personlig trener og kostholdsveileder via Akademiet for Personlig Trening. Hun er opptatt av at alle skal kunne kjenne på motivasjon, mestringsfølelse og treningsglede.",
        email: "gro.eli@maksimalcoaching.no",
        instagram: "https://www.instagram.com/groeli_trener/",
        instagramAt: "groeli_trener",
        tjeneste1: "Kombinert oppfølging",
        tjeneste2: "Treningsoppfølging",
        tjeneste3: "Kostholdsoppfølging",
    },
    {
        // Lena Prestmarken
        id: 6,
        name: "Lena Prestmarken",
        image: "/lenaprestmark.PNG",
        specialties:
            "Trening før, under og etter graviditet, Trening for muskelvekst og bedre helse, Kosthold, rehabilitering",
        experiences: [
            "Personlig trener, Safe Education",
            "Instruktør gruppetrening, Safe Education",
            "Health and lifestyle, Sats Academy",
            "Rehab/prehab, Sats Academy",
            "Kostholdsveileder, Sats Academy",
            "Coaching, Sats Academy",
            "Trening under og etter svangerskap, Sats Academy",
        ],
        about: "Lena er en av våre mest erfarne personlige trenere. Hun har jobbet som personlig trener og gruppetreningsinstruktør fulltid i 10 år. Gjennom årene har hun anskaffet seg bred erfaring og kunnskap innen trening og helse, og har et helhetlig syn på dette. Lena har god kompetanse innen vektnedgang, trening under og etter svangerskap, rehabilitering og generell styrketrening. ",
        email: "lena.prestmarken@maksimalcoaching.no",
        instagram: "https://www.instagram.com/lenaprestmarken/",
        instagramAt: "lenaprestmarken",
        tjeneste1: "Kombinert oppfølging",
        tjeneste2: "Treningsoppfølging",
        tjeneste3: "Kostholdsoppfølging",
    },
];
export function CoachCard({ coach }) {
    return (
        <div className="flex flex-col gap-6">
            <Image
                src={coach.image}
                width={420}
                height={420}
                alt={`Bilde av ${coach.name}`}
                className="aspect-square w-full object-cover object-center border-2 max-w-96 rounded-lg"
            />
            <h2 className="text-3xl font-bold italic">{coach.name}</h2>
            <div className="flex flex-col gap-6 border-l-2 pl-4">
                <div>
                    <span className="italic font-bold text-lg text-clr_primary_dark">
                        Styrker
                    </span>
                    <h3 className="font-medium italic text-xl">
                        {coach.specialties}
                    </h3>
                </div>
                <p className="font-light max-w-xl">{coach.about}</p>

                <ul className="italic text-sm lg:text-base">
                    <span className="italic font-bold text-lg text-clr_primary_dark">
                        Utdannelser og kurs
                    </span>
                    {coach.experiences.map((exp, index) => (
                        <li className="ml-4 lg:ml-8" key={index}>
                            {exp}
                        </li>
                    ))}
                </ul>
                <ul className="flex flex-col gap-1">
                    <span className="italic font-bold text-lg text-clr_primary_dark">
                        Tjenester jeg tilbyr
                    </span>
                    <li className="ml-4 lg:ml-8 text-sm lg:text-base italic">
                        {coach.tjeneste1}
                    </li>
                    <li className="ml-4 lg:ml-8 text-sm lg:text-base italic">
                        {coach.tjeneste2}
                    </li>
                    <li className="ml-4 lg:ml-8 text-sm lg:text-base italic">
                        {coach.tjeneste3}
                    </li>
                </ul>
                <ButtonPrimary>Bestill Coaching</ButtonPrimary>
                <Link
                    className="border-b-2 italic font-bold border-white w-fit"
                    href="/tjenester"
                >
                    Les mer om priser og tjenester
                </Link>
                <div className="flex flex-col">
                    <span className="italic font-bold text-lg text-clr_gray">
                        Instagram
                    </span>

                    <span
                        className="text-sm font-semibold italic text-clr_gray mt-[-4px]"
                        target="blank"
                    >
                        @{coach.instagramAt}
                    </span>
                </div>
            </div>
        </div>
    );
}
export default function Team() {
    return (
        <>
            <main>
                <section className="inner relative min-h-[480px] lg:min-h-[600px]  flex items-end py-8 ">
                    <div className="absolute right-0 w-full  xl:max-w-[900px] top-0 bottom-0 bg-[url('/ina-spottes.PNG')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-clr_black"></div>
                    <h1 className="font-bold italic text-4xl flex flex-col z-10">
                        <span className="lg:text-5xl">Møt teamet vårt</span>
                        <span className="text-base lg:text-2xl">
                            Se hvem som passer dine behov best
                        </span>
                    </h1>
                </section>
                <span className="flex flex-col gap-4 italic text-xs lg:text-lg text-clr_primary_dark inner">
                    <p className="max-w-lg lg:max-w-xl">
                        Du velger din coach etter du har valgt hvilken{" "}
                        <Link href="/" className="underline text-clr_white">
                            tjeneste
                        </Link>{" "}
                        som er rett for deg før du går videre til betaling.
                    </p>
                    <p>
                        Noe du er usikker på?{" "}
                        <Link href="/" className="underline text-clr_white">
                            Kontakt oss
                        </Link>
                    </p>
                </span>
                <section className="grid grid-cols-1 md:grid-cols-2 auto-rows-max gap-x-4 md:gap-x-8 gap-y-16 py-8 inner">
                    {coaches.map((coach) => (
                        <CoachCard key={coach.id} coach={coach} />
                    ))}
                </section>
            </main>
        </>
    );
}
