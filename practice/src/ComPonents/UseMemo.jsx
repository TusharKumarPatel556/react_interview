import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [counterOne, setcounterOne] = useState(0);
  const [counterTwo, setcounterTwo] = useState(0);

  const IncrementOne = () => {
    setcounterOne(counterOne + 1);
  };
  const IncrementTwo = () => {
    setcounterTwo(counterTwo + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;

    while (i < 2000000000) i++;

    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <button onClick={IncrementOne} type="">
        CounterOne - {counterOne}
      </button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <br />
      <button onClick={IncrementTwo} type="">
        CounterTwo - {counterTwo}
      </button>
    </div>
  );
};

export default UseMemo;
