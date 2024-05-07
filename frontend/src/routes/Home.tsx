import { Button } from '@/components/ui/button';
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-google-places-autocomplete';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <div className="flex flex-col justify-center py-12 md:py-20 px-4 md:px-6 md:w-2/4">
        <h1 className="text-4xl font-bold tracking-light lg:text-5xl my-4 md:my-6 !leading-tight">
          Find your dream home...
        </h1>
        <p className="leading-6 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta omnis
          illo voluptatum vitae magni mollitia architecto unde enim!
        </p>
        {/* Search Widget */}
        <div className="flex flex-col my-6 md:my-10">
          <RadioGroup defaultValue="rent" className="flex">
            <div className="flex flex-col">
              <RadioGroupItem
                value="rent"
                id="rent"
                className="d-none peer sr-only"
              />
              <Label
                htmlFor="rent"
                className="rounded-md p-4 pb-5 rounded-t-lg cursor-pointer hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-foreground peer-data-[state=checked]:text-background [&:has([data-state=checked])]:border-primary font-bold"
              >
                Rent
              </Label>
            </div>
            <div className="flex flex-col">
              <RadioGroupItem
                value="buy"
                id="buy"
                className="d-none peer sr-only"
              />
              <Label
                htmlFor="buy"
                className="rounded-md p-4 pb-5 rounded-t-lg cursor-pointer hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-foreground peer-data-[state=checked]:text-background [&:has([data-state=checked])]:border-primary font-bold"
              >
                Buy
              </Label>
            </div>
          </RadioGroup>
          <form className="flex gap-3 p-4 bg-foreground rounded-lg  relative -top-[4px]">
            <div className="flex-1">
              <GooglePlacesAutocomplete
                apiKey={import.meta.env.VITE_GOOGLE_API_KEY || 'API_KEY'}
                selectProps={{
                  placeholder: 'Enter City, Suburb or ZIP Code / Post Code',
                  isClearable: true,
                  onChange: async (place) => {
                    if (place) {
                      const geoCode = (await geocodeByAddress(place.label))[0];
                      const latLng = await getLatLng(geoCode);
                      console.log(latLng);
                    }
                  },
                  theme: (theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: 'hsl(var(--primary))',
                      primary: 'hsl(var(--primary))',
                    },
                  }),
                  styles: {
                    control: (baseStyles) => {
                      return {
                        ...baseStyles,
                        borderRadius: 4,
                        height: 48,
                      };
                    },
                    menu: (baseStyles) => {
                      return {
                        ...baseStyles,
                        borderRadius: 4,
                      };
                    },
                  },
                }}
              />
            </div>
            <Button variant="secondary" className="h-12 flex gap-2">
              <SlidersHorizontal size={16} strokeWidth={3} />
            </Button>
            <Button
              type="submit"
              variant="default"
              className="h-12 text-foreground"
              asChild
            >
              <Link to="search-results">
                <Search size={16} strokeWidth={3} />
              </Link>
            </Button>
          </form>
          <div className="md:flex gap-6">
            <div className="py-4 mt-6 md:mt-0 md:py-10 flex-1">
              <div className="text-3xl font-[600]">16+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="py-4 md:py-10 flex-1">
              <div className="text-3xl font-[600]">3000+</div>
              <p className="text-muted-foreground">Properties Sold</p>
            </div>
            <div className="py-4 md:py-10 flex-1">
              <div className="text-3xl font-[600]">38k</div>
              <p className="text-muted-foreground">Happy Home Owners</p>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute right-0 -top-4 -z-10 max-w-[640px] opacity-[.125] md:opacity-[1]"
        src="hero-image.png"
      />
    </>
  );
}
