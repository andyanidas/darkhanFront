import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./major.css";
const items = ["Багш", "Шинжлэх ухаан", "Урлаг Спорт"];

export function MajorSection() {
  return (
    <div>
      <header>
        <span>Бидний Таньд Сургах</span>
        <h1> Мэргэжилүүд</h1>
        <div className="avatar">
          <img src="./images/icons/main_logo.png" alt="" />
        </div>
      </header>
      <AnimateSharedLayout>
        <motion.ul layout initial={{ borderRadius: 25 }}>
          {items.map((item, index) => (
            <Item key={index} data={item} />
          ))}
        </motion.ul>
      </AnimateSharedLayout>
    </div>
  );
}

function Item(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const listStyle = {
    item: {
      backgroundColor: "rgba(214, 214, 214, 0.5)",
      borderRadius: "10px",
      padding: "20px",
      marginBottom: "20px",
      overflow: "hidden",
      cursor: "pointer",
    },
  };
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li
      layout
      onClick={toggleOpen}
      initial={{ borderRadius: 10 }}
      style={listStyle.item}
    >
      <motion.div layout />
      <p style={{ color: "white" }}>{props.data}</p>
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.li>
  );
}

function Content() {
  const rowStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: " #999",
    borderRadius: " 10px",
    marginTop: "12px",
  };
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={rowStyle}>
        <img src="./pictures/back.png" alt="" />
        <p style={{ color: "white" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          totam assumenda dolorum exercitationem rerum facere accusantium?
          Sequi, recusandae aliquam, fugit accusantium aperiam, veniam harum
          repellendus sunt cum amet iste dicta minima perspiciatis laudantium!
          Corporis nostrum veritatis accusantium nihil animi? Architecto
          repudiandae inventore maxime ducimus velit cupiditate explicabo, hic
          debitis sunt voluptas accusantium itaque! Sit molestias magnam
          debitis, necessitatibus non inventore amet officiis vitae eaque
          reprehenderit assumenda velit totam atque harum voluptas, error qui
          aliquid rem nesciunt doloribus! Earum non repellat fuga, ex sapiente
          nihil? Eius autem deleniti iure error. Nemo modi iste nam aperiam est
          odio at reiciendis deleniti ratione.
        </p>
      </div>
    </motion.div>
  );
}
