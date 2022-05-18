import React from "react";
import { motion } from "framer";

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
    <motion.div style={socialStyle.outer}>
      <motion.a
        style={socialStyle.singleItem}
        href={"https://facebook.com/darkhandeed1997"}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Facebook
      </motion.a>
      <motion.a
        style={socialStyle.singleItem}
        href={"https://instagram.com/darkhandeed1997"}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Instagram
      </motion.a>
      <motion.a
        style={socialStyle.singleItem}
        href={"https://youtube.com/darkhandeed1997"}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Youtube
      </motion.a>
    </motion.div>
  );
}
