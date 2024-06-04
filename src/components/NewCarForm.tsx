import { createCar } from "@/utils/actions";
import { Brand, CarModel } from "@prisma/client";
import BrandAndModelFormFields from "./BrandAndModelFormFields";
import prisma from "@/utils/prisma";
import Link from "next/link";

const NewCarForm = ({
  models,
  brands,
}: {
  models: CarModel[];
  brands: Brand[];
}) => {
  return (
    <div className="p-5">
      <form
        action={createCar}
        className="flex flex-col rounded-md bg-gray-400 p-5 shadow-sm shadow-gray-500"
      >
        <BrandAndModelFormFields models={models} brands={brands} />
        <input
          className="border-2 rounded-md p-2 mt-2"
          type="text"
          name="description"
          placeholder="Description"
          required
        />
        <input
          className="border-2 rounded-md p-2 mt-2"
          type="text"
          name="location"
          placeholder="Location"
          required
        />
        <input
          className="border-2 rounded-md p-2 mt-2"
          type="text"
          name="price"
          placeholder="Price"
          required
        />
        <input
          className="border-2 rounded-md p-2 mt-2"
          type="text"
          name="color"
          placeholder="Color"
          required
        />
        <input
          className="border-2 rounded-md p-2 mt-2"
          type="text"
          name="year"
          placeholder="Year"
          required
        />
        <div className="flex justify-center mt-4">
          <button
            className="btn text-center w-full max-w-xs rounded-md border p-2 shadow-sm hover:bg-slate-100"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="flex justify-center mt-4">
        <Link
          href="/"
          className="text-center w-full max-w-xs rounded-md border p-2 shadow-sm hover:bg-slate-100"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default NewCarForm;
