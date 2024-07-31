"use client";

import { useState } from "react";
import SubscribeButton from "../components/SubscribeButton";
import Image from "next/image";
import ToS from "../components/ToS";

const priceData = {
    kombinert: {
        name: "Kombinert oppfølging",
        bindings: {
            uten: {
                name: "Uten binding",
                priceId: "price_1PieMdRsF5Uw8CjuwgnDdh4D",
            },
            "3mnd": {
                name: "3 mnd binding",
                priceId: "price_1Pf0ijRsF5Uw8CjuVO4TesUi",
            },
            "6mnd": {
                name: "6 mnd binding",
                priceId: "price_1Pf0jMRsF5Uw8CjufgftVR0U",
            },
        },
    },
    trening: {
        name: "Treningsoppfølging",
        bindings: {
            uten: {
                name: "Uten binding",
                priceId: "price_1Pf0k1RsF5Uw8CjuCURUajOz",
            },
            "3mnd": {
                name: "3 mnd binding",
                priceId: "price_1Pf0kWRsF5Uw8CjuxFhjwpE8",
            },
            "6mnd": {
                name: "6 mnd binding",
                priceId: "price_1Pf0krRsF5Uw8CjuTcwTsPge",
            },
        },
    },
    kosthold: {
        name: "Kostholdsoppfølging",
        bindings: {
            uten: {
                name: "Uten binding",
                priceId: "price_1Pf0lORsF5Uw8Cju9kq3U905",
            },
            "3mnd": {
                name: "3 mnd binding",
                priceId: "price_1Pf0llRsF5Uw8CjuWLfFtfQp",
            },
            "6mnd": {
                name: "6 mnd binding",
                priceId: "price_1Pf0mKRsF5Uw8CjuGyqi1f2B",
            },
        },
    },
};

const coaches = [
    {
        id: "#MarkusRåheim",
        name: "Markus Råheim",
        imageUrl: "/hello-markus.jpg",
        services: {
            trening: true,
            kosthold: true,
            kombinert: true,
        },
    },
    {
        id: "#InaKolstadRustad",
        name: "Ina Kolstad Rustad",
        imageUrl: "/hello-ina.jpg",
        services: {
            trening: true,
            kosthold: true,
            kombinert: true,
        },
    },
    {
        id: "#AndersFelipe",
        name: "Anders Felipe",
        imageUrl: "/hello-anders.jpg",
        services: {
            trening: true,
            kosthold: false,
            kombinert: false,
        },
    },
    {
        id: "#MathiasAbrahamsen",
        name: "Mathias Abrahamsen",
        imageUrl: "/hello-mathias.jpg",
        services: {
            trening: true,
            kosthold: true,
            kombinert: true,
        },
    },
    {
        id: "#GroEli",
        name: "Gro Eli",
        imageUrl: "/hello-groeli.jpg",
        services: {
            trening: true,
            kosthold: true,
            kombinert: true,
        },
    },
    {
        id: "#LenaPrestmarken",
        name: "Lena Prestmarken",
        imageUrl: "/hello-lena.jpg",
        services: {
            trening: true,
            kosthold: true,
            kombinert: true,
        },
    },
    {
        id: "#EskilKaspersen",
        name: "Eskil Kaspersen",
        imageUrl: "/hello-eskil.jpg",
        services: {
            trening: true,
            kosthold: true,
            kombinert: true,
        },
    },
];

export default function Checkout() {
    const [selectedPackage, setSelectedPackage] = useState("");
    const [selectedBinding, setSelectedBinding] = useState("");
    const [selectedCoach, setSelectedCoach] = useState("");
    const [customerComment, setCustomerComment] = useState("");

    const getPriceId = () => {
        if (selectedPackage && selectedBinding) {
            return priceData[selectedPackage].bindings[selectedBinding].priceId;
        }
        return null;
    };

    const selectedCoachData = coaches.find(
        (coach) => coach.id === selectedCoach
    );

    const getAvailablePackages = () => {
        if (!selectedCoach) return [];
        const coach = coaches.find((c) => c.id === selectedCoach);
        return Object.keys(priceData).filter(
            (packageName) => coach.services[packageName]
        );
    };

    const handleCoachChange = (e) => {
        setSelectedCoach(e.target.value);
        setSelectedPackage("");
        setSelectedBinding("");
    };

    return (
        <div className="flex flex-col gap-8 inner min-h-screen">
            <h1 className="h1_text">Checkout</h1>

            <div className="flex flex-col gap-2">
                {selectedCoachData && (
                    <div>
                        <Image
                            src={selectedCoachData.imageUrl}
                            alt={selectedCoachData.name}
                            width={240}
                            height={240}
                            className="aspect-square rounded-2xl object-cover"
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

            {selectedCoach && (
                <div className="flex flex-col gap-2">
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
                                    ${
                                        selectedPackage === id
                                            ? "radio-checked"
                                            : ""
                                    }`}
                            />
                            {priceData[id].name}
                        </label>
                    ))}
                </div>
            )}

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
                                                ${
                                                    selectedBinding === id
                                                        ? "radio-checked"
                                                        : ""
                                                }`}
                                />
                                {data.name}
                            </label>
                        )
                    )}
                </div>
            )}
            {selectedPackage && selectedBinding && (
                <div className="flex flex-col gap-2">
                    <h3 className="h3_text mb-1">
                        Kommentar til coach:{" "}
                        <span className="text-base text-clr_primary_dark">
                            - Valgfritt
                        </span>
                    </h3>
                    <textarea
                        value={customerComment}
                        maxLength={1000}
                        onChange={(e) => setCustomerComment(e.target.value)}
                        placeholder="Fortell litt om dine mål og ønsker..."
                        className="w-full h-32 p-2 bg-black text-white border-2 border-red-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <span className="text-xs">(Max 1000 tegn)</span>
                </div>
            )}
            {selectedPackage && selectedBinding && selectedCoach ? (
                <SubscribeButton
                    priceId={getPriceId()}
                    coachId={selectedCoach}
                    customerComment={customerComment}
                />
            ) : (
                <button className="button cursor-not-allowed h-fit bg-transparent border-4 border-clr_white">
                    Velg pakke, bindingstid og coach for å fortsette
                </button>
            )}
            <ToS />
        </div>
    );
}
