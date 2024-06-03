import { Brand, CarModel } from "@prisma/client";
import CarItem from "./CarItem";
import { CarWithDeps } from "@/types/prismaTypes";
import prisma from "@/utils/prisma";

type Props = {
  cars: CarWithDeps[];
  brands: Brand[];
  models: CarModel[];
};

const CarList = ({ brands, models, cars }: Props) => {
  return (
    <div>
      {cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
