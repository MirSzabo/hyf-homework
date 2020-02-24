import React, { useState, useEffect } from "react";

const FilterForm = ({ shifts, setShiftsToShow }) => {
  const [filterValue, setFilterValue] = useState("");
  useEffect(() => {
    setShiftsToShow(
      shifts.filter(item =>
        item.name.toLowerCase().includes(filterValue.toLowerCase())
      )
    );
  }, [shifts, filterValue]);

  return (
    <div>
      <label>
        Filter shifts:
        <input
          value={filterValue}
          onChange={e => {
            setFilterValue(e.target.value);
          }}
        />
      </label>
    </div>
  );
};

export default FilterForm;
