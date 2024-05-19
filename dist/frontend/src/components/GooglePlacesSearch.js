"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_google_places_autocomplete_1 = require("react-google-places-autocomplete");
const GooglePlacesSearch = (props) => {
    return (<react_google_places_autocomplete_1.default apiKey={import.meta.env.VITE_GOOGLE_API_KEY || 'API_KEY'} selectProps={{
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
        }}/>);
};
exports.default = GooglePlacesSearch;
//# sourceMappingURL=GooglePlacesSearch.js.map