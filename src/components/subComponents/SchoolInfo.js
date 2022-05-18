import { motion } from "framer";
import { useEffect, useState } from "react";
import { useContent } from "../../contexts/Content";

export default function SchoolInfo() {
  const contents = useContent();
  const [infos, setInfos] = useState([]);
  const [selected, setSelected] = useState({});
  const [eleTest, setEleTest] = useState();
  useEffect(() => {
    setInfos(contents?.filter((content) => content.attributes.name === "info"));
  }, [contents]);
  useEffect(() => {
    setSelected(infos ? infos[0] : {});
  }, [infos]);
  // let eleTest;
  // if (isOpen) {
  //   animate = shouldReduceMotion ? { opacity: 1 } : { x: 0 }
  // } else {
  //   animate = shouldReduceMotion
  //     ? { opacity: 0 }
  //     : { x: "-100%" }
  // }
  const style = {
    outer: {
      boxShadow: "3px 3px 10px black",
      paddingTop: "50px",
      borderRadius: "10px",
    },
    ul: {
      listStyle: "none",
      margin: "0",
      padding: "0",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      width: "280px",
      height: "280px",
    },
    li: {
      display: "block",
      padding: "5px",
      width: "230px",
      fontSize: "20px",
      height: "40px",
      borderRadius: "5px",
      margin: "20px",
      position: "relative",
      cursor: "pointer",
      flexShrink: "0",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    outline: {
      position: "absolute",
      top: "-10px",
      left: "-10px",
      right: "-10px",
      bottom: "-10px",
      border: "3px solid white",
      borderRadius: "5px",
    },
    image: {
      width: "50%",
      borderRadius: "10px",
      margin: "20px",
      float: "left",
    },
    text: {
      marginTop: "20px",
      marginRight: "20px",
      marginBottom: "20px",
    },
  };

  useEffect(() => {
    setEleTest(
      <motion.div
        className="col-9"
        // animate={animate}
        animate={{ x: [0, 200, 0] }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <img src={selected?.attributes?.imageUrl} alt="" style={style.image} />
        <p style={style.text}>{selected?.attributes?.body}</p>
      </motion.div>
    );
  }, [selected, style.image, style.text]);

  return (
    <div className="row" style={style.outer}>
      <div className="col-3">
        <motion.ul style={style.ul}>
          {infos?.map((info, i) => (
            <motion.li
              key={i}
              style={style.li}
              onClick={() => setSelected(info)}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.p>{info.attributes.title}</motion.p>
              {info === selected && (
                <motion.div
                  layoutId="outline"
                  style={style.outline}
                  initial={false}
                  animate={{ borderColor: "rgba(255, 255, 255, 0.29)" }}
                  transition={{
                    type: "Spring",
                    stiffness: 200,
                    damping: 30,
                  }}
                />
              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      {eleTest}
    </div>
  );
}
