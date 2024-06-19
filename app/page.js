import Header from "./components/Header";
import TjenesterCta from "./components/TjenesterCta";
import Greetings from "./components/Greetings";
import Herobanner from "./components/Herobanner";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Herobanner />
                <Greetings />
                <TjenesterCta />
            </main>
        </>
    );
}
