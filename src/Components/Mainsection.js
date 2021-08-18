import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { removeNullArticles } from "../utils/removeNull";

const Mainsection = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    

    const fetchData = async () => {
      const apiData = await axios.get(
        `https://saurav.tech/NewsAPI/everything/cnn.json`
      );
      let articles = apiData.data.articles;
      articles.length = 17;
      articles = removeNullArticles(articles);
      setArticles(articles);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-blue-100 border-gray-900 flex flex-wrap flex-col flex-grow justify-start md:w-3/5 p-4 font-semibold text-center h-auto dark:bg-gray-800 dark:text-gray-200">
      <h2 className="font-bold text-blue-500 md:text-3xl text-2xl underline">
        {" "}
        📰 Trending news
      </h2>
      {articles.map(
        ({ content, description, publishedAt, title, urlToImage, url }) => {
          return (
            <Card
              content={content}
              description={description}
              publishedAt={publishedAt}
              title={title}
              urlToImage={urlToImage}
              url={url}
              key={url}
            />
          );
        }
      )}
    </div>
  );
};

export default Mainsection;
