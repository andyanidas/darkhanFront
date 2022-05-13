import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/news.css";
import { LayoutGroup, motion } from "framer-motion";
import "./temp.css";
import { useNews } from "../contexts/NewsContext";
import { Container } from "react-bootstrap";
import Loading from "./Loading";

export default function NewsComponent() {
  const { loading, error, data } = useNews();
  const [selectedId, setSelectedId] = useState("1");
  useEffect(() => {
    setSelectedId(data ? data[0]?.id : "1");
  }, [data]);
  if (loading) return <Loading />;
  if (error) return <>Error</>;

  return (
    <LayoutGroup>
      <Container>
        <motion.div layoutId="modal">
          <motion.ul className="card-list">
            {data?.data.map((news: any) => (
              <Card
                key={news.id}
                {...news}
                isSelected={news.id === selectedId}
              />
            ))}
          </motion.ul>
        </motion.div>
      </Container>
    </LayoutGroup>
  );
}

function Card({ id, attributes }: any) {
  return (
    <li className={`card ${attributes.title}`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={attributes.imageUrl} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <h2>{attributes?.title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={`${id}`} className={`card-open-link`} />
    </li>
  );
}
