"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import ProgressBar from "./components/ProgressBar";
import FormNavigation from "./components/FormNavigation";

export default function InteresseSkjema() {
    const methods = useForm({
        mode: "onBlur",
    });
    const { handleSubmit, trigger } = methods;

    const [currentStep, setCurrentStep] = useState(0);
    const router = useRouter(); // Next.js 13 navigation hook

    const steps = [
        <Step1 key={0} />,
        <Step2 key={1} />,
        <Step3 key={2} />,
        <Step4 key={3} />,
    ];

    const onSubmit = async (data) => {
        if (currentStep < steps.length - 1) {
            const valid = await trigger();
            if (valid) {
                setCurrentStep(currentStep + 1);
            }
        } else {
            // TODO: Send the form data to the backend here

            console.log("Form Data:", data);

            // Redirect to the thank-you page
            router.push("/interestform/thankyou");
        }
    };

    const onBack = () => {
        setCurrentStep(currentStep - 1);
    };

    return (
        <div className="flex mx-2 flex-col items-center justify-center min-h-screen bg-clr_black text-clr_white">
            <div className="w-full max-w-2xl shadow-md rounded-lg overflow-hidden">
                <div className="bg-clr_primary_dark text-clr_white py-4 px-4">
                    <h2 className="text-2xl font-bold">Interesseskjema</h2>
                    <p className="text-sm mt-1">
                        Steg {currentStep + 1} av {steps.length}
                    </p>
                    <ProgressBar
                        currentStep={currentStep}
                        totalSteps={steps.length}
                    />
                </div>
                <div className="p-4">
                    <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {steps[currentStep]}
                            <FormNavigation
                                isLastStep={currentStep === steps.length - 1}
                                isFirstStep={currentStep === 0}
                                onBack={onBack}
                            />
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    );
}
