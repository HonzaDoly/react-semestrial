"use client";

import { createCar } from "@/utils/actions";
import { Brand, CarModel } from "@prisma/client";
import BrandAndModelFormFields from "./BrandAndModelFormFields";
import prisma from "@/utils/prisma";
import { useRouter, useSearchParams } from "next/navigation";

const CarSearchForm = ({
  models,
  brands,
}: {
  models: CarModel[];
  brands: Brand[];
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const obj = {
      location: formData.get("location")?.toString() ?? "",
      brand: formData.get("brandId")?.toString() ?? "",
      model: formData.get("modelId")?.toString() ?? "",
    };
    router.push(
      `?location=${obj.location}&brand=${obj.brand}&model=${obj.model}`
    );
  }

  const objRefreshed = {
    location: searchParams.get("location"),
    brand: searchParams.get("brand"),
    model: searchParams.get("model"),
  };

  return (
    <div className="p-5 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Home page</h1>
      <div className="w-full max-w-lg">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col rounded-md bg-gray-400 px-10 py-5 shadow-sm shadow-gray-500"
        >
          <BrandAndModelFormFields
            models={models}
            brands={brands}
            refreshedParams={{
              brand: objRefreshed.brand || "",
              model: objRefreshed.model || "",
            }}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            defaultValue={objRefreshed.location || ""}
            className="border-2 rounded-md p-2 mt-2"
          />
          <div className="flex justify-center w-full mt-4">
            <button
              className="btn text-center w-full max-w-xs rounded-md border p-2 shadow-sm hover:bg-slate-100"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarSearchForm;
