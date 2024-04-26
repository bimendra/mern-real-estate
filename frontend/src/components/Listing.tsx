import { Card } from './ui/card';
import React, { useState } from 'react';
import { Toggle } from './ui/toggle';
import { Bookmark, BookmarkCheck } from 'lucide-react';

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

export default function Listing({
  price,
  amenities,
  address,
  type,
}: ListingProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  return (
    <Card className="rounded-lg">
      <article className="flex">
        <picture>
          <img
            className="max-h-40 rounded-l-lg"
            src="listings/rgsh6a5v4nfy1nf09y89okxiix60n1z.jpg"
            alt="7316 SE 72nd Ave, Portland, OR 97206"
          />
        </picture>
        <div className="p-4 flex-1">
          <div className="flex justify-between">
            <h3 className="text-xl font-bold">
              {price.currency.symbol}
              {price.value}
            </h3>
            <Toggle
              aria-label="Bookmark"
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              {isBookmarked ? (
                <BookmarkCheck size={16} />
              ) : (
                <Bookmark size={16} />
              )}
            </Toggle>
          </div>
          <div className="text-muted-foreground text-sm">
            <span>{address.suite}</span>{' '}
            <span>
              {address.street}, {address.city}, {address.zip}
            </span>
          </div>
          <div className="flex flex-wrap gap-5 mt-3 mb-2">
            {amenities.map((amenity) => (
              <div className="flex gap-2 items-center text-sm">
                {amenity.icon}
                <span>
                  {amenity.count} {amenity.label}
                </span>
              </div>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">{type}</span>
        </div>
      </article>
    </Card>
  );
}
