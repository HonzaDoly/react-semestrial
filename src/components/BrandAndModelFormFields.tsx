'use client'
import { Brand, CarModel } from '@prisma/client'
import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
import { Fragment, useMemo, useState } from 'react'

const BrandAndModelFormFields = ({
  models,
  brands,
  refreshedParams,
}: {
  models: CarModel[]
  brands: Brand[]
  refreshedParams?: {
    model: string
    brand: string
  }
}) => {
  const [brandId, setBrandId] = useState(refreshedParams?.brand || "") 

  const filteredModels = useMemo(() => {
    return models.filter((model) => model.brandId === brandId)
  }, [brandId, models])
  console.log(refreshedParams?.brand, brandId)
  return (
    <Fragment>
      <select
        name="brandId"
        required={true}
        id=""
        value={brandId}
        onChange={(e) => {
          setBrandId(e.target.value)
        }}
      >
        {brands.map((brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </select>
      <select name="modelId" required={true} defaultValue={refreshedParams?.model || ""}>
        {filteredModels.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>
    </Fragment>
  )
}

export default BrandAndModelFormFields