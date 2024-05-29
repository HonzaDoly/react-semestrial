"use client"

import { Brand, CarModel } from "@prisma/client";
import { useMemo, useState } from "react";


const NewCarForm = ({
  models,
  brands,
}: {
  models: CarModel[];
  brands: Brand[];
}) => {
  const [brandId, setBrandId] = useState('');
  const filteredModels = useMemo(() => {
    return models.filter((model) => model.brandId === brandId);
  }, [brandId, models]);
  return (
    <div>
      <form action="">
        <select
          name="brandId"
          id=""
          value={brandId}
          onChange={(e) => {
            setBrandId;
          }}
        >
          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
        <select name="modelId">
          {filteredModels.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default NewCarForm;
