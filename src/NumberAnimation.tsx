import React, { useState, useEffect } from "react";

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

// function numValues(start: number, end: number, step: number): number {
//   return Math.floor((end - start) / step);
// }

/* React component that animates a number from a start value to an end value 
over a given duration. The number can be randomized for a more organic feel and 
the number of decimal places can be specified. */
export default function NumberAnimation(props: {
  start: number;
  end: number;
  time: number;
  randomize?: boolean;
  decimalPlaces?: number;
}) {
  const { start, end, time, randomize = false, decimalPlaces = 2 } = props;
  const step = calculateStep(start, end, time);
  // const numberSteps = numValues(start, end, step);
  const [current, setCurrent] = useState(start.toString());
  const currNum = Number.parseFloat(current);
  useEffect(() => {
    let intervalId = 0;
    const next = () => {
      const nextValue = nextNumber(start, end, currNum, step, randomize);
      if (nextValue === end || nextValue === start) {
        setCurrent(nextValue.toString());
      } else {
        setCurrent(toFixed(nextValue, decimalPlaces));
      }
      if (nextValue === end) {
        clearInterval(intervalId);
      }
    };
    intervalId = window.setInterval(next, 1000 / stepsPerSecond);
    return () => clearInterval(intervalId);
  }, [current, start, end, time, step, randomize, decimalPlaces, currNum]);
  return <p>{current}</p>;
}
