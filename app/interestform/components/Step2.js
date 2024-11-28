"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import FormSelect from "./FormSelect";

const Step2 = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div>
            <h2 className="text-xl font-bold mb-4 text-clr_white">
                Demografi og Preferanser
            </h2>

            <FormSelect
                label="Kjønn"
                name="kjonn"
                options={[
                    { value: "mann", label: "Mann" },
                    { value: "kvinne", label: "Kvinne" },
                    { value: "annet", label: "Annet" },
                    { value: "ikkeoppgitt", label: "Foretrekker å ikke oppgi" },
                ]}
                register={register}
                validation={{ required: "Velg ditt kjønn" }}
                error={errors.kjonn}
            />

            <FormSelect
                label="Treningsmål"
                name="treningsmal"
                options={[
                    { value: "vekttap", label: "Vekttap" },
                    { value: "muskelvekst", label: "Muskelvekst" },
                    { value: "utholdenhet", label: "Utholdenhet" },
                    { value: "generell", label: "Generell fitness" },
                    { value: "annet", label: "Annet" },
                ]}
                register={register}
                validation={{ required: "Velg et treningsmål" }}
                error={errors.treningsmal}
            />

            <FormSelect
                label="Nåværende treningsnivå"
                name="treningsnivaa"
                options={[
                    { value: "nybegynner", label: "Nybegynner" },
                    { value: "middels", label: "Middels" },
                    { value: "avansert", label: "Avansert" },
                ]}
                register={register}
                validation={{ required: "Velg ditt treningsnivå" }}
                error={errors.treningsnivaa}
            />

            <FormSelect
                label="Foretrukket treningsstil"
                name="treningsstil"
                options={[
                    { value: "gym", label: "Gym" },
                    { value: "hjemme", label: "Hjemme" },
                    { value: "utendors", label: "Utendørs" },
                    { value: "online", label: "Online coaching" },
                ]}
                register={register}
                validation={{ required: "Velg en treningsstil" }}
                error={errors.treningsstil}
            />
        </div>
    );
};

export default Step2;
