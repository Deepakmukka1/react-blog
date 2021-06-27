import React from 'react'


const Suggestcard = ({content,description,publishedAt,title,urlToImage,url}) => {
    
    return (
        <div className="outline-none bg-blue-200 flex h-auto flex-col justify-between items-center p-8 rounded-lg cursor-pointer dark:bg-gray-900 m-4">
            <div className="w-4/5">
                <img src={urlToImage}/>
            </div>
            <div className="w-4/5 mt-4">
               <h2 className="font-bold md:text-xl text-lg mb-2 text-blue-500">{title}</h2>
               <h2 className="mb-2 font-semibold md:text-base">{description}</h2>
            
            </div>
            
        </div>
    )
}

export default Suggestcard
