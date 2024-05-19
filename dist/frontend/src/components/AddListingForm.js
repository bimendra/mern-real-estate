"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const stepper_1 = require("./ui/stepper");
const react_hook_form_1 = require("react-hook-form");
const zod_2 = require("@hookform/resolvers/zod");
const form_1 = require("./ui/form");
const button_1 = require("./ui/button");
const react_1 = require("react");
const react_google_places_autocomplete_1 = require("react-google-places-autocomplete");
const addListingFormSchema = zod_1.z.object({
    address: zod_1.z.string().min(1, 'Please select a valid address'),
});
const steps = [
    {
        label: 'Location',
    },
    {
        label: 'Details',
    },
];
const AddListingForm = () => {
    const form = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_2.zodResolver)(addListingFormSchema),
        defaultValues: {
            address: 'Riverview Apartments, 1 Hardy Street, South Perth WA, Australia',
        },
    });
    const { formState: { errors }, setError, } = form;
    (0, react_1.useEffect)(() => {
        if (errors?.address) {
            setError('address', {
                type: 'manual',
                message: 'Should be a valid address',
            });
        }
    }, [errors]);
    return (<form_1.Form {...form}>
      <form onSubmit={form.handleSubmit((data) => console.log(data))}>
        <stepper_1.Stepper initialStep={0} steps={steps}>
          <stepper_1.Step>
            <div className="grid gap-6 md:grid-cols-2">
              <form_1.FormField control={form.control} name="address" render={({ field }) => {
            return (<form_1.FormItem>
                      <form_1.FormLabel>Address</form_1.FormLabel>
                      <form_1.FormControl>
                        <react_google_places_autocomplete_1.default apiKey={import.meta.env.VITE_GOOGLE_API_KEY || 'API_KEY'} selectProps={{
                    isClearable: true,
                    placeholder: 'Please enter the address of the property',
                    defaultValue: field?.value
                        ? {
                            label: field.value,
                            value: field.value,
                        }
                        : null,
                    onChange: (place) => field.onChange(place?.value.description),
                    onBlur: () => field.onBlur(),
                    ref: field.ref,
                    theme: (theme) => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            primary25: 'hsl(var(--primary))',
                            primary: 'hsl(var(--primary))',
                        },
                    }),
                }}/>
                      </form_1.FormControl>
                      <form_1.FormMessage />
                    </form_1.FormItem>);
        }}/>
            </div>
          </stepper_1.Step>
          <stepper_1.Step label={steps[1].label}>Test</stepper_1.Step>
          <Footer />
        </stepper_1.Stepper>
      </form>
    </form_1.Form>);
};
const Footer = () => {
    const { nextStep, prevStep, resetSteps, isDisabledStep, hasCompletedAllSteps, isLastStep, isOptionalStep, } = (0, stepper_1.useStepper)();
    return (<>
      <div className="w-full flex py-4 gap-2">
        {isLastStep ? (<button_1.Button>Submit</button_1.Button>) : (<>
            
            <button_1.Button>Submit</button_1.Button>
          </>)}
      </div>
    </>);
};
exports.default = AddListingForm;
//# sourceMappingURL=AddListingForm.js.map