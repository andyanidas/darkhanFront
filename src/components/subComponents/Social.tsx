import React from "react";

export default function Social() {
  const socialStyle = {
    outer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-around",
      boxShadow: "10px 10px 20px black",
      borderRadius: "20px",
      //   margin: "20px",
      boxSize: "border-box",
      userSelect: "none" as "none",
      flexWrap: "wrap" as "wrap",
      textAlign: "center" as "center",
      alignItems: "center",
      margin: "30px 0px",
      padding: "50px 10px",
    },
    singleItem: {
      fontFamilt: "cursive",
      textDecoration: "none",
      border: "0.3px solid white",
      color: "rgb(247,247,247)",
      borderRadius: "10px",
      padding: "1rem 6rem",
      fontSize: "2.5rem",
      margin: "5px",
      backgroundColor: "rgba(214, 214, 214, 0.1)",
    },
  };
  return (
    <div style={socialStyle.outer}>
      <a
        style={socialStyle.singleItem}
        href={"https://facebook.com/darkhandeed1997"}
      >
        Facebook
      </a>
      <a
        style={socialStyle.singleItem}
        href={"https://instagram.com/darkhandeed1997"}
      >
        Instagram
      </a>
      <a
        style={socialStyle.singleItem}
        href={"https://youtube.com/darkhandeed1997"}
      >
        Youtube
      </a>
    </div>
  );
}
