"use client";
import { ButtonPrimary } from "@/app/utilities/Buttons";
import Link from "next/link";
import React from "react";

export default function ThankYou() {
    return (
        <div className="flex mx-2 flex-col items-center justify-center min-h-screen bg-clr_black text-clr_white">
            <div className="w-full max-w-2xl shadow-md rounded-lg overflow-hidden">
                <div className="flex flex-col gap-6 text-clr_white py-8 px-4 text-center">
                    <h1 className="text-3xl font-bold">Tusen takk!</h1>
                    <p className="text-lg">
                        Vi har mottatt ditt skjema og vil kontakte deg snart.
                    </p>
                    <Link href="/">
                        <ButtonPrimary>Tilbake til hjem</ButtonPrimary>
                    </Link>
                </div>
            </div>
        </div>
    );
}
