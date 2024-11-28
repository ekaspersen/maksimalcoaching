"use client";
import React from "react";

const FormLabel = ({ name, label }) => {
    return (
        <label
            htmlFor={name}
            className="block text-clr_white font-semibold mb-1"
        >
            {label}
        </label>
    );
};

export default FormLabel;
