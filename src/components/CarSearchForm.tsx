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
    <div>
      <form onSubmit={handleFormSubmit} className="flex flex-col">
        <BrandAndModelFormFields models={models} brands={brands} refreshedParams={{brand: objRefreshed.brand || "", model: objRefreshed.model || ""}} />
        <input type="text" name="location" defaultValue={objRefreshed.location || ""}/>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default CarSearchForm;
