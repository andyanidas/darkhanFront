import React from "react";
import NewsCard from "../NewsCard";
import { News } from "../../types";

export function PartFive({ data }: any) {
  const styles = {
    container: {
      marginTop: "10vh",
      marginBottom: "10vh",
      boxShadow: "10px 10px 20px black",
      padding: " 40px",
      borderRadius: "20px",
      textAlign: "center" as "center",
      p: {
        color: "green",
      },
    },
    header: {
      backgroundColor: " rgba(50, 49, 111, 0.321)",
      height: "40px",
      width: "300px",
      borderRadius: "30px",
      textAlign: "center" as "center",
    },
    items: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    p: {
      color: "green",
    },
  };
  return (
    <div style={styles.container}>
      <p>МЭДЭЭ</p>
      <h2>СОНИН САЙХАН</h2>
      <div style={styles.items}>
        {data?.data.slice(0, 4).map((data: News) => (
          <NewsCard key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}
