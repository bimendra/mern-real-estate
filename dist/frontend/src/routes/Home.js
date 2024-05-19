"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const button_1 = require("@/components/ui/button");
const react_google_places_autocomplete_1 = require("react-google-places-autocomplete");
const label_1 = require("@/components/ui/label");
const radio_group_1 = require("@/components/ui/radio-group");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
function Home() {
    return (<>
      
      <div className="flex flex-col justify-center py-12 md:py-20 px-4 md:px-6 md:w-2/4">
        <h1 className="text-4xl font-bold tracking-light lg:text-5xl my-4 md:my-6 !leading-tight">
          Find your dream home...
        </h1>
        <p className="leading-6 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta omnis
          illo voluptatum vitae magni mollitia architecto unde enim!
        </p>
        
        <div className="flex flex-col my-6 md:my-10">
          <radio_group_1.RadioGroup defaultValue="rent" className="flex">
            <div className="flex flex-col">
              <radio_group_1.RadioGroupItem value="rent" id="rent" className="d-none peer sr-only"/>
              <label_1.Label htmlFor="rent" className="rounded-md p-4 pb-5 rounded-t-lg cursor-pointer hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-foreground peer-data-[state=checked]:text-background [&:has([data-state=checked])]:border-primary font-bold">
                Rent
              </label_1.Label>
            </div>
            <div className="flex flex-col">
              <radio_group_1.RadioGroupItem value="buy" id="buy" className="d-none peer sr-only"/>
              <label_1.Label htmlFor="buy" className="rounded-md p-4 pb-5 rounded-t-lg cursor-pointer hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-foreground peer-data-[state=checked]:text-background [&:has([data-state=checked])]:border-primary font-bold">
                Buy
              </label_1.Label>
            </div>
          </radio_group_1.RadioGroup>
          <form className="flex gap-3 p-4 bg-foreground rounded-lg  relative -top-[4px]">
            <div className="flex-1">
              <react_google_places_autocomplete_1.default apiKey={import.meta.env.VITE_GOOGLE_API_KEY || 'API_KEY'} selectProps={{
            placeholder: 'Enter City, Suburb or ZIP Code / Post Code',
            isClearable: true,
            onChange: async (place) => {
                if (place) {
                    const geoCode = (await (0, react_google_places_autocomplete_1.geocodeByAddress)(place.label))[0];
                    const latLng = await (0, react_google_places_autocomplete_1.getLatLng)(geoCode);
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
        }}/>
            </div>
            <button_1.Button variant="secondary" className="h-12 flex gap-2">
              <lucide_react_1.SlidersHorizontal size={16} strokeWidth={3}/>
            </button_1.Button>
            <button_1.Button type="submit" variant="default" className="h-12 text-foreground" asChild>
              <react_router_dom_1.Link to="search-results">
                <lucide_react_1.Search size={16} strokeWidth={3}/>
              </react_router_dom_1.Link>
            </button_1.Button>
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
      <img className="absolute right-0 -top-4 -z-10 max-w-[640px] opacity-[.125] md:opacity-[1]" src="hero-image.png"/>
    </>);
}
exports.default = Home;
//# sourceMappingURL=Home.js.map