import "./temp.css";
import {
  AnimateSharedLayout,
  AnimatePresence,
  LayoutGroup,
} from "framer-motion";
import { Routes, Route } from "react-router-dom";

import { Header } from "./Header";
import Item from "./Item";
// import { List } from "./List";
import { useNews } from "../../../contexts/NewsContext";

// function Store({ match }) {
//   let { id } = match.params;
//   const imageHasLoaded = true;

//   return (
//     <LayoutGroup>
//       {/* <List selectedId={id} /> */}
//       <AnimatePresence>
//         {id && imageHasLoaded && <Item id={id} key="item" />}
//       </AnimatePresence>
//     </LayoutGroup>
//   );
// }
export function PartFive({ data }) {
  console.log(data);
  const styles = {
    outer: {
      marginTop: "10vh",
      marginBottom: "10vh",
      boxShadow: "10px 10px 20px black",
      padding: " 40px",
      borderRadius: "20px",
      textAlign: "center",
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      marginTop: "20px",
    },
    item: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  };
  return (
    <div style={styles.outer}>
      <Header />
      <div style={styles.container}>
        {data.slice(0, 4).map((news) => {
          return <Item data={news} />;
        })}
      </div>
    </div>
  );
}
