"use client";

import classes from "@/app/testu2/page.module.css";
import { useState } from "react";

const squares = [
  { id: 1, color: "lightblue" },
  { id: 2, color: "lightcoral" },
  { id: 3, color: "lightgreen" },
  { id: 4, color: "lightyellow" },
];

export default function Testu2Page() {
  const [activeSquare, setActiveSquare] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);

  const handleNext = () => {
    if (activeSquare !== squares.length - 1) {
      setActiveSquare((prevActiveSquare) => prevActiveSquare + 1);
      setScrollOffset((prevOffset) => prevOffset - 40);
    }
  };

  const handlePrevious = () => {
    if (activeSquare !== 0) {
      setActiveSquare((prevActiveSquare) => prevActiveSquare - 1);
      setScrollOffset((prevOffset) => prevOffset + 40);
    }
  };

  return (
    <div className={classes.showroom}>
      <button className={classes.previous} onClick={handlePrevious}>
        Previous
      </button>
      <div className={classes["content"]}>
        <div
          className={`${classes["scroll-list"]}`}
          style={{
            transform: `translateX(${scrollOffset}rem)`,
          }}
        >
          {squares.map((square) => (
            <div
              key={square.id}
              className={`${classes.square} `}
              style={{ backgroundColor: square.color }}
            ></div>
          ))}
        </div>
      </div>

      <button className={classes.next} onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
