import Listing from '@/components/Listing';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { SelectGroup, SelectLabel } from '@radix-ui/react-select';

import {
  ArrowDown,
  ArrowDown01Icon,
  ArrowDownNarrowWideIcon,
  ArrowUp,
  ArrowUp01Icon,
  Bath,
  BathIcon,
  Bed,
  BedDouble,
  CarFront,
  ChevronDown,
  DollarSign,
  FenceIcon,
  SlidersHorizontalIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SearchResults() {
  return (
    <div className="">
      <div className="py-6 md:py-10 px-4 md:px-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Search results</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-2xl font-bold tracking-light lg:text-3xl my-2 md:my-3 !leading-tight">
          Houses near Maylands, WA 6051
        </h1>
        {/* Filters */}
        {/* Total items | Sort criteria | Grid/List view toggle*/}
        {/* Item list */}
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <p className="mr-4 font-bold">328 Items</p>
            <span>Sort by</span>
            <div className="flex gap-2 py-3">
              <Select value="ratings">
                <SelectTrigger className="gap-2">
                  <SelectValue defaultValue="price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price">Price</SelectItem>
                  <SelectItem value="ratings">Ratings</SelectItem>
                  <SelectItem value="sqft">Square Ft.</SelectItem>
                </SelectContent>
              </Select>
              <ToggleGroup
                type="single"
                defaultValue="ascending"
                variant="outline"
                className="gap-0"
              >
                <ToggleGroupItem
                  value="ascending"
                  className="rounded-tr-none rounded-br-none"
                >
                  <ArrowUp01Icon size={16} />
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="descending"
                  className="rounded-tl-none rounded-bl-none relative -left-px"
                >
                  <ArrowDown01Icon size={16} />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
          <div className="flex gap-2 py-3">
            <div className="hidden md:flex gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="flex gap-2 items-center"
                    variant="secondary"
                  >
                    <DollarSign size={12} /> Price <ChevronDown size={16} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <p>Filter</p>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="flex gap-2 items-center"
                    variant="secondary"
                  >
                    <Bed size={12} /> Beds <ChevronDown size={16} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <p>Filter</p>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="flex gap-2 items-center"
                    variant="secondary"
                  >
                    <BathIcon size={12} /> Baths <ChevronDown size={16} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <p>Filter</p>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="flex gap-2 items-center"
                    variant="secondary"
                  >
                    <FenceIcon size={12} />
                    Type <ChevronDown size={16} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <p>Filter</p>
                </PopoverContent>
              </Popover>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" className="flex items-center gap-2">
                  <SlidersHorizontalIcon size={12} />
                  <span className="hidden sm:inline"> All Filters</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Filters</DialogTitle>
                </DialogHeader>
                <p>Filters</p>
                <DialogFooter>
                  <Button type="submit">Update Results</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="my-4 flex gap-8">
          <Listing
            type="Townhouse"
            price={{
              value: 599999,
              currency: {
                abbreviation: 'USd',
                symbol: '$',
              },
            }}
            address={{
              suite: '7023 SE',
              street: '67th Ave',
              city: 'Portland',
              zip: 'OR 97206',
            }}
            amenities={[
              {
                label: 'Beds',
                count: 3,
                icon: <BedDouble size={16} />,
              },
              {
                label: 'Baths',
                count: 2,
                icon: <Bath size={16} />,
              },
              {
                label: 'Car Spaces',
                count: 2,
                icon: <CarFront size={16} />,
              },
            ]}
          />
          <div>Map here</div>
        </div>
        {/* 
        Photo
        Price
        Location
        Share | Bookmark
        Details:
          Type
          Beds
          Baths
          Car bays
          Area
        
        
        */}
      </div>
    </div>
  );
}
