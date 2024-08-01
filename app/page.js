import TjenesterCta from "./components/TjenesterCta";
import Greetings from "./components/Greetings";
import Herobanner from "./components/Herobanner";

export const metadata = {
    title: "Maksimal Coaching | Personlig Trening Online med Sertifiserte Trenere",
    description:
        "Oppnå dine treningsmål med Maksimal Coaching. Skreddersydde trenings- og kostholdsplaner fra sertifiserte personlige trenere. Få online coaching og støtte for optimal fremgang.",
    keywords:
        "personlig trening online, online coaching, sertifiserte trenere, treningsplan, kostholdsplan, vektnedgang, muskelvekst, styrketrening",
    openGraph: {
        title: "Maksimal Coaching | Personlig Trening Online",
        description:
            "Skreddersydde trenings- og kostholdsplaner fra sertifiserte personlige trenere. Oppnå dine mål med online coaching.",
        images: [{ url: "https://www.maksimalcoaching.no/M-logo.png" }],
    },
};

export default function Home() {
    return (
        <>
            <main>
                <Herobanner />
                <Greetings />
                <TjenesterCta />
            </main>
        </>
    );
}
