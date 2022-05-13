import { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "../customHooks/useFetch";

const NewsContext = createContext<any>([]);

export function useNews() {
  return useContext(NewsContext);
}

export default function NewsProvider(props: any) {
  const { loading, error, data } = useFetch("posts");
  return (
    <NewsContext.Provider value={{ loading, error, data }}>
      {props.children}
    </NewsContext.Provider>
  );
}
