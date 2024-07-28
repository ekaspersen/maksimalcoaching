import Link from "next/link";
import { ButtonPrimaryDark, ButtonSecondary } from "../utilities/Buttons";

function Greetings() {
    return (
        <div className="flex relative max-lg:top-[-120px] max-lg:mb-[-96px] mx-auto max-w-[1440px] pl-4 lg:pl-8 flex-col justify-between lg:flex-row-reverse">
            <div className="h-max lg:py-16 max-w-xl ml-auto lg:ml-[0px] relative lg:top-[-128px] px-4 lg:px-8 gap-4 flex flex-col bg-clr_primary_dark py-8 rounded-tl-3xl lg:flex-1">
                <h2 className="h2_text">
                    Er du klar til å forbedre dine trening og kostholdsrutiner?
                </h2>
                <p>
                    Vi er et team av forskjellige dedikerte trenere som tilbyr
                    varierte treningspakker designet for alle nivåer. Våre
                    programmer er skreddersydd for å møte dine behov, enten du
                    ønsker å ta treningen opp et nivå eller du starter helt fra
                    begynnelsen.
                </p>
                <Link href="/team">
                    <ButtonSecondary>Finn din coach</ButtonSecondary>
                </Link>
            </div>
            <div className="py-8 max-w-xl lg:py-16 px-4 lg:pr-8 lg:pl-0 flex flex-col  gap-4 lg:gap-6 lg:flex-1">
                <h2 className="h2_text">Litt om oss...</h2>
                <p className="font-normal text-clr_gray">
                    Hos Maksimal Coaching er vår visjon enkel: Vi ønsker å
                    hjelpe deg med å oppnå dine mål, tilpasset det livet du
                    lever. Vårt team av erfarne og sertifiserte coacher er
                    dedikerte og støtter deg på din treningsreise, uansett hvor
                    du befinner deg i livet.
                </p>
                <p className="font-normal text-clr_gray">
                    Maksimal Coaching ble grunnlagt med en lidenskap for å
                    hjelpe mennesker med trening, kosthold og bedre helse. Vi
                    tilbyr forskjellige typer tjenester innenfor 1-1 online
                    coaching, hvor du får hjelp med både trening og kosthold.
                </p>
                <Link href="/omoss">
                    <ButtonPrimaryDark>Les mer om oss</ButtonPrimaryDark>
                </Link>
            </div>
        </div>
    );
}

export default Greetings;
