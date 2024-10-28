"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRadioGroup from "./FormRadioGroup";

const Step1 = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div>
            <h2 className="text-xl font-bold mb-4 text-clr_white">
                Personlig Informasjon
            </h2>

            <FormInput
                label="Navn"
                name="navn"
                type="text"
                register={register}
                validation={{ required: "Navn er påkrevd" }}
                error={errors.navn}
            />

            <FormInput
                label="E-post"
                name="epost"
                type="email"
                register={register}
                validation={{
                    required: "E-post er påkrevd",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Ugyldig e-postadresse",
                    },
                }}
                error={errors.epost}
            />

            <FormInput
                label="Telefonnummer"
                name="telefon"
                type="tel"
                register={register}
                validation={{
                    required: "Telefonnummer er påkrevd",
                    pattern: {
                        value: /^[0-9]{8}$/,
                        message: "Telefonnummer må være 8 sifre",
                    },
                }}
                error={errors.telefon}
            />

            <FormRadioGroup
                label="Foretrukket kontaktmetode"
                name="kontaktmetode"
                options={[
                    { value: "epost", label: "E-post" },
                    { value: "telefon", label: "Telefon" },
                    { value: "sms", label: "SMS" },
                ]}
                register={register}
                validation={{ required: "Velg en kontaktmetode" }}
                error={errors.kontaktmetode}
            />

            <FormInput
                label="Alder"
                name="alder"
                type="number"
                register={register}
                validation={{
                    required: "Alder er påkrevd",
                    min: { value: 1, message: "Alder må være minst 1" },
                    max: {
                        value: 120,
                        message: "Alder må være mindre enn 120",
                    },
                }}
                error={errors.alder}
            />
        </div>
    );
};

export default Step1;
