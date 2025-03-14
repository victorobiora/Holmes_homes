import React from "react";

interface StepperProps {
  steps: number; // Total number of steps
  currentStep: number; // The current step completed (1-based index)
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="w-full flex flex-col items-center">

      {/* Stepper */}
      <div className="flex items-center w-full max-w-4xl">
        {Array.from({ length: steps }, (_, index) => {
          const step = index + 1;
          const isActive = step <= currentStep;
          const isCompleted = step < currentStep;

          return (
            <React.Fragment key={step}>
        
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-lg text-white font-semibold ${
                  isActive
                    ? " bg-holmes-primary-dark-brown" // Active step color (brown)
                    : "bg-gray-200" // Inactive step color
                }`}
              >
                {step}
              </div>

              {/* Line */}
              {step < steps && (
                <div
                  className={`flex-1 h-1 ${
                    isCompleted
                      ? "bg-holmes-primary-dark-brown" // Active connector color (brown)
                      : "bg-gray-200" // Inactive connector color
                  }`}
                ></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
