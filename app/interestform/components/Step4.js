"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";

const Step4 = () => {
    const { register } = useFormContext();

    return (
        <div>
            <h2 className="text-xl font-bold mb-4 text-clr_white">
                Tilleggsinformasjon
            </h2>

            <FormInput
                label="Foretrukket coach"
                name="coach"
                type="text"
                register={register}
                validation={{}}
                error={null}
            />

            <FormTextarea
                label="Tilleggsinformasjon"
                name="tilleggsinformasjon"
                register={register}
                validation={{}}
                error={null}
            />
        </div>
    );
};

export default Step4;
