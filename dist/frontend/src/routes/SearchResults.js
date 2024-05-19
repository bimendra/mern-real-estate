"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Listing_1 = require("@/components/Listing");
const breadcrumb_1 = require("@/components/ui/breadcrumb");
const button_1 = require("@/components/ui/button");
const dialog_1 = require("@/components/ui/dialog");
const popover_1 = require("@/components/ui/popover");
const select_1 = require("@/components/ui/select");
const toggle_group_1 = require("@/components/ui/toggle-group");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
function SearchResults() {
    return (<div className="">
      <div className="py-6 md:py-10 px-4 md:px-6">
        <breadcrumb_1.Breadcrumb>
          <breadcrumb_1.BreadcrumbList>
            <breadcrumb_1.BreadcrumbItem>
              <breadcrumb_1.BreadcrumbLink asChild>
                <react_router_dom_1.Link to="/">Home</react_router_dom_1.Link>
              </breadcrumb_1.BreadcrumbLink>
            </breadcrumb_1.BreadcrumbItem>
            <breadcrumb_1.BreadcrumbSeparator />
            <breadcrumb_1.BreadcrumbItem>
              <breadcrumb_1.BreadcrumbPage>Search results</breadcrumb_1.BreadcrumbPage>
            </breadcrumb_1.BreadcrumbItem>
          </breadcrumb_1.BreadcrumbList>
        </breadcrumb_1.Breadcrumb>
        <h1 className="text-2xl font-bold tracking-light lg:text-3xl my-2 md:my-3 !leading-tight">
          Houses near Maylands, WA 6051
        </h1>
        
        
        
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <p className="mr-4 font-bold">328 Items</p>
            <span>Sort by</span>
            <div className="flex gap-2 py-3">
              <select_1.Select value="ratings">
                <select_1.SelectTrigger className="gap-2">
                  <select_1.SelectValue defaultValue="price"/>
                </select_1.SelectTrigger>
                <select_1.SelectContent>
                  <select_1.SelectItem value="price">Price</select_1.SelectItem>
                  <select_1.SelectItem value="ratings">Ratings</select_1.SelectItem>
                  <select_1.SelectItem value="sqft">Square Ft.</select_1.SelectItem>
                </select_1.SelectContent>
              </select_1.Select>
              <toggle_group_1.ToggleGroup type="single" defaultValue="ascending" variant="outline" className="gap-0">
                <toggle_group_1.ToggleGroupItem value="ascending" className="rounded-tr-none rounded-br-none">
                  <lucide_react_1.ArrowUp01Icon size={16}/>
                </toggle_group_1.ToggleGroupItem>
                <toggle_group_1.ToggleGroupItem value="descending" className="rounded-tl-none rounded-bl-none relative -left-px">
                  <lucide_react_1.ArrowDown01Icon size={16}/>
                </toggle_group_1.ToggleGroupItem>
              </toggle_group_1.ToggleGroup>
            </div>
          </div>
          <div className="flex gap-2 py-3">
            <div className="hidden md:flex gap-2">
              <popover_1.Popover>
                <popover_1.PopoverTrigger asChild>
                  <button_1.Button className="flex gap-2 items-center" variant="secondary">
                    <lucide_react_1.DollarSign size={12}/> Price <lucide_react_1.ChevronDown size={16}/>
                  </button_1.Button>
                </popover_1.PopoverTrigger>
                <popover_1.PopoverContent>
                  <p>Filter</p>
                </popover_1.PopoverContent>
              </popover_1.Popover>
              <popover_1.Popover>
                <popover_1.PopoverTrigger asChild>
                  <button_1.Button className="flex gap-2 items-center" variant="secondary">
                    <lucide_react_1.Bed size={12}/> Beds <lucide_react_1.ChevronDown size={16}/>
                  </button_1.Button>
                </popover_1.PopoverTrigger>
                <popover_1.PopoverContent>
                  <p>Filter</p>
                </popover_1.PopoverContent>
              </popover_1.Popover>
              <popover_1.Popover>
                <popover_1.PopoverTrigger asChild>
                  <button_1.Button className="flex gap-2 items-center" variant="secondary">
                    <lucide_react_1.BathIcon size={12}/> Baths <lucide_react_1.ChevronDown size={16}/>
                  </button_1.Button>
                </popover_1.PopoverTrigger>
                <popover_1.PopoverContent>
                  <p>Filter</p>
                </popover_1.PopoverContent>
              </popover_1.Popover>
              <popover_1.Popover>
                <popover_1.PopoverTrigger asChild>
                  <button_1.Button className="flex gap-2 items-center" variant="secondary">
                    <lucide_react_1.FenceIcon size={12}/>
                    Type <lucide_react_1.ChevronDown size={16}/>
                  </button_1.Button>
                </popover_1.PopoverTrigger>
                <popover_1.PopoverContent>
                  <p>Filter</p>
                </popover_1.PopoverContent>
              </popover_1.Popover>
            </div>
            <dialog_1.Dialog>
              <dialog_1.DialogTrigger asChild>
                <button_1.Button variant="secondary" className="flex items-center gap-2">
                  <lucide_react_1.SlidersHorizontalIcon size={12}/>
                  <span className="hidden sm:inline"> All Filters</span>
                </button_1.Button>
              </dialog_1.DialogTrigger>
              <dialog_1.DialogContent>
                <dialog_1.DialogHeader>
                  <dialog_1.DialogTitle>Edit Filters</dialog_1.DialogTitle>
                </dialog_1.DialogHeader>
                <p>Filters</p>
                <dialog_1.DialogFooter>
                  <button_1.Button type="submit">Update Results</button_1.Button>
                </dialog_1.DialogFooter>
              </dialog_1.DialogContent>
            </dialog_1.Dialog>
          </div>
        </div>
        <div className="my-4 flex gap-8">
          <Listing_1.default type="Townhouse" price={{
            value: 599999,
            currency: {
                abbreviation: 'USd',
                symbol: '$',
            },
        }} address={{
            suite: '7023 SE',
            street: '67th Ave',
            city: 'Portland',
            zip: 'OR 97206',
        }} amenities={[
            {
                label: 'Beds',
                count: 3,
                icon: <lucide_react_1.BedDouble size={16}/>,
            },
            {
                label: 'Baths',
                count: 2,
                icon: <lucide_react_1.Bath size={16}/>,
            },
            {
                label: 'Car Spaces',
                count: 2,
                icon: <lucide_react_1.CarFront size={16}/>,
            },
        ]}/>
          <div>Map here</div>
        </div>
        
      </div>
    </div>);
}
exports.default = SearchResults;
//# sourceMappingURL=SearchResults.js.map