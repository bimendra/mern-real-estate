import { z } from 'zod';
import { Step, StepItem, Stepper, useStepper } from './ui/stepper';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';

import { Button } from './ui/button';
import { useEffect } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const addListingFormSchema = z.object({
  address: z.string().min(1, 'Please select a valid address'),
});

// Stepper configiuartion
const steps: StepItem[] = [
  {
    label: 'Location',
  },
  {
    label: 'Details',
  },
];

const AddListingForm = () => {
  const form = useForm<z.infer<typeof addListingFormSchema>>({
    resolver: zodResolver(addListingFormSchema),
    defaultValues: {
      address:
        'Riverview Apartments, 1 Hardy Street, South Perth WA, Australia',
    },
  });

  const {
    formState: { errors },
    setError,
  } = form;

  useEffect(() => {
    if (errors?.address) {
      setError('address', {
        type: 'manual',
        message: 'Should be a valid address',
      });
    }
  }, [errors]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => console.log(data))}>
        <Stepper initialStep={0} steps={steps}>
          <Step>
            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <GooglePlacesAutocomplete
                          apiKey={
                            import.meta.env.VITE_GOOGLE_API_KEY || 'API_KEY'
                          }
                          selectProps={
                            {
                              isClearable: true,
                              placeholder:
                                'Please enter the address of the property',
                              defaultValue: field?.value
                                ? {
                                    label: field.value,
                                    value: field.value,
                                  }
                                : null,
                              onChange: (place: any) =>
                                field.onChange(place?.value.description),
                              onBlur: () => field.onBlur(),
                              ref: field.ref,
                              theme: (theme: any) => ({
                                ...theme,
                                colors: {
                                  ...theme.colors,
                                  primary25: 'hsl(var(--primary))',
                                  primary: 'hsl(var(--primary))',
                                },
                              }),
                              // isLoading: true, To be set to true while loading initial data via redux
                            } as any
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
          </Step>
          <Step label={steps[1].label}>Test</Step>
          <Footer />
        </Stepper>
      </form>
    </Form>
  );
};

const Footer = () => {
  const {
    nextStep,
    prevStep,
    resetSteps,
    isDisabledStep,
    hasCompletedAllSteps,
    isLastStep,
    isOptionalStep,
  } = useStepper();
  return (
    <>
      <div className="w-full flex py-4 gap-2">
        {isLastStep ? (
          <Button>Submit</Button>
        ) : (
          <>
            {/* <Button
              disabled={isDisabledStep}
              onClick={prevStep}
              size="sm"
              variant="secondary"
              type="button"
            >
              Prev
            </Button>
            <Button size="sm" onClick={nextStep} type="button">
              Next
            </Button> */}
            <Button>Submit</Button>
          </>
        )}
      </div>
    </>
  );
};

export default AddListingForm;
