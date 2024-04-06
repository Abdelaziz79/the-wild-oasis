import React from "react";

import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useCabins from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

export default function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParam] = useSearchParams();

  if (isLoading) return <Spinner />;

  const filter = searchParam.get("discount") || "all";

  // filtering

  let filteredCabin;

  if (filter === "all") filteredCabin = cabins;
  if (filter === "no-discount")
    filteredCabin = cabins.filter((cabin) => cabin.discount === 0);
  if (filter === "with-discount")
    filteredCabin = cabins.filter((cabin) => cabin.discount > 0);

  // sorting

  const sortBy = searchParam.get("sortBy") || "name-asc";
  const [field, order] = sortBy.split("-");

  const modifier = order === "asc" ? 1 : -1;
  const sortedCabin = filteredCabin.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns={"0.6fr 1.8fr 2.2fr 1fr 1fr 1fr"}>
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>capacity</div>
          <div>price</div>
          <div>discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedCabin}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  );
}
