import React from "react";

const Card = ({content,description,publishedAt,title,urlToImage}) => {
  return (
    <div>
      <div className="bg-blue-200 flex xl:flex-row flex-col justify-between items-center p-8 rounded-lg cursor-pointer dark:bg-gray-900 m-4">
        {/* md:flex-row flex-col */}
        <div className="flex flex-col md:w-3/5 w-full text-base md:text-base xl:text-xl text-left p-4 order-last md:order-1 xl:order-1 ">
          <h2 className="font-bold md:text-xl text-lg mb-2 ">{title}</h2>
          <h4 className="mb-2 font-semibold md:text-base">{description}</h4>
          <h4 className="font-semibold md:text-base">Published at : {publishedAt} </h4>
        </div>
        <div className="rounded-lg md:w-2/5 xl:order-1 w-full">
          <img
            src={urlToImage}
            className="md:h-auto rounded-sm float-right ml-5 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
