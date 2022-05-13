import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LoremIpsum } from "react-lorem-ipsum";
import { Link, useParams } from "react-router-dom";
import { useNews } from "../../contexts/NewsContext";

export default function Item() {
  const { id } = useParams();
  const { loading, error, data } = useNews();
  const [selectedNews, setSelectedNews] = useState();
  useEffect(() => {
    setSelectedNews(data?.data.find((item) => item.id === parseInt(id)));
  }, [data]);

  if (loading) return <>Loading...</>;
  if (error) return <>Error...</>;
  return (
    <div style={{ height: "min(75vh)" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link to="/news" />
      </motion.div>
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img
              className="card-image"
              src={selectedNews?.attributes.imageUrl}
              alt=""
            />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{selectedNews?.attributes.title}</span>
            <h2>{selectedNews?.attributes.title}</h2>
          </motion.div>
          <motion.div className="content-container" animate>
            <LoremIpsum
              p={6}
              avgWordsPerSentence={6}
              avgSentencesPerParagraph={4}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
