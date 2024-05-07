import AddListingForm from '@/components/AddListingForm';

const AddListing = () => {
  return (
    <div className="border-t">
      <div className="flex flex-col justify-center py-2 md:py-4 px-4 md:px-6">
        <h1 className="font-bold tracking-light lg:text-xl my-2 md:my-2 md:mb-8 !leading-tight">
          Add Listing
        </h1>
        <div className="flex w-full flex-col gap-4">
          <AddListingForm />
        </div>
      </div>
    </div>
  );
};

export default AddListing;
