import React, { useState, useEffect } from "react";
import InputForm from "./components/InputForm";
import OverviewShift from "./components/OverviewShift";
import FilterForm from "./components/FilterForm";
import TotalNumbers from "./components/TotalNumbers";

import style from "./App.css";

const ModalSubmit = props => {
  return <div className="submit">{props.children}</div>;
};

const ModalOverview = props => {
  return <div className="overview-items">{props.children}</div>;
};

const WorkReport = () => {
  const [shifts, setShifts] = useState([]);
  const [shiftsToShow, setShiftsToShow] = useState([]);

  const addShift = (shiftForm) => {
    const newShifts = [addHours(shiftForm),
      ...shifts,
    ];
    setShifts(newShifts);
  };

  const addHours = shift => {
    try {
      shift.hours = (new Date(shift.end) - new Date(shift.start)) / 3600000;
    } catch {
      shift.hours = null;
    }
    return shift;
  };

  useEffect(() => {
    (async () => {
      await fetch(
        "https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw"
      )
        .then(data => data.json())
        .then(shifts => {
          shifts = shifts.map(shift => addHours(shift));
          setShifts(shifts);
          setShiftsToShow(shifts);
        });
    })();
  }, []);

  return (
    <div>
      <h1>Work Report</h1>
      <ModalSubmit>
        <InputForm addShift={addShift} />
      </ModalSubmit>
      <ModalOverview>
        <h2>Overview shift</h2>
        <FilterForm shifts={shifts} setShiftsToShow={setShiftsToShow} />
        <OverviewShift shiftsToShow={shiftsToShow} />
        <TotalNumbers shiftsToShow={shiftsToShow} />
      </ModalOverview>
    </div>
  );
};

export default WorkReport