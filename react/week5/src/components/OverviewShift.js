import React from "react";
import ShiftItem from "./ShiftItem";

const OverviewShift = ( {shiftsToShow}) => {
    return (
      <div>
        <div>{shiftsToShow.map(shift => {
           return (
            <ShiftItem
              key={shift.name}
              name={shift.name}
              start={shift.start}
              end={shift.end}
              hours={shift.hours}
            />
          );
        })}</div>
      </div>
    );
  };

  export default OverviewShift;