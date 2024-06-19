import { ButtonPrimaryDark, ButtonSecondary } from "../utilities/Buttons";

function Greetings() {
    return (
        <div className="flex mx-auto max-w-[1440px] pl-4 lg:pl-8 flex-col justify-between lg:flex-row-reverse">
            <div className="h-max lg:py-16 max-w-xl ml-auto lg:ml-[0px] px-4 lg:px-8 gap-4 flex flex-col bg-clr_primary_dark py-8 rounded-tl-3xl lg:flex-1">
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
                <ButtonSecondary>Finn din coach</ButtonSecondary>
            </div>
            <div className="py-8 max-w-xl lg:py-16 px-4 lg:pr-8 lg:pl-0 flex flex-col  gap-4 lg:gap-6 lg:flex-1">
                <h2 className="h2_text">Litt om oss...</h2>
                <p className="font-normal text-clr_gray">
                    Vårt oppdrag er å tilby mer enn bare treningsøkter; vi
                    tilbyr en helhetlig tilnærming til velvære som omfatter
                    fysisk trening, ernæringsrådgivning, og mental styrke.
                    Teamet vårt er ikke bare sertifiserte eksperter i sine felt,
                    de er lidenskapelig opptatt av å inspirere, motivere, og
                    støtte deg på hvert trinn av din reise.
                </p>
                <p className="font-normal text-clr_gray">
                    Maksimal Coaching ble etablert av en gruppe trenere og
                    helseentusiaster som ønsket å gjøre en forskjell. Etter å ha
                    arbeidet i helse- og fitnessbransjen i flere år, så vi et
                    gap i markedet for en mer personlig og helhetlig tilnærming
                    til trening. Vårt team er sammensatt av individer med
                    forskjellige bakgrunner, men med en felles lidenskap: Å
                    hjelpe andre å oppnå sitt maksimale potensial.
                </p>
                <ButtonPrimaryDark>Les mer om oss</ButtonPrimaryDark>
            </div>
        </div>
    );
}

export default Greetings;
