import Image from "next/image";
import Link from "next/link";
import { ButtonPrimary } from "../utilities/Buttons";
import { coaches } from "@/app/data/coaches";

export const metadata = {
    title: "Møt teamet vårt | Maksimal Coaching",
    description:
        "Bli kjent med vårt team av sertifiserte personlige trenere. Finn den perfekte coachen for dine treningsmål og behov hos Maksimal Coaching.",
    keywords:
        "personlige trenere, online coaches, treningseksperter, kostholdseksperter, fitness coaches",
    openGraph: {
        title: "Ekspertteamet hos Maksimal Coaching",
        description:
            "Velg din ideelle coach fra vårt team av sertifiserte personlige trenere. Spesialisert i styrketrening, vektnedgang, og kosthold.",
        images: [{ url: "https://www.maksimalcoaching.no/ina-spottes.PNG" }],
    },
};
export function CoachCard({ coach }) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-2 bg-opacity-50 pt-8 pb-4 rounded-t-2xl">
                <Image
                    src={coach.image}
                    width={512}
                    height={512}
                    alt={`Bilde av ${coach.name}`}
                    className="aspect-square w-80 max-w-full border-2 object-cover object-center rounded-lg"
                />
                <h2 className="text-3xl mt-2 font-bold italic">{coach.name}</h2>
                <h3 className="italic text-clr_primary_dark font-bold">
                    {coach.specialties}
                </h3>
            </div>
            <div className="flex flex-col gap-8 bg-clr_black">
                <div className="flex flex-col gap-4">
                    <p className="font-light max-w-xl line-clamp-4 overflow-hidden text-ellipsis">
                        {coach.shortBio}
                    </p>
                    <Link className="w-fit" href={`/coach/${coach.id}`}>
                        <ButtonPrimary>
                            <span className="lg:text-base">
                                Les mer om {coach.fname}
                            </span>
                        </ButtonPrimary>
                    </Link>
                </div>
                <div className="flex flex-col gap-2">
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
        </div>
    );
}

export default function Team() {
    return (
        <>
            <main className=" my-16 md:my-20">
                <section className="inner relative  flex items-end py-8 ">
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
                        <Link
                            href="/tjenester"
                            className="underline text-clr_white"
                        >
                            tjeneste
                        </Link>{" "}
                        som er rett for deg før du går videre til betaling.
                    </p>
                    <p>
                        Noe du er usikker på?{" "}
                        <Link
                            href="/#PageFooter"
                            className="underline text-clr_white"
                        >
                            Kontakt oss
                        </Link>
                    </p>
                </span>
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-8 py-8 inner">
                    {coaches.map((coach) => (
                        <CoachCard key={coach.id} coach={coach} />
                    ))}
                </section>
            </main>
        </>
    );
}
