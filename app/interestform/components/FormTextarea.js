"use client";
import React from "react";
import FormLabel from "./FormLabel";
import FormError from "./FormError";

const FormTextarea = ({ label, name, register, validation, error }) => {
    return (
        <div className="mb-4">
            <FormLabel name={name} label={label} />
            <textarea
                {...register(name, validation)}
                className={`w-full p-2 border ${
                    error ? "border-clr_danger" : "border-clr_gray"
                } rounded bg-clr_black text-clr_white`}
            ></textarea>
            {error && <FormError message={error.message} />}
        </div>
    );
};

export default FormTextarea;
