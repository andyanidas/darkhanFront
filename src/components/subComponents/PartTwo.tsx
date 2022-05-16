import React from "react";

export function PartTwo({ part1 }: any) {
  const aboutStyle = {
    outer: {
      display: "flex",
      alignItems: "center",
      margin: "10px 0px",
    },
    inner: {
      fontWeight: "bold",
      textTransform: "uppercase" as "uppercase",
      textShadow: "0.5px 0.5px 200px black",
      color: "#eff8fe",
      marginBottom: "30px",
    },
    body: {
      textAlign: "justify" as "justify",
      color: "#eff8fe",
      marginRight: "50px",
      textShadow: "0.5px 0.5px 50px black",
    },
  };
  return (
    <div style={aboutStyle.outer}>
      <div>
        <h1 style={aboutStyle.inner}>{part1 && part1?.attributes["title"]}</h1>
        <p style={aboutStyle.body}>{part1 && part1?.attributes["body"]}</p>
      </div>
      <img src="./pictures/back.png" alt="" className="w-30" />
    </div>
  );
}
