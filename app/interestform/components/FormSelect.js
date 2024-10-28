"use client";
import React from "react";
import FormLabel from "./FormLabel";
import FormError from "./FormError";

const FormSelect = ({ label, name, options, register, validation, error }) => {
    return (
        <div className="mb-4">
            <FormLabel name={name} label={label} />
            <select
                {...register(name, validation)}
                className={`w-full p-2 border ${
                    error ? "border-clr_danger" : "border-clr_gray"
                } rounded bg-clr_black text-clr_white`}
            >
                <option value="">Velg et alternativ</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <FormError message={error.message} />}
        </div>
    );
};

export default FormSelect;
