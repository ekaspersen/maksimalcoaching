"use client";
import React from "react";
import FormLabel from "./FormLabel";
import FormError from "./FormError";

const FormRadioGroup = ({
    label,
    name,
    options,
    register,
    validation,
    error,
}) => {
    return (
        <div className="mb-4">
            <FormLabel name={name} label={label} />
            <div
                className={`flex flex-wrap gap-4 ${
                    error ? "border p-2 rounded border-clr_danger" : ""
                }`}
            >
                {options.map((option) => (
                    <label
                        key={option.value}
                        className="flex items-center text-clr_white"
                    >
                        <input
                            type="radio"
                            value={option.value}
                            {...register(name, validation)}
                            className="mr-2"
                        />
                        {option.label}
                    </label>
                ))}
            </div>
            {error && <FormError message={error.message} />}
        </div>
    );
};

export default FormRadioGroup;
