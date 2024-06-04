import NewCarForm from '@/components/NewCarForm'
import prisma from '@/utils/prisma'


const fetchBrands = async () => {
  const brands = await prisma.brand.findMany()
  return brands
}

const fetchModels = async () => {
  const models = await prisma.carModel.findMany()
  return models
}
const NewCarPage = async () => {
  const brands = await fetchBrands()
  const models = await fetchModels()

  return (
    <div className="p-5 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">New Car</h1>
      <div className="w-full max-w-lg">
        <NewCarForm brands={brands} models={models} />
      </div>
    </div>
  )
}

export default NewCarPage