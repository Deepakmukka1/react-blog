import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Suggestcard from "./Suggestcard";
import { removeNullArticles } from "../utils/removeNull";
import { addingTags } from "../utils/addingTags";

const Suggestions = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const sportsData = await axios.get(
        `https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json`
      );
      const scienceData = await axios.get(
        `https://saurav.tech/NewsAPI/top-headlines/category/science/in.json`
      );
      const technologyData = await axios.get(
        `https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json`
      );

      let sportsArticles = addingTags(sportsData, "Sports");
      let scienceArticles = addingTags(scienceData, "Science");
      let techArticles = addingTags(technologyData, "Technology");
      let articles = [...techArticles, ...sportsArticles, ...scienceArticles];
      articles.length = 10;
      articles = removeNullArticles(articles);
      setArticles(articles);
    };
    fetchData();
  }, []);

  return (
    <div className="flex md:flex-row flex-wrap md:w-2/5 justify-center p-4 h-full font-semibold text-center dark:bg-gray-800 dark:text-gray-200">
      <h2 className="font-bold text-blue-500 md:text-3xl text-2xl underline">
        {" "}
        💡 Suggestions
      </h2>
      {articles.map(
        ({
          content,
          description,
          publishedAt,
          title,
          urlToImage,
          url,
          tags,
        }) => {
          return (
            <Suggestcard
              content={content}
              description={description}
              publishedAt={publishedAt}
              title={title}
              urlToImage={urlToImage}
              tags={tags}
              url={url}
              key={url}
            />
          );
        }
      )}
    </div>
  );
};

export default Suggestions;
