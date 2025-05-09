import FilterInput from "./FilterInput";
import CollapsibleSection from "./CollapsibleSection";
import { useState, useEffect } from "react";

const ProductFilter = ({ products, onFilterChange }) => {
  const [filters, setFilters] = useState({
    country: "",
  });

  // hantera filterförändring
  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // lägga till nuvarande filter genom att anropa onChange
  const applyFilters = () => {
    onFilterChange(filters);
  };

  // cleara alla filter, återställa
  /*   const clearFilters = () => {
    setFilters({
      size: "",
      inStock: true,
      category: "",
      color: "",
      minPrice: "",
      maxPrice: "",
    });

    onFilterChange({});
  }; */

  
  return (
    <div className="product-filter">
      <CollapsibleSection title="Country" floating={true}>
        <FilterInput
          type="select"
          name="country"
          value={filters.country}
          onChange={handleFilterChange}
          options={[{ value: "Sweden" }, { value: "Norway" }]}
          placeholder="Select country"
        />
      </CollapsibleSection>
    </div>
  );
};

export default ProductFilter;
