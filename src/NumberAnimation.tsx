import React, { useState, useEffect } from "react";

// Function to format a number with commas.
const addCommas = (num: string): string => {
  // Use a regular expression to match groups of three digits in the number.

  // Add commas to the number by replacing groups of three digits with the
  // matched group of digits separated by commas.
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const stepsPerSecond = 10;
function calculateStep(start: number, end: number, time: number): number {
  const distance = end - start;
  return distance / (time * stepsPerSecond);
}

function nextNumber(
  start: number,
  end: number,
  current: number,
  step: number = 1,
  randomize: boolean = false
): number {
  let value = current + step;
  if (randomize) {
    value += (Math.random() - 0.5) * (value - current) * 0.1;
  }

  if (start < end && value > end) {
    value = end;
  }
  if (start > end && value < end) {
    value = end;
  }
  return value;
}

function toFixed(n: number, decimalPlaces: number): string {
  return Number(n).toFixed(decimalPlaces);
}

/* React component that animates a number from a start value to an end value 
over a given duration. The number can be randomized for a more organic feel and 
the number of decimal places can be specified. */
export default function NumberAnimation(props: {
  start: number;
  end?: number;
  time?: number;
  speed?: number;
  randomize?: boolean;
  decimalPlaces?: number;
  onReset?: boolean; // prop to receive callback
  formatNumber?: boolean;
  finalDisplayValue?: string;
}) {
  const {
    start,
    end = Number.MAX_SAFE_INTEGER,
    time = 1,
    speed,
    randomize = false,
    decimalPlaces = 0,
    onReset, // receive callback from App component
    formatNumber = false,
    finalDisplayValue,
  } = props;
  const [current, setCurrent] = useState(start.toString());

  let step = 1;
  if (speed != null) {
    step = speed / stepsPerSecond;
  } else {
    step = calculateStep(start, end, time);
  }
  const currNum = Number.parseFloat(current);
  useEffect(() => {
    let intervalId = 0;
    const next = () => {
      const nextValue = nextNumber(start, end, currNum, step, randomize);

      setCurrent(nextValue.toString());
      if (nextValue === end) {
        clearInterval(intervalId);
      }
    };

    // check if reset button has been clicked and reset animation if necessary
    if (onReset) {
      setCurrent(start.toString());
    } else {
      intervalId = window.setInterval(next, 1000 / stepsPerSecond);
    }

    return () => clearInterval(intervalId);
  }, [
    current,
    start,
    end,
    time,
    speed,
    step,
    randomize,
    decimalPlaces,
    currNum,
    onReset,
  ]);
  // console.log({current});
  let printNum = current;
  let parsedNum = Number(current);
  if (parsedNum === end || parsedNum === start) {
    if (parsedNum === end && finalDisplayValue) {
      printNum = finalDisplayValue;
    }
  } else {
    printNum = toFixed(parsedNum, decimalPlaces);
  }
  // format the number with commas if the formatNumber prop is true
  if (formatNumber) {
    printNum = addCommas(printNum);
  }

  return <div>{printNum}</div>;
}
