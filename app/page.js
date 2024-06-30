import TjenesterCta from "./components/TjenesterCta";
import Greetings from "./components/Greetings";
import Herobanner from "./components/Herobanner";

export const metadata = {
    title: "Maksimal Coaching | Sertifiserte personlige trenere online",
    description:
        "Maksimal Coaching, nå dine mål med sertifiserte personlige trenere online",
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
