import React, { useState } from "react";

export default function Item({ data }: any) {
  const [hover, setHover] = useState(false);
  const cardStyle = {
    outer: {
      backgroundImage: "url(" + data.attributes.imageUrl + ")",
      width: hover ? "20vw" : "15vw",
      height: "15vw",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column-reverse" as "column-reverse",
      cursor: "pointer",
      transition: "width .3s ease-in-out",
    },
    hover: {
      width: hover ? "20vw" : "15vw",
      height: "15vw",
      borderRadius: "10px",
      opacity: "1",
      position: "absolute" as "absolute",
      // background: "linear-gradient(white,black)",

      background: "linear-gradient(rgba(255,255,255,0) , rgba(0,0,0,1))",
      transition: "width .3s ease-in-out",
    },
    inner: {
      color: "white",
      fontSize: "2rem",
      zIndex: 1,
      textShadow: "1px 1px 7px white",
    },
    body: {
      margin: "10px",
      color: "white",
      fontSize: "1rem",
      zIndex: 1,
      textShadow: "1px 1px 7px white",
    },
  };
  return (
    <div
      style={{
        boxShadow: "7px 7px 8px black",
        borderRadius: "10px",
        marginBottom: "10px",
      }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div style={cardStyle.outer}>
        <div style={cardStyle.body}>
          {data?.attributes?.body.slice(0, 50)}...
        </div>
        <div style={cardStyle.inner}>{data?.attributes?.title}</div>
        <div style={cardStyle.hover}></div>
      </div>
    </div>
  );
}
