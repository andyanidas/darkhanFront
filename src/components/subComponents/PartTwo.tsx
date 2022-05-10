import React from "react";

export function PartTwo({ part1 }: any) {
  return (
    <div className="d-flex align-items-center mt-4">
      <div>
        <h1 className="font-weight-bold text-uppercase ms-4">
          {part1 && part1?.attributes["title"]}
        </h1>
        <p>{part1 && part1?.attributes["body"]}</p>
      </div>
      <img src="./pictures/back-to-school.png" alt="" className="w-30" />
    </div>
  );
}
