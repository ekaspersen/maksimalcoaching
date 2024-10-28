"use client";
import React from "react";

const FormNavigation = ({ isLastStep, isFirstStep, onBack }) => {
    return (
        <div className="flex justify-between mt-6">
            {!isFirstStep && (
                <button
                    type="button"
                    onClick={onBack}
                    className="px-4 py-2 bg-clr_gray text-clr_white rounded"
                >
                    Forrige
                </button>
            )}
            <button
                type="submit"
                className="px-4 py-2 bg-clr_primary text-clr_white rounded"
            >
                {isLastStep ? "Send inn" : "Neste"}
            </button>
        </div>
    );
};

export default FormNavigation;
