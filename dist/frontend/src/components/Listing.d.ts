import React from 'react';
type ListingProps = {
    type: string;
    price: {
        value: number;
        currency: {
            symbol: string;
            abbreviation: string;
        };
    };
    amenities: {
        label: string;
        icon?: React.ReactNode;
        count: number;
    }[];
    address: {
        suite: string;
        street: string;
        city: string;
        zip: string;
    };
};
export default function Listing({ price, amenities, address, type, }: ListingProps): React.JSX.Element;
export {};
