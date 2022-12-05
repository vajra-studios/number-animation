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
  end?: number;
  time: number;
  speed?: number;
  randomize?: boolean;
  decimalPlaces?: number;
  onReset?: boolean; // prop to receive callback
}) {
  const {
    start,
    end = Number.MAX_SAFE_INTEGER,
    time,
    speed,
    randomize = false,
    decimalPlaces = 0,
    onReset, // receive callback from App component
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
  } else {
    printNum = toFixed(parsedNum, decimalPlaces);
  }
  return <p>{printNum}</p>;
}
