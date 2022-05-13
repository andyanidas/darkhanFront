import React, { useState } from "react";
import NewsCard from "../../NewsCard";
import { News } from "../../../types";
import "./temp.css";
import {
  AnimateSharedLayout,
  motion,
  AnimatePresence,
  LayoutGroup,
} from "framer-motion";
import { Routes, Link, Route } from "react-router-dom";

import { Header } from "./Header";
import { Item } from "./Item";
import { List } from "./List";

function Store({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <LayoutGroup>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </LayoutGroup>
  );
}
export function PartFive({ data }) {
  const styles = {
    container: {
      marginTop: "10vh",
      marginBottom: "10vh",
      boxShadow: "10px 10px 20px black",
      padding: " 40px",
      borderRadius: "20px",
      textAlign: "center",
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
    <AnimateSharedLayout type="crossfade">
      <Header />
      <Routes>
        <Route to="/:id" element={<Store />} />
      </Routes>
    </AnimateSharedLayout>
  );
}
