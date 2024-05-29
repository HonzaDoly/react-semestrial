import { CarWithDeps } from '@/types/prismaTypes'
import { Car } from '@prisma/client'

const CarItem = ({ car }: { car: CarWithDeps }) => {
  return <div>{car.id}</div>
}

export default CarItem