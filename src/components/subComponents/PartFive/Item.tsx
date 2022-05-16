import React from "react";

export default function Item({ data }: any) {
  console.log(data);
  const cardStyle = {
    outer: {
      backgroundImage: "url(" + data.attributes.imageUrl + ")",
      width: "15vw",
      height: "15vw",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column-reverse" as "column-reverse",
    },
    hover: {
      width: "15vw",
      height: "15vw",
      borderRadius: "10px",
      opacity: "0.5",
      position: "absolute" as "absolute",
      background: "linear-gradient(black,white)",
    },
    inner: {
      color: "black",
      fontSize: "2rem",
      zIndex: 1,
    },
    body: {
      margin: "10px",
      color: "black",
      fontSize: "1rem",
      zIndex: 1,
    },
  };
  return (
    <div
      style={{
        boxShadow: "7px 7px 8px black",
        borderRadius: "10px",
        marginBottom: "10px",
      }}
    >
      <div style={cardStyle.outer}>
        <div style={cardStyle.body}>{data?.attributes?.body.slice(0, 50)}</div>
        <div style={cardStyle.inner}>{data?.attributes?.title}</div>
        <div style={cardStyle.hover}></div>
      </div>
    </div>
  );
}
