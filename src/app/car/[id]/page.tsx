import prisma from "@/utils/prisma";
import Link from "next/link";

const fetchCarDetail = async (id: string) =>{
    const car = await prisma.car.findUnique({
        where: {
            id: id,
        },
        include:{
            brand: true,
            model: true,
        }
    })
    return car
}

const CarDetaiPage = async ({params}: {params: {id:string}}) => {

    const car = await fetchCarDetail(params.id)

  return (
    <div>
        <Link href={"/"}>Back</Link>
        <div>{car?.brand.name}</div>
        <div>{car?.color}</div>
        <div>{car?.model.name}</div>
    </div>
  )
};

export default CarDetaiPage;
