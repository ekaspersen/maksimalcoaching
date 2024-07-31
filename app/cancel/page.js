import React from "react";
import { ButtonGhost, ButtonPrimary } from "../utilities/Buttons";
import Link from "next/link";
export const metadata = {
    title: "Maksimal Coaching | Kansellert",
    description:
        "Maksimal Coaching, nå dine mål med sertifiserte personlige trenere online",
};
export default function Cancel() {
    return (
        <div className="inner min-h-[80vh] flex flex-col justify-center gap-16">
            <div className="flex flex-col gap-4">
                <h1 className="h1_text">Kansellert</h1>
                <p className="p_text">
                    Du har kansellert betalingen. Ta kontakt med oss om du har
                    noen spørsmål.
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="h2_text ">Hva gjør vi nå?</h2>
                <Link className="w-fit" href="/checkout">
                    <ButtonPrimary>Tilbake til bestillingside</ButtonPrimary>
                </Link>
                <Link className="w-fit" href="/">
                    <ButtonGhost>Se gjennom tjenester</ButtonGhost>
                </Link>
            </div>
        </div>
    );
}
