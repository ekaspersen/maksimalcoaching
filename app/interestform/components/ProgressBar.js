"use client";
import React from "react";

const ProgressBar = ({ currentStep, totalSteps }) => {
    const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

    return (
        <div className="w-full bg-clr_gray rounded-full h-2.5 mt-3">
            <div
                className="bg-clr_primary h-2.5 rounded-full"
                style={{ width: `${progressPercentage}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
