import * as React from 'react';
import { LucideIcon } from 'lucide-react';
declare function useStepper(): {
    isLastStep: boolean;
    hasCompletedAllSteps: boolean;
    isOptionalStep: boolean;
    isDisabledStep: boolean;
    currentStep: StepItem;
    clickable?: boolean;
    isError?: boolean;
    isLoading?: boolean;
    isVertical?: boolean;
    stepCount?: number;
    expandVerticalSteps?: boolean;
    activeStep: number;
    initialStep: number;
    steps: StepItem[];
    orientation?: "vertical" | "horizontal";
    state?: "error" | "loading";
    responsive?: boolean;
    checkIcon?: IconType;
    errorIcon?: IconType;
    onClickStep?: (step: number, setStep: (step: number) => void) => void;
    mobileBreakpoint?: string;
    variant?: "circle" | "line" | "circle-alt";
    size?: "sm" | "lg" | "md";
    styles?: {
        'main-container'?: string;
        'horizontal-step'?: string;
        'horizontal-step-container'?: string;
        'vertical-step'?: string;
        'vertical-step-container'?: string;
        'vertical-step-content'?: string;
        'step-button-container'?: string;
        'step-label-container'?: string;
        'step-label'?: string;
        'step-description'?: string;
    };
    variables?: {
        '--step-icon-size'?: string;
        '--step-gap'?: string;
    };
    scrollTracking?: boolean;
    nextStep: () => void;
    prevStep: () => void;
    resetSteps: () => void;
    setStep: (step: number) => void;
};
type StepItem = {
    id?: string;
    label?: string;
    description?: string;
    icon?: IconType;
    optional?: boolean;
};
interface StepOptions {
    orientation?: 'vertical' | 'horizontal';
    state?: 'loading' | 'error';
    responsive?: boolean;
    checkIcon?: IconType;
    errorIcon?: IconType;
    onClickStep?: (step: number, setStep: (step: number) => void) => void;
    mobileBreakpoint?: string;
    variant?: 'circle' | 'circle-alt' | 'line';
    expandVerticalSteps?: boolean;
    size?: 'sm' | 'md' | 'lg';
    styles?: {
        'main-container'?: string;
        'horizontal-step'?: string;
        'horizontal-step-container'?: string;
        'vertical-step'?: string;
        'vertical-step-container'?: string;
        'vertical-step-content'?: string;
        'step-button-container'?: string;
        'step-label-container'?: string;
        'step-label'?: string;
        'step-description'?: string;
    };
    variables?: {
        '--step-icon-size'?: string;
        '--step-gap'?: string;
    };
    scrollTracking?: boolean;
}
interface StepperProps extends StepOptions {
    children?: React.ReactNode;
    className?: string;
    initialStep: number;
    steps: StepItem[];
}
declare const Stepper: React.ForwardRefExoticComponent<StepperProps & React.RefAttributes<HTMLDivElement>>;
interface StepProps extends React.HTMLAttributes<HTMLLIElement> {
    label?: string | React.ReactNode;
    description?: string;
    icon?: IconType;
    state?: 'loading' | 'error';
    checkIcon?: IconType;
    errorIcon?: IconType;
    isCompletedStep?: boolean;
    isKeepError?: boolean;
    onClickStep?: (step: number, setStep: (step: number) => void) => void;
}
declare const Step: React.ForwardRefExoticComponent<StepProps & React.RefAttributes<HTMLLIElement>>;
type IconType = LucideIcon | React.ComponentType<any> | undefined;
export { Stepper, Step, useStepper };
export type { StepProps, StepperProps, StepItem };
