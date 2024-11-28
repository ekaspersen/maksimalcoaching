"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import FormTextarea from "./FormTextarea";

const Step3 = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div>
            <h2 className="text-xl font-bold mb-4 text-clr_white">
                Tilgjengelighet og Begrensninger
            </h2>

            <FormTextarea
                label="Tilgjengelighet for trening"
                name="tilgjengelighet"
                register={register}
                validation={{ required: "Oppgi din tilgjengelighet" }}
                error={errors.tilgjengelighet}
            />

            <FormTextarea
                label="Skader eller begrensninger"
                name="skader"
                register={register}
                validation={{
                    required: "Oppgi eventuelle skader eller begrensninger",
                }}
                error={errors.skader}
            />
        </div>
    );
};

export default Step3;
