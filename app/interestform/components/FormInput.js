"use client";
import React from "react";
import FormLabel from "./FormLabel";
import FormError from "./FormError";

const FormInput = ({ label, name, type, register, validation, error }) => {
    return (
        <div className="mb-4">
            <FormLabel name={name} label={label} />
            <input
                type={type}
                {...register(name, validation)}
                className={`w-full p-2 border ${
                    error ? "border-clr_danger" : "border-clr_gray"
                } rounded bg-clr_black text-clr_white`}
            />
            {error && <FormError message={error.message} />}
        </div>
    );
};

export default FormInput;
