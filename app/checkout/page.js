"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import SubscribeButton from "../components/SubscribeButton";
import ToS from "../components/ToS";
import { coaches } from "../data/coaches";

// --- Legg inn rabattkoder og hvilke bindinger de er gyldige for ---
const DISCOUNT_RULES = {
    // F.eks. "newyears25" er kun gyldig for 3 måneders binding
    newyears25: ["3mnd"],
};

const priceData = {
    kombinert: {
        name: "Kombinert oppfølging",
        description:
            "Få både trenings- og kostholdsoppfølging for maksimal effekt.",
        bindings: {
            uten: {
                name: "Uten binding",
                priceId: "price_1Pf0lORsF5Uw8Cju9kq3U905",
                price: 2500,
            },
            "3mnd": {
                name: "3 mnd binding",
                priceId: "price_1Pf0ijRsF5Uw8CjuVO4TesUi",
                price: 2300,
            },
            "6mnd": {
                name: "6 mnd binding",
                priceId: "price_1Pf0jMRsF5Uw8CjufgftVR0U",
                price: 2100,
            },
        },
    },
    trening: {
        name: "Treningsoppfølging",
        description: "Fokusert treningsopplegg tilpasset dine mål og behov.",
        bindings: {
            uten: {
                name: "Uten binding",
                priceId: "price_1Pf0k1RsF5Uw8CjuCURUajOz",
                price: 2000,
            },
            "3mnd": {
                name: "3 mnd binding",
                priceId: "price_1Pf0kWRsF5Uw8CjuxFhjwpE8",
                price: 1850,
            },
            "6mnd": {
                name: "6 mnd binding",
                priceId: "price_1Pf0krRsF5Uw8CjuTcwTsPge",
                price: 1700,
            },
        },
    },
    kosthold: {
        name: "Kostholdsoppfølging",
        description: "Skreddersydd kostholdsplan for å støtte dine mål.",
        bindings: {
            uten: {
                name: "Uten binding",
                priceId: "price_1Pf0lORsF5Uw8Cju9kq3U905",
                price: 2000,
            },
            "3mnd": {
                name: "3 mnd binding",
                priceId: "price_1Pf0llRsF5Uw8CjuWLfFtfQp",
                price: 1850,
            },
            "6mnd": {
                name: "6 mnd binding",
                priceId: "price_1Pf0mKRsF5Uw8CjuGyqi1f2B",
                price: 1700,
            },
        },
    },
};

function CheckoutContent() {
    const searchParams = useSearchParams();
    const preselectedCoach = searchParams.get("coach");

    const [selectedPackage, setSelectedPackage] = useState("");
    const [selectedBinding, setSelectedBinding] = useState("");
    const [selectedCoach, setSelectedCoach] = useState("");
    const [couponCode, setCouponCode] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // <-- Ny state for feil

    useEffect(() => {
        if (preselectedCoach) {
            setSelectedCoach(preselectedCoach);
        }
    }, [preselectedCoach]);

    // Henter ut korrekt Price ID basert på valgt pakke og binding
    const getPriceId = () => {
        if (selectedPackage && selectedBinding) {
            return priceData[selectedPackage].bindings[selectedBinding].priceId;
        }
        return null;
    };

    const selectedCoachData = coaches.find(
        (coach) => coach.id === selectedCoach
    );

    // Filtrerer pakkene basert på hvilke tjenester coachen tilbyr
    const getAvailablePackages = () => {
        if (!selectedCoach) return [];
        const coach = coaches.find((c) => c.id === selectedCoach);
        return Object.keys(priceData).filter(
            (packageName) =>
                coach[
                    `tjeneste${
                        packageName === "kombinert"
                            ? "1"
                            : packageName === "trening"
                            ? "2"
                            : "3"
                    }`
                ]
        );
    };

    const handleCoachChange = (e) => {
        setSelectedCoach(e.target.value);
        setSelectedPackage("");
        setSelectedBinding("");
        setErrorMessage("");
    };

    const handleCouponChange = (e) => {
        setCouponCode(e.target.value);
    };

    // Validerer kupongkode mot valgt binding
    useEffect(() => {
        if (!couponCode) {
            // Ingen kode => ingen feilmelding
            setErrorMessage("");
            return;
        }
        const code = couponCode.trim().toLowerCase();

        // Sjekk om koden finnes i DISCOUNT_RULES
        if (DISCOUNT_RULES[code]) {
            // Koden er gyldig, men er bindingen gyldig for koden?
            const validBindings = DISCOUNT_RULES[code];
            if (selectedBinding && !validBindings.includes(selectedBinding)) {
                // Bindingen er ikke blant de gyldige
                setErrorMessage(
                    `Rabattkoden "${code}" er kun gyldig for ${validBindings.join(
                        ", "
                    )} mnd binding.`
                );
            } else {
                setErrorMessage("");
            }
        } else {
            // Kode ikke gjenkjent => ingen spesifikk feilmelding,
            // men du kan eventuelt vise en melding her
            setErrorMessage("");
        }
    }, [couponCode, selectedBinding]);

    // Sjekker om alt er valgt OG ingen feil
    const isFormCompleteAndValid =
        selectedPackage && selectedBinding && selectedCoach && !errorMessage;

    return (
        <div className="flex flex-col gap-8 inner min-h-screen my-16 md:my-20">
            <h1 className="h1_text">Checkout</h1>

            {/* Coach-seksjon */}
            <div className="flex flex-col gap-2">
                {selectedCoachData && (
                    <div>
                        <Image
                            src={selectedCoachData.image}
                            alt={selectedCoachData.name}
                            width={1080}
                            height={1080}
                            className="aspect-square rounded-2xl ring-4 ring-clr_primary_dark max-w-64 object-cover"
                        />
                    </div>
                )}
                <h3 className="h3_text mb-1">Velg coach:</h3>

                <div className="relative w-fit">
                    <select
                        value={selectedCoach}
                        onChange={handleCoachChange}
                        className="appearance-none w-full bg-clr_black border-2 border-clr_primary_dark rounded-full py-2 px-4 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-clr_primary focus:border-clr_primary"
                    >
                        <option value="" disabled>
                            Velg en coach
                        </option>
                        {coaches.map((coach) => (
                            <option key={coach.id} value={coach.id}>
                                {coach.name}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center p-2 text-clr_primary_dark">
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Pakke-seksjon */}
            {selectedCoach && (
                <div className="flex flex-col gap-3">
                    <h3 className="h3_text mb-1">Velg pakke:</h3>
                    {getAvailablePackages().map((id) => (
                        <label
                            key={id}
                            className="flex gap-2 items-center cursor-pointer ml-4"
                        >
                            <input
                                type="radio"
                                name="package"
                                value={id}
                                checked={selectedPackage === id}
                                onChange={(e) =>
                                    setSelectedPackage(e.target.value)
                                }
                                className={`peer
                  col-start-1 row-start-1
                  appearance-none shrink-0
                  w-4 h-4 border-2 border-clr_primary_dark rounded-full
                  focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-clr_primary
                  disabled:border-gray-400
                  relative
                  ${selectedPackage === id ? "radio-checked" : ""}`}
                            />
                            <div>
                                <span className="font-bold">
                                    {priceData[id].name}
                                </span>
                                <p className="text-sm text-clr_gray">
                                    {priceData[id].description}
                                </p>
                            </div>
                        </label>
                    ))}
                </div>
            )}

            {/* Binding-seksjon */}
            {selectedPackage && (
                <div className="flex flex-col gap-2">
                    <h3 className="h3_text mb-1">Velg bindingstid:</h3>
                    {Object.entries(priceData[selectedPackage].bindings).map(
                        ([id, data]) => (
                            <label
                                key={id}
                                className="flex gap-2 items-center cursor-pointer ml-4"
                            >
                                <input
                                    type="radio"
                                    name="binding"
                                    value={id}
                                    checked={selectedBinding === id}
                                    onChange={(e) =>
                                        setSelectedBinding(e.target.value)
                                    }
                                    className={`peer
                    col-start-1 row-start-1
                    appearance-none shrink-0
                    w-4 h-4 border-2 border-clr_primary_dark rounded-full
                    focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-clr_primary
                    disabled:border-gray-400
                    relative
                    ${selectedBinding === id ? "radio-checked" : ""}`}
                                />
                                <span className="flex items-center gap-1">
                                    <span>{data.name}</span>
                                    <span className="text-clr_gray text-sm">
                                        -
                                    </span>
                                    <span className="text-clr_primary_dark text-sm">
                                        {data.price},- kr/mnd
                                    </span>
                                </span>
                            </label>
                        )
                    )}
                </div>
            )}

            {/* Hvis alt er valgt og ingen feilmelding -> Vis SubscribeButton */}
            {isFormCompleteAndValid ? (
                <SubscribeButton
                    priceId={getPriceId()}
                    coachId={selectedCoach}
                    couponCode={couponCode} // Pass the coupon code
                />
            ) : (
                <button className="button cursor-not-allowed h-fit bg-transparent border-4 border-clr_white">
                    {errorMessage
                        ? "Korriger rabattkoden for å fortsette"
                        : "Velg en coach og pakke for å fortsette"}
                </button>
            )}

            {/* Kampanjekode og feilmelding */}
            <div className="flex flex-col w-fit">
                <label className="flex flex-col gap-1">
                    <span className="font-bold italic opacity-50 pl-4">
                        Kampanjekode
                    </span>
                    <input
                        type="text"
                        value={couponCode}
                        onChange={handleCouponChange}
                        placeholder="Skriv inn din kode"
                        className="w-56 bg-clr_black border-2 border-clr_primary_dark rounded-full py-2 px-4 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-clr_primary focus:border-clr_primary opacity-50 hover:opacity-100 focus:opacity-100"
                    />
                </label>
                {errorMessage && (
                    <p className="text-red-500 text-sm mt-1 ml-4">
                        {errorMessage}
                    </p>
                )}
            </div>

            <ToS />
        </div>
    );
}

export default function Checkout() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CheckoutContent />
        </Suspense>
    );
}
