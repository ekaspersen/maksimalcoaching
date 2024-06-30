import Image from "next/image";
import Link from "next/link";

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
        specialty: "Strength Training",
        specialties: "Styrke, hypertrofi og vektnedgang",
        experiences: [
            "Personlig trener - AFPT",
            "10 års erfaring som styrketrening",
            "CrossFit Level 2 Trainer",
        ],
        about: "Markus Råheim er din guide til varige endringer i livsstilen. Med en personlig vektnedgang på 40 kg og over ti års erfaring i trening, tilbyr han ekspertise innen kostholdsveiledning, styrketrening og hypertrofi. La Markus hjelpe deg med å finne treningsformer som motiverer og engasjerer deg, enten det er på treningsstudioet eller utendørs.",
        email: "markusraheim@maksimalcoaching.no",
        instagram: "https://www.instagram.com/markusraaheim/",
    },
    {
        // Eskil Engdahl
        id: 2,
        name: "Eskil Engdahl",
        image: "/eskilEngdahl.jpg",
        specialty: "Strength Training",
        specialties: "Styrke, hypertrofi og vektnedgang",
        experiences: [
            "Personlig trener - AFPT",
            "10 års erfaring som styrketrening",
            "CrossFit Level 2 Trainer",
        ],
        about: "Markus Råheim er din guide til varige endringer i livsstilen. Med en personlig vektnedgang på 40 kg og over ti års erfaring i trening, tilbyr han ekspertise innen kostholdsveiledning, styrketrening og hypertrofi. La Markus hjelpe deg med å finne treningsformer som motiverer og engasjerer deg, enten det er på treningsstudioet eller utendørs.",
        email: "markusraheim@maksimalcoaching.no",
        instagram: "https://www.instagram.com/eskilengdahl/",
    },
    {
        // Markus Råheim
        id: 3,
        name: "Felipe Jr.",
        image: "/markusRaheim.jpg",
        specialty: "Strength Training",
        specialties: "Styrke, hypertrofi og vektnedgang",
        experiences: [
            "Personlig trener - AFPT",
            "10 års erfaring som styrketrening",
            "CrossFit Level 2 Trainer",
        ],
        about: "Markus Råheim er din guide til varige endringer i livsstilen. Med en personlig vektnedgang på 40 kg og over ti års erfaring i trening, tilbyr han ekspertise innen kostholdsveiledning, styrketrening og hypertrofi. La Markus hjelpe deg med å finne treningsformer som motiverer og engasjerer deg, enten det er på treningsstudioet eller utendørs.",
        email: "markusraheim@maksimalcoaching.no",
        instagram: "https://www.instagram.com/markusraaheim/",
    },
    {
        // Eskil Engdahl
        id: 4,
        name: "Eskil Engdahl",
        image: "/eskilEngdahl.jpg",
        specialty: "Strength Training",
        specialties: "Styrke, hypertrofi og vektnedgang",
        experiences: [
            "Personlig trener - AFPT",
            "10 års erfaring som styrketrening",
            "CrossFit Level 2 Trainer",
        ],
        about: "Markus Råheim er din guide til varige endringer i livsstilen. Med en personlig vektnedgang på 40 kg og over ti års erfaring i trening, tilbyr han ekspertise innen kostholdsveiledning, styrketrening og hypertrofi. La Markus hjelpe deg med å finne treningsformer som motiverer og engasjerer deg, enten det er på treningsstudioet eller utendørs.",
        email: "markusraheim@maksimalcoaching.no",
        instagram: "https://www.instagram.com/eskilengdahl/",
    },
    {
        // Markus Råheim
        id: 5,
        name: "Markus Råheim",
        image: "/markusRaheim.jpg",
        specialty: "Strength Training",
        specialties: "Styrke, hypertrofi og vektnedgang",
        experiences: [
            "Personlig trener - AFPT",
            "10 års erfaring som styrketrening",
            "CrossFit Level 2 Trainer",
        ],
        about: "Markus Råheim er din guide til varige endringer i livsstilen. Med en personlig vektnedgang på 40 kg og over ti års erfaring i trening, tilbyr han ekspertise innen kostholdsveiledning, styrketrening og hypertrofi. La Markus hjelpe deg med å finne treningsformer som motiverer og engasjerer deg, enten det er på treningsstudioet eller utendørs.",
        email: "markusraheim@maksimalcoaching.no",
        instagram: "https://www.instagram.com/markusraaheim/",
    },
    {
        // Eskil Engdahl
        id: 6,
        name: "Eskil Engdahl",
        image: "/eskilEngdahl.jpg",
        specialty: "Strength Training",
        specialties: "Styrke, hypertrofi og vektnedgang",
        experiences: [
            "Personlig trener - AFPT",
            "10 års erfaring som styrketrening",
            "CrossFit Level 2 Trainer",
        ],
        about: "Markus Råheim er din guide til varige endringer i livsstilen. Med en personlig vektnedgang på 40 kg og over ti års erfaring i trening, tilbyr han ekspertise innen kostholdsveiledning, styrketrening og hypertrofi. La Markus hjelpe deg med å finne treningsformer som motiverer og engasjerer deg, enten det er på treningsstudioet eller utendørs.",
        email: "markusraheim@maksimalcoaching.no",
        instagram: "https://www.instagram.com/eskilengdahl/",
    },
];
export function CoachCard({ coach }) {
    return (
        <div className="flex flex-col gap-6 pb-8">
            <Image
                src={coach.image}
                width={420}
                height={420}
                alt={`Bilde av ${coach.name}`}
                className="aspect-square w-full object-cover object-center max-w-96 rounded-lg border-4 border-clr_gray"
            />
            <h2 className="text-3xl font-bold italic">{coach.name}</h2>
            <div>
                <span className="italic font-bold text-lg text-clr_primary_dark">
                    Spesialitet
                </span>
                <h3 className="font-medium italic text-xl">
                    {coach.specialties}
                </h3>
            </div>
            <ul className="italic text-sm lg:text-base">
                <span>Erfaringer</span>
                {coach.experiences.map((exp, index) => (
                    <li className="ml-4 lg:ml-8" key={index}>
                        {exp}
                    </li>
                ))}
            </ul>
            <p className="italic text-sm max-w-xl">
                {coach.about}
                <div className="text-clr_primary w-fit text-xs font-black italic pt-4">
                    <a href={coach.instagram}>INSTAGRAM</a>
                    <div className="bg-clr_primary h-[2.5px] rounded-lg mt-[-1px]"></div>
                </div>
            </p>
            <div className="flex flex-col">
                <span className="text-lg font-bold italic">Kontakt meg</span>
                <span className="text-sm font-semibold italic text-clr_gray">
                    {coach.email}
                </span>
            </div>
            <hr className=" border-clr_gray" />
        </div>
    );
}
export default function Team() {
    return (
        <>
            <main>
                <section className="inner relative min-h-[480px] lg:min-h-[700px]  flex items-end py-8 bg-[url('/womanlookingatman.jpg')] bg-cover bg-center lg:bg-auto bg-no-repeat lg:bg-right">
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
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr gap-4 lg:gap-8 inner pt-8">
                    {coaches.map((coach) => (
                        <CoachCard key={coach.id} coach={coach} />
                    ))}
                </section>
            </main>
        </>
    );
}
