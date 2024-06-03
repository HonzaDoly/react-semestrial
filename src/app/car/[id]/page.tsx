import prisma from "@/utils/prisma";
import Link from "next/link";

const fetchCarDetail = async (id: string) => {
  const car = await prisma.car.findUnique({
    where: {
      id: id,
    },
    include: {
      model: true,
      brand: true,
    },
  });
  return car;
};

const DetailParam = (car: any) => {
  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm font-medium leading-6 text-gray-900">
        {car.label}
      </dt>
      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        {car.value}
      </dd>
    </div>
  );
};

const CarDetailPage = async ({ params }: { params: { id: string } }) => {
  const car = await fetchCarDetail(params.id);

  return (
    <div>
      <Link href={"/"}>Home</Link>
      <div className="px-4 sm:px-0">
        <div className="flex text-base font-semibold leading-7 text-gray-900">
          {car?.brand.name}
          {" - "}
          {car?.model.name}
        </div>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <DetailParam label="Year" value={car?.year} />
          <DetailParam label="Price" value={car?.price + " " + "CZK"} />
          <DetailParam label="Color" value={car?.color} />
          <DetailParam label="Location" value={car?.location} />
          <DetailParam label="Description" value={car?.description} />
        </dl>
      </div>
    </div>
  );
};

export default CarDetailPage;
