import Link from "next/link";
import { ButtonPrimary } from "./utilities/Buttons";

export default function NotFound() {
    return (
        <main className=" py-32 inner w-full flex flex-col  justify-center bg-clr_black text-white">
            <div className=" w-full">
                <h1 className="text-4xl font-bold italic mb-8">
                    <span className="font-bold text-clr_primary">404</span> Side
                    ikke funnet
                </h1>
                <p className="text-lg lg:text-xl mb-8 max-w-xl">
                    Beklager, men siden du leter etter eksisterer ikke. Dette
                    kan skyldes en skrivefeil i adressen, eller at siden har
                    blitt flyttet. Hvis du mener dette er en feil, ta kontakt
                    med oss.
                </p>
                <Link href="/">
                    <ButtonPrimary>Gå til forsiden</ButtonPrimary>
                </Link>
            </div>
            <div className="mt-16 text-clr_primary_dark italic font-bold">
                <p>Ikke la dette hindre deg i å nå dine treningsmål!</p>
            </div>
        </main>
    );
}
