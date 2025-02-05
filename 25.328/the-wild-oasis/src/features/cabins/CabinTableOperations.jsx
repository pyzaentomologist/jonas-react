import { Filter } from "../../ui/Filter";
import { SortBy } from "../../ui/SortBy";
import { TableOperations } from "../../ui/TableOperations";

export function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name Asc" },
          { value: "name-desc", label: "Sort by name Desc" },
          { value: "regularPrice-asc", label: "Sort by price Asc" },
          { value: "regularPrice-desc", label: "Sort by price Desc" },
          { value: "maxCapacity-asc", label: "Sort by capacity Asc" },
          { value: "maxCapacity-desc", label: "Sort by capacity Desc" },
        ]}
      />
    </TableOperations>
  );
}
