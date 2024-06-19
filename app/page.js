import Header from "./components/Header";
import TjenesterCta from "./components/TjenesterCta";
import Greetings from "./components/greetings";
import Herobanner from "./components/herobanner";

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
