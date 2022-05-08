import { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "../customHooks/useFetch";

interface Content {
  id: number;
  attributes: {
    body: string;
    createdAt: Date;
    publishedAt: Date;
    title: string;
    updatedAt: Date;
  };
}
const ContentContext = createContext<Content[]>([]);

export function useContent() {
  return useContext(ContentContext);
}

export default function ContentProvider(props: any) {
  const [contents, setContents] = useState<Content[]>([]);
  const { data } = useFetch("contents");
  useEffect(() => {
    setContents(data?.data);
  }, [data]);
  return (
    <ContentContext.Provider value={contents}>
      {props.children}
    </ContentContext.Provider>
  );
}
