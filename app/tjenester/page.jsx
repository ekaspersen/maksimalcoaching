import { ButtonPrimary } from "../utilities/Buttons";
import ServicesIcons from "../utilities/ServicesIcons";
import Link from "next/link";

export const metadata = {
    title: "Maksimal Coaching | Våre tjenester",
    description:
        "Maksimal Coaching, nå dine mål med sertifiserte personlige trenere online",
};

export function ServiceInfo({
    id,
    title,
    description,
    children,
    utenBinding,
    treMndBinding,
    seksMndBinding,
}) {
    return (
        <div
            id={id}
            className="flex flex-col lg:flex-row py-16 my-16 gap-8 inner bg-clr_primary_dark bg-opacity-5 lg:items-center"
        >
            <div className="flex flex-col gap-8 md:flex-1">
                <div className="flex flex-col gap-4">
                    <h2 className="font-black italic text-3xl">{title}</h2>
                    <p className="max-w-xl font-bold text-clr_gray">
                        {description}
                    </p>
                </div>
                <div className="flex flex-col gap-2 text-left max-w-xs">
                    <span className="font-black text-lg">
                        Denne pakken inkluderer
                    </span>
                    <ul className="flex flex-col gap-2 pl-5 text-sm sm:text-base font-semibold">
                        {children}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col w-full flex-1 gap-8 max-w-2xl">
                <div className="flex flex-col bg-clr_primary_dark px-4 py-8 bg-opacity-50 h-fit">
                    <span className="font-black italic text-3xl pb-4 ">
                        Priser
                    </span>

                    <div className="flex bg-clr_black bg-opacity-20">
                        <span className="flex-1 p-4 font-bold">
                            Uten binding:
                        </span>
                        <span className="flex-1 p-4">{utenBinding} kr/mnd</span>
                    </div>
                    <div className="flex bg-clr_black bg-opacity-40">
                        <span className="flex-1 p-4 font-bold">
                            3mnd binding:
                        </span>
                        <span className="flex-1 p-4">
                            {treMndBinding} kr/mnd
                        </span>
                    </div>
                    <div className="flex bg-clr_black bg-opacity-20">
                        <span className="flex-1 p-4 font-bold">
                            6mnd binding:
                        </span>
                        <span className="flex-1 p-4">
                            {seksMndBinding} kr/mnd
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-4 flex-1">
                    <p className="max-w-sm font-bold text-clr_gray mb-[-16px]">
                        Usikker hvem du vil ha som coach?
                    </p>
                    <Link
                        className="border-b-2 italic font-bold border-white w-fit"
                        href="/team"
                    >
                        Se teamet vårt
                    </Link>
                    <p className=" max-w-md font-bold text-clr_gray">
                        Du velger coach og pakke i påmeldingsskjema før du går
                        videre til betaling.
                    </p>
                    <ButtonPrimary>Bestill Coaching nå</ButtonPrimary>
                </div>
            </div>
        </div>
    );
}

export default function page() {
    return (
        <main>
            <section className="inner relative min-h-[480px] flex items-end py-8 ">
                <div className="absolute right-0 w-full max-w-[900px] top-0 bottom-0 bg-[url('/ina-spottes.PNG')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-clr_black"></div>
                <h1 className="font-bold italic text-4xl flex flex-col z-10">
                    <span className="lg:text-5xl">Våre tjenester</span>
                    <span className="text-base lg:text-2xl">
                        Se hvilken pakke som passer dine behov best
                    </span>
                </h1>
            </section>

            <ServiceInfo
                id="kombinert"
                utenBinding="2500"
                treMndBinding="2300"
                seksMndBinding="2100"
                title="Kombinert oppfølging"
                description="Skreddersydde kostholds- og treningsplaner, med ukentlige justeringer og personlig støtte fra din coach. Oppnå dine mål med en personlig tilnærming og oppfølging."
            >
                <li>Alt som inkluderes i kostholds- og treningsoppfølging</li>
                <li>Ukentlig check-in med tilpassinger</li>
                <li>Skreddersydd opplegg akkurat for deg</li>
                <li>Helhetlig tilnærming til dine mål og bedre helse</li>
            </ServiceInfo>
            <div className="inner">
                <ServicesIcons />
            </div>
            <ServiceInfo
                id="trening"
                utenBinding="2000"
                treMndBinding="1850"
                seksMndBinding="1700"
                title="Trenings oppfølging"
                description="Treningsopplegg som passer perfekt til dine
                            mål, med ukentlige check-ins og tilpassninger for å
                            sikre din fremgang."
            >
                <li>Skreddersydd treningsopplegg for deg!</li>
                <li>Alt i en app med teknikkvideoer og mer</li>
                <li>Ukentlig check-in med ukesrapport</li>
                <li>Tracking av fremgang</li>
                <li>Chat med din coach daglig</li>
                <li>Justering av treningsprogram underveis</li>
                <li>Hjelp med teknikk</li>
            </ServiceInfo>
            <div className="inner">
                <ServicesIcons />
            </div>
            <ServiceInfo
                id="kosthold"
                utenBinding="2000"
                treMndBinding="1850"
                seksMndBinding="1700"
                title="Kostholds oppfølging"
                description="Skreddersydde kostholdsplaner og sunne
                            oppskrifter som passer dine mål, med ukentlige
                            justeringer og grundig oppfølging."
            >
                <li>Skreddersydd kostholdsplan for dine mål</li>
                <li>Ukentlige justeringer</li>
                <li>Sunne og næringsrike oppskrifter</li>
            </ServiceInfo>
        </main>
    );
}
