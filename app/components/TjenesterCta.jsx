import ServicesIcons from "../utilities/ServicesIcons";
import Image from "next/image";
import { ButtonPrimary } from "../utilities/Buttons";
import Link from "next/link";

export default function TjenesterCta() {
    return (
        <div className="inner flex flex-col py-16 gap-8 xl:gap-16 bg-clr_primary_dark text-center rounded-t-3xl">
            <div className="flex flex-col">
                <h1 className="h1_text">Våre Tjenester</h1>
                <span className="h1_subtext text-clr_primary">
                    Oppnå ditt potensiale
                </span>
            </div>
            <ServicesIcons />
            <div className="flex flex-col flex-wrap xl:flex-row gap-8">
                <div className="flex flex-col items-center px-4 py-16 gap-16 bg-clr_black xl:flex-1">
                    <div className="flex flex-col gap-4 items-center">
                        <Image
                            src="/M-logo.png"
                            width={64}
                            height={64}
                            alt="Tjenester"
                            className="w-12 h-12 xl:w-16 xl:h-16"
                        />
                        <h3 className="h3_text xl:text-2xl">
                            Kombinert oppfølging
                        </h3>
                        <p className="text-xs xl:text-sm max-w-md text-center">
                            Få skreddersydde kostholds- og treningsplaner, med
                            ukentlige justeringer og personlig støtte fra din
                            coach. Oppnå dine mål med en personlig tilnærming og
                            oppfølging.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 text-left max-w-xs">
                        <span className="font-black text-sm">
                            Denne pakken inkluderer
                        </span>
                        <ul className="flex flex-col gap-2 pl-5 text-xs xl:text-sm font-semibold">
                            <li>
                                Alt som inkluderes i kostholds- og
                                treningsoppfølging
                            </li>
                            <li>Ukentlig check-in med tilpassinger</li>
                            <li>Skreddersydd opplegg akkurat for deg</li>
                            <li>
                                Helhetlig tilnærming til dine mål og bedre helse
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto flex flex-col items-center gap-2">
                        <ButtonPrimary>Velg pakke</ButtonPrimary>
                        <span className="text-sm font-light italic text-clr_gray">
                            Fra 2100kr
                        </span>
                    </div>
                </div>
                <div className="flex flex-col items-center px-4 py-16 gap-16 bg-clr_black xl:flex-1">
                    <div className="flex flex-col gap-4 items-center">
                        <Image
                            src="/M-logo.png"
                            width={64}
                            height={64}
                            alt="Tjenester"
                            className="w-12 h-12 xl:w-16 xl:h-16"
                        />
                        <h3 className="h3_text xl:text-2xl">
                            Treningsoppfølging
                        </h3>
                        <p className="text-xs xl:text-sm max-w-md text-center">
                            Få et treningsopplegg som passer perfekt til dine
                            mål, med ukentlige check-ins og tilpassninger for å
                            sikre din fremgang.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 text-left max-w-xs">
                        <span className="font-black text-sm">
                            Denne pakken inkluderer
                        </span>
                        <ul className="flex flex-col gap-2 pl-5 text-xs xl:text-sm font-semibold">
                            <li>Skreddersydd treningsopplegg for deg!</li>
                            <li>Alt i en app med teknikkvideoer og mer</li>
                            <li>Ukentlig check-in med ukesrapport</li>
                            <li>Tracking av fremgang</li>
                            <li>Chat med din coach daglig</li>
                            <li>
                                Dokumenter og videoer hvor du kan lære mer om
                                trening
                            </li>
                            <li>Justering av treningsprogram underveis</li>
                            <li>Hjelp med teknikk</li>
                        </ul>
                    </div>
                    <div className="mt-auto flex flex-col items-center gap-2">
                        <ButtonPrimary>Velg pakke</ButtonPrimary>
                        <span className="text-sm font-light italic text-clr_gray">
                            Fra 1700kr
                        </span>
                    </div>
                </div>
                <div className="flex flex-col items-center px-4 py-16 gap-16 bg-clr_black xl:flex-1">
                    <div className="flex flex-col gap-4 items-center">
                        <Image
                            src="/M-logo.png"
                            width={64}
                            height={64}
                            alt="Tjenester"
                            className="w-12 h-12 xl:w-16 xl:h-16"
                        />
                        <h3 className="h3_text xl:text-2xl">
                            Kostholdsoppfølging
                        </h3>
                        <p className="text-xs xl:text-sm max-w-md text-center">
                            Få skreddersydde kostholdsplaner og sunne
                            oppskrifter som passer dine mål, med ukentlige
                            justeringer og grundig oppfølging.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 text-left max-w-xs">
                        <span className="font-black text-sm">
                            Denne pakken inkluderer
                        </span>
                        <ul className="flex flex-col gap-2 pl-5 text-xs xl:text-sm font-semibold">
                            <li>Skreddersydd kostholdsplan for dine mål</li>
                            <li>Ukentlige justeringer</li>
                            <li>Sunne og næringsrike oppskrifter</li>
                            <li>
                                Tilgang til lærerike kilder om kosthold så du
                                kan lære mer selv
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto flex flex-col items-center gap-2">
                        <ButtonPrimary>Velg pakke</ButtonPrimary>
                        <span className="text-sm font-light italic text-clr_gray">
                            Fra 1700kr
                        </span>
                    </div>
                </div>
            </div>
            <ServicesIcons />
        </div>
    );
}
