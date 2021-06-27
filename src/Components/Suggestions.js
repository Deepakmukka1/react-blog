import React from 'react'
// import Suggestcard from
import { useEffect,useState } from 'react'
import axios from 'axios'
import Suggestcard from './Suggestcard'

const Suggestions = () => {
    const [articles,setArticles]=useState([])
    useEffect(()=>{
       
      
      const fetchData=async()=>{
       
        const apiData=await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json`);
        let articles=apiData.data.articles;
        articles.length=5;
        articles=articles.filter((article)=>{
          return article.urlToImage!=null 
        })
        console.log(articles)
        setArticles(articles)
      }
      fetchData();
  
    },[])

    return (
        <div className="flex md:flex-row flex-wrap md:w-2/5 justify-center p-4 h-full font-semibold text-center dark:bg-gray-800 dark:text-gray-200">
            
          {articles.map(({content,description,publishedAt,title,urlToImage,url})=>{
              return <Suggestcard content={content} description={description} publishedAt={publishedAt} title={title} urlToImage={urlToImage} url={url} key={url}/>
          })}
            
           
            
            
        </div>
    )
}

export default Suggestions
