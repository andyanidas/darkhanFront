import React from "react";

export function PartFour({ part2 }: any) {
  const partTwoStyle = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: " 300px",
    height: "300px",
    display: "flex",
    justifyContent: "space-around",
  };
  const partTwoBG = {
    boxShadow: "10px 10px 20px black",
    width: "100%",
    borderRadius: "20px",
    padding: "10px",
  };
  const partTwo1 = {
    backgroundImage: "url("
      .concat(
        part2
          ? part2[0]?.attributes?.imageUrl
            ? part2[0]?.attributes?.imageUrl
            : ""
          : ""
      )
      .concat(")"),
  };
  const partTwo2 = {
    backgroundImage: "url("
      .concat(
        part2
          ? part2[1]?.attributes?.imageUrl
            ? part2[1]?.attributes?.imageUrl
            : ""
          : ""
      )
      .concat(")"),
  };
  const partTwo3 = {
    backgroundImage: "url("
      .concat(
        part2
          ? part2[2]?.attributes?.imageUrl
            ? part2[2]?.attributes?.imageUrl
            : ""
          : ""
      )
      .concat(")"),
  };
  const part2Style = [
    { ...partTwoStyle, ...partTwo1 },
    { ...partTwoStyle, ...partTwo2 },
    { ...partTwoStyle, ...partTwo3 },
  ];
  return (
    // <ThemeProvider>
    <div className="part-two d-flex flex-wrap w-100" style={partTwoBG}>
      <div style={part2Style[0]}>
        <div className="flex-column">
          <h1>{part2 && part2[0]?.attributes?.body}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            architecto assumenda perspiciatis neque non, itaque optio vero
            blanditiis! Ratione, deleniti!
          </p>
        </div>
      </div>
      <div style={part2Style[1]}>
        <div className="flex-column">
          <h1>{part2 && part2[1]?.attributes?.body}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            architecto assumenda perspiciatis neque non, itaque optio vero
            blanditiis! Ratione, deleniti!
          </p>
        </div>
      </div>
      <div style={part2Style[2]}>
        <div className="flex-column">
          <h1>{part2 && part2[2]?.attributes?.body}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            architecto assumenda perspiciatis neque non, itaque optio vero
            blanditiis! Ratione, deleniti!
          </p>
        </div>
      </div>
    </div>
    // </ThemeProvider>
  );
}
