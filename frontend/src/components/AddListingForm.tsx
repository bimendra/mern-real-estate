import { z } from 'zod';
import { Step, StepItem, Stepper, useStepper } from './ui/stepper';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Libraries, useLoadScript } from '@react-google-maps/api';
import usePlacesAutocomplete from 'use-places-autocomplete';
import AsyncSelect from 'react-select/async';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useEffect } from 'react';

const addListingFormSchema = z.object({
  address: z.object({
    label: z.string().min(1, { message: 'Address is required' }),
    value: z.string().min(1, { message: 'Address is required' }),
  }),
});

// Stepper configiuartion
const steps: StepItem[] = [
  {
    label: 'Location',
  },
  {
    label: 'Details',
  },
  // { label: 'Ammenties' },

  // {
  //   label: 'Photos',
  // },
  // {
  //   label: 'Review',
  // },
];

const libraries: Libraries = ['places'];

const AddListingForm = () => {
  const form = useForm<z.infer<typeof addListingFormSchema>>({
    resolver: zodResolver(addListingFormSchema),
    // defaultValues: {
    //   address: {
    //     label: '',
    //     value: '',
    //   },
    // },
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

  const {
    value: searchValue,
    suggestions: { data },
    setValue,
  } = usePlacesAutocomplete();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => console.log(data))}>
        <Stepper initialStep={0} steps={steps}>
          <Step>
            <div className="grid gap-6 md:grid-cols-2">
              <fieldset className="my-6 p-6 border rounded-lg grid gap-4">
                <legend className="text-muted-foreground text-sm">
                  Property Location &amp; Address
                </legend>
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <AsyncSelect
                          className="text-sm"
                          placeholder="Enter address of the property"
                          isClearable
                          theme={(theme) => ({
                            ...theme,
                            colors: {
                              ...theme.colors,
                              primary25: 'hsl(var(--primary))',
                              primary: 'hsl(var(--primary))',
                            },
                          })}
                          {...field}
                          inputValue={searchValue}
                          onInputChange={(newValue) => {
                            setValue(newValue as string);
                          }}
                          loadOptions={(value, callback) => {
                            callback(
                              data.map(({ description }) => ({
                                value: description,
                                label: description,
                              }))
                            );
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </fieldset>
              <fieldset className="my-6 p-6 border rounded-lg grid gap-4">
                <legend className="text-muted-foreground text-sm">
                  Images
                </legend>
              </fieldset>
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
            <Button
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
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default AddListingForm;
