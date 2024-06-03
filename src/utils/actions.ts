"use server"

import { redirect } from "next/navigation";
import prisma from "./prisma";

export const createCar = async (formData: FormData) => {
  const modelId = formData.get("modelId")?.toString();
  const brandId = formData.get("brandId")?.toString();
  const location = formData.get("location")?.toString();
  const price = formData.get("price")?.toString();
  const priceInt = price !== undefined ? parseInt(price, 10) : undefined;
  const year = formData.get("year")?.toString();
  const yearInt = year !== undefined ? parseInt(year, 10) : undefined;
  const color = formData.get("color")?.toString();
  const description = formData.get("description")?.toString();

  if (!modelId || !brandId || !description) {
    return;
  }

  await prisma.car.create({
    data: {
      modelId: modelId,
      brandId: brandId,
      description: description,
      year: yearInt,
      color: color,
      price: priceInt,
      location: location,
    },
  });
  redirect("/");
};
