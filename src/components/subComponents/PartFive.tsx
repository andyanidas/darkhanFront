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
    },
    header: {
      margin: "20px",
    },
    items: {
      height: "100%",
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
      <div style={styles.header}>
        <p>МЭДЭЭ</p>
        <h2>СОНИН САЙХАН</h2>
      </div>

      <div style={styles.items}>
        {data?.data.slice(0, 4).map((data: News) => (
          <NewsCard key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}
