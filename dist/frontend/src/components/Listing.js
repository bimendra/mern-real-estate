"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = require("./ui/card");
const react_1 = require("react");
const toggle_1 = require("./ui/toggle");
const lucide_react_1 = require("lucide-react");
function Listing({ price, amenities, address, type, }) {
    const [isBookmarked, setIsBookmarked] = (0, react_1.useState)(false);
    return (<card_1.Card className="rounded-lg">
      <article className="flex">
        <picture>
          <img className="max-h-40 rounded-l-lg" src="listings/rgsh6a5v4nfy1nf09y89okxiix60n1z.jpg" alt="7316 SE 72nd Ave, Portland, OR 97206"/>
        </picture>
        <div className="p-4 flex-1">
          <div className="flex justify-between">
            <h3 className="text-xl font-bold">
              {price.currency.symbol}
              {price.value}
            </h3>
            <toggle_1.Toggle aria-label="Bookmark" onClick={() => setIsBookmarked(!isBookmarked)}>
              {isBookmarked ? (<lucide_react_1.BookmarkCheck size={16}/>) : (<lucide_react_1.Bookmark size={16}/>)}
            </toggle_1.Toggle>
          </div>
          <div className="text-muted-foreground text-sm">
            <span>{address.suite}</span>{' '}
            <span>
              {address.street}, {address.city}, {address.zip}
            </span>
          </div>
          <div className="flex flex-wrap gap-5 mt-3 mb-2">
            {amenities.map((amenity) => (<div className="flex gap-2 items-center text-sm">
                {amenity.icon}
                <span>
                  {amenity.count} {amenity.label}
                </span>
              </div>))}
          </div>
          <span className="text-sm text-muted-foreground">{type}</span>
        </div>
      </article>
    </card_1.Card>);
}
exports.default = Listing;
//# sourceMappingURL=Listing.js.map