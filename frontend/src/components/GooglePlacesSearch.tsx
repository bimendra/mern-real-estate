import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-google-places-autocomplete';

type Props = {
  intent: 'search | post';
};

const GooglePlacesSearch = (props: Props) => {
  return (
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
  );
};

export default GooglePlacesSearch;
