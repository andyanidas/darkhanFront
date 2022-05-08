import { createContext, useContext, useEffect, useState } from "react";
import { functions } from "../init-firebase";
interface News {
  title: string;
  body: string;
  images: [];
}
const NewsContext = createContext<News[] | undefined>([]);

export function useNews() {
  return useContext(NewsContext);
}

export default function NewsProvider(props: any) {
  const [news, setNews] = useState<News[]>([]);
  useEffect(() => {
    functions
      .getAllNews()
      .then((querySnapshot) => {
        let newsData: News[] = [];
        querySnapshot.forEach((doc) => {
          // const gsReference = ref(getStorage(), doc.data().image[0]);
          // getDownloadURL(gsReference).then((e) => {
          //   console.log("image url = ", e);
          // });
          newsData.push({
            title: doc.data().title,
            body: doc.data().body,
            images: doc.data().image,
          });
        });
        return newsData;
      })
      .then((data) => {
        setNews(data);
      });
  }, []);
  return (
    <NewsContext.Provider value={news}>{props.children}</NewsContext.Provider>
  );
}
