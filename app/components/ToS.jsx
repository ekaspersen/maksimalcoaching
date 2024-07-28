import { useState } from "react";

function ToS() {
    let [ToService, setToService] = useState(false);
    const handleButtonClick = () => {
        setToService(true);
    };
    const handleButtonClickFalse = () => {
        setToService(false);
    };
    if (ToService) {
        return (
            <div className="flex flex-col gap-4">
                <button
                    className="flex items-center gap-1"
                    onClick={handleButtonClickFalse}
                >
                    <span className="text-5xl rotate-45">+</span>Lukk
                    kjøpsbetingelser & Vilkår
                </button>
                <h1 className="text-3xl font-bold mb-6 ">
                    Kjøpsbetingelser for Maksimal Coaching AS
                </h1>
                <p className="mt-8 text-lg lg:text-xl font-bold">
                    Ved å bli kunde hos Maksimal Coaching har jeg lest gjennom
                    og godtatt alle punktene.
                </p>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 ">
                        Informasjonslagring
                    </h2>
                    <p className="mb-4 ">
                        All informasjon som samles fra deg som klient oppbevares
                        i vår database og vår gjeldende plattform for produktet
                        så lenge vi har deg som klient. Informasjonen vil ikke
                        bli delt med noen tredjepart under noen omstendigheter
                        utover den valgte plattformen vi bruker for produktet.
                        Informasjonen vil bli brukt til å skreddersy og lage
                        opplegg innenfor trening og kosthold til deg som kunde.
                    </p>
                    <p className="mb-4 ">
                        Maksimal Coaching behandler personopplysninger i tråd
                        med gjeldende lov- og forskriftsregulering fattet av
                        offentlige myndigheter.
                    </p>
                    <p className="mb-4 ">
                        Maksimal Coaching kan utlevere personopplysninger ved
                        betalingsadministrasjon, innkreving og
                        regnskapsbehandling.
                    </p>
                    <p className="mb-4 ">
                        Etter endt samarbeid beholder vi informasjonen om deg
                        som kunde i en stund vi ser det hensiktsmessig, hvis du
                        skulle ønske å returnere som kunde en dag.
                    </p>
                    <p className="mb-4 ">
                        Du har rett til å få innsyn i informasjon lagret om deg,
                        endre eller be om å få det slettet.
                    </p>
                    <p className="mb-4 ">
                        Du som klient forplikter deg til at all informasjon du
                        har oppgitt er korrekt og tillater Maksimal Coaching å
                        bruke informasjonen til å skreddersy ditt opplegg basert
                        på de opplysningene du har oppgitt. Hvis noen av
                        opplysningene skulle endre seg er det du som klient som
                        må gi beskjed ved første mulighet til Maksimal Coaching.
                    </p>
                    <p className="mb-4 ">
                        All informasjon blir oppbevart i henhold til norsk lov.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 ">Ansvar</h2>
                    <p className="mb-4 ">
                        Maksimal Coaching er på ingen måte noen lege, og
                        forslagene fra Maksimal Coaching skal ikke tas som
                        medisinsk råd på noen måte. Oppsøk alltid din lege for
                        spørsmål og diagnostisering om din helsetilstand.
                    </p>
                    <p className="mb-4 ">
                        Alle våre tjenester er gjort på klientens egen risiko,
                        og Maksimal Coaching og deres ansatte kan ikke holdes
                        ansvarlig.
                    </p>
                    <p className="mb-4 ">
                        Alle dokumenter og opplegg fra Maksimal Coaching og
                        mellom klienten eies av Maksimal Coaching og er ikke lov
                        under noen omstendigheter å kopiere, selge videre, eller
                        deles videre uten skriftlig samtykke fra Maksimal
                        Coaching. Dette gjelder også innhold som blir delt på
                        medlemssider/medlemsgrupper. Du har heller ikke lov til
                        å overdra abonnementet ditt til andre.
                    </p>
                    <p className="mb-4 ">
                        Du sier fra deg alle rettigheter til å holde Maksimal
                        Coaching AS og deres ansatte ansvarlig for enhver skade
                        som skjer i henhold til å følge rådene fra din coach.
                        Hvis du ikke godtar dette punktet kan vi ikke ha deg som
                        kunde.
                    </p>
                    <p className="mb-4 ">
                        Du godtar også at all bruk av preparater utenfor loven
                        ikke er tillatt så lenge man er kunde hos Maksimal
                        Coaching.
                    </p>
                    <p className="mb-4 ">
                        Kunden er ansvarlig for å holde koder og passord på en
                        forsvarlig måte. Hvis det skulle skje at uvedkommende
                        får tilgang til systemer eller betalingskonto skal dette
                        gis beskjed til Maksimal Coaching snarest slik at all
                        tilgang blir sperret. Betaling på abonnement vil likevel
                        løpe helt til avtalen er sagt opp.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 ">Betaling</h2>
                    <p className="mb-4 ">
                        Betaling skjer på faste og løpende priser som betales på
                        forskudd. Dersom kunde mener at faktura er feil, må
                        dette klages inn til Maksimal Coaching innen
                        betalingsfristen utløp. Mens klagen er til behandling
                        skal påfølgende fakturaer betales som vanlig. Ved
                        manglende betaling vil purring og inkasso påløpe.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 ">
                        Endring i priser og avtalevilkår
                    </h2>
                    <p className="mb-4 ">
                        Maksimal Coaching har rett til å foreta endringer eller
                        opphør i priser og vilkår i henhold til tjenester
                        levert. Maksimal Coaching skal varsle kunden skriftlig
                        senest en måned før endringen trer i kraft. Hvis dette
                        ikke faller i kundens interesse kan kunde si opp avtalen
                        med vanlig oppsigelsestid, så lenge det er utenfor
                        bindingstiden.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 ">
                        Aldersgrense
                    </h2>
                    <p className="mb-4 ">
                        Vi har 18 års aldersgrense på våre tjenester. Er du
                        under dette trenger vi samtykke fra foresatte.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 ">
                        Tjenester og abonnement
                    </h2>
                    <p className="mb-4 ">
                        En del av våre tjenester er abonnementsløsninger som vil
                        løpe til de sies opp med avtalt oppsigelsestid, det
                        gjelder også online coaching med binding. Du betaler en
                        sum ved kjøp av tjenesten, og deretter vil en avklart
                        sum som kommer tydelig fram på våre nettsider løpe
                        månedlig, fra samme dag som den dagen du meldte deg inn.
                    </p>
                    <p className="mb-4 ">
                        Du er selv ansvarlig med å følge med på trekket ditt og
                        at dette går, så det ikke beløper purring og inkasso. Vi
                        refunderer ikke beløp som allerede er trukket.
                    </p>
                    <p className="mb-4 ">
                        Er det ikke dekning på betalingen vil vi forsøke å
                        trekke deg totalt 4 ganger før betalingen går til
                        purring og inkasso via faktura.
                    </p>
                    <p className="mb-4 ">
                        Eventuelle kredittkortopplysninger vil fylles inn i en
                        sikker nettportal som leveres av en godkjent tredjepart
                        og informasjonen vil være helkryptert.
                    </p>
                    <p className="mb-4 ">
                        Ved kjøp av Online PT: Etter første betaling er
                        gjennomført, avtaler du oppstartsdato med din Online PT.
                    </p>
                    <p className="mb-4 ">
                        Ved sykdom, avsluttet arbeidsforhold eller lignende hos
                        din Online PT vil du bli flyttet over til en annen
                        Online PT, fortrinnsvis en du selv velger.
                    </p>
                    <p className="mb-4 ">
                        Vi fryser kun abonnement ved dokumentert langvarig
                        sykdom eller skade utover 1 mnd. Vi kan ikke fryse
                        tilbake i tid, og frysen vil gjelde fra neste trekk. Du
                        er selv ansvarlig til å gi beskjed om å forlenge frysen
                        ved dokumentert behov eller kansellere medlemskapet ditt
                        før trekket går. Frys i bindingstid vil forflytte
                        bindingstiden.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 ">
                        Retningslinjer for angrerett
                    </h2>
                    <p className="mb-4 ">
                        Kunde kan benytte angreretten innen 14 dager ved
                        netthandel. Hvis kunden tar tjenesten i bruk før
                        angrefristens utløp, altså benytter innlogging på
                        nettside, app eller din Online PT har begynt på
                        utarbeiding av din plan, så bortfaller angreretten i
                        henhold til angrerettloven paragraf §22, artikkel 16,4.
                        Ved kjøp godtar kunden dette.
                    </p>
                    <p className="mb-4 ">
                        Ønsker du å angre på det gjøres skriftlig på mail til
                        post@maksimalcoaching.no og punktene ovenfor må være
                        fulgt for at det skal gjelde.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 ">
                        Personvernerklæring
                    </h2>
                    <p className="mb-4 ">
                        Maksimal Coaching samler inn og behandler
                        personopplysninger med respekt og forsiktighet.
                        Informasjonen vi samler inn er for å optimalisere
                        funksjon, brukeropplevelse og innhold.
                    </p>
                    <p className="mb-4 ">
                        Vi samler inn informasjon via nettsider og andre
                        brukersystemer som vi benytter oss av.
                    </p>
                    <p className="mb-4 ">
                        Ved bruk av nettsiden til Maksimal Coaching godtar du
                        bruk av Cookies som vi bruker for å lagre informasjon
                        til statistikk, bruker adferd, målrettet annonser og for
                        å forbedre våre nettsider.
                    </p>
                    <p className="mb-4 ">
                        Vi bruker analyseverktøy fra tredjeparter som
                        Squarespace, Google analytics, Shopify, nyhetsbrev,
                        kontaktskjema og Facebook pixel til å samle inn
                        statistikk om antall besøkende, hvilke sider som blir
                        besøkt, hvilke geografiske områder besøkende kommer fra,
                        markedsføring, hvor lang tid du bruker på siden og andre
                        preferanser som er behjelpelig. Selv om tredjeparter
                        blir brukt for innsamling, er det kun Maksimal Coaching
                        som tar i bruk informasjonen vi samler inn.
                    </p>
                    <p className="mb-4 ">
                        Maksimal Coaching har rett til å endre retningslinjene
                        for personvern. Hvis endringer tilkommer vil du få mail
                        om dette. Godtar du ikke de nye retningslinjene vil du
                        ha mulighet til å avslutte tjenesten med avtalt
                        oppsigelsestid som normalt. Fortsetter du å bruke våre
                        tjenester betyr dette at du har godtatt de nye
                        retningslinjene.
                    </p>
                    <p className="mb-4 ">
                        All informasjon som samles fra deg som klient oppbevares
                        i vår database og våre gjeldende plattformer for
                        produktet så lenge vi har deg som klient. Noe av
                        informasjonen beholder vi så lenge vi ser det
                        hensiktsmessig også etter endt samarbeid, i tilfelle du
                        skulle ønske å bli kunde hos oss igjen ved en senere
                        anledning.
                    </p>
                    <p className="mb-4 ">
                        Informasjonen vil ikke bli delt med noen tredjepart
                        utover dette under noen omstendigheter utover den valgte
                        plattformen vi bruker for produktet. Informasjonen vil
                        bli brukt til å skreddersy og lage opplegg innenfor
                        trening og kosthold til deg som kunde.
                    </p>
                    <p className="mb-4 ">
                        Om du skulle ha noen spørsmål send mail til
                        post@maksimalcoaching.no
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 ">
                        Taushetsplikt
                    </h2>
                    <p className="mb-4 ">
                        Maksimal Coaching har i henhold til lov om elektronisk
                        kommunikasjon §2-9 taushetsplikt om opplysninger
                        vedrørende bruk av tjenestene og innholdet i
                        kommunikasjonen, så fremt ingenting kriminelt
                        fremkommer.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 ">
                        Vilkår for bruk
                    </h2>
                    <h3 className="text-xl font-semibold mb-2 ">
                        Oppsigelse og heving:
                    </h3>
                    <p className="mb-4 ">
                        For å si opp din avtale må du sende en skriftlig melding
                        til din Online PT for å gi beskjed at vedkommende ikke
                        setter opp arbeid unødvendig og til
                        post@maksimalcoaching.no for å registrere oppsigelsen.
                        Det er 1 mnd oppsigelse regnet fra neste betalingstrekk.
                        Du vil ikke kunne få noe tilbakebetalt. Ved kjøp av våre
                        tjenester godtar du dette punktet. Oppsigelse i
                        bindingstid vil ikke gjelde før du er ute av
                        bindingstiden, uansett årsak.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 ">
                        Kontaktinformasjon
                    </h2>
                    <p className="mb-4 ">
                        Maksimal Coaching AS
                        <br />
                        Org nr: 933127222
                        <br />
                        E-post: post@maksimalcoaching.no
                        <br />
                        Tlf: +47 919 99 449
                    </p>
                </section>

                <p className="mt-8 text-lg lg:text-xl font-bold">
                    Ved å bli kunde hos Maksimal Coaching har jeg lest gjennom
                    og godtatt alle punktene.
                </p>
                <button
                    className="flex items-center gap-1"
                    onClick={handleButtonClickFalse}
                >
                    <span className="text-5xl rotate-45">+</span>Lukk
                    kjøpsbetingelser & Vilkår
                </button>
            </div>
        );
    } else {
        return (
            <button
                className="underline w-fit underline-offset-2 font-bold"
                onClick={handleButtonClick}
            >
                Kjøpsbetingelser & Vilkår
            </button>
        );
    }
}

export default ToS;
