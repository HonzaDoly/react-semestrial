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
    <div>
      <form action={createCar} className="flex flex-col">
        <BrandAndModelFormFields models={models} brands={brands} />
        <input
          className=" border-2"
          type="text"
          name="description"
          placeholder="description"
          required={true}
        />
        <input
          className=" border-2"
          type="text"
          name="location"
          placeholder="location"
          required={true}
        />
        <input
          className=" border-2"
          type="text"
          name="price"
          placeholder="price"
          required={true}
        />
        <input
          className=" border-2"
          type="text"
          name="color"
          placeholder="color"
          required={true}
        />
        <input
          className=" border-2"
          type="text"
          name="year"
          placeholder="year"
          required={true}
        />
        <button type="submit">submit</button>
      </form>
      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default NewCarForm;
