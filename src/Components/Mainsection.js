import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
const Mainsection = () => {
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  useEffect(async()=>{

    const apiData=await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3823a878fa644eefa7c3a0a4712e6dbd')
    const articles=apiData.data.articles;
    console.log(articles)
    setArticles(articles)

  },[])
  // const articles = new Array(9);

  return (
    <div className="bg-blue-100 border-gray-900 flex flex-wrap flex-col flex-grow justify-center md:w-3/5 p-4 font-semibold text-center h-auto dark:bg-gray-800 dark:text-gray-200">
      
      <h2 className="font-bold text-blue-500 md:text-3xl text-2xl underline"> 🔥 Trending</h2>
      {articles.map(({content,description,publishedAt,title,urlToImage})=>{
        return <Card content={content} description={description} publishedAt={publishedAt} title={title} urlToImage={urlToImage}/>
      })}
    </div>
  );
};

export default Mainsection;
