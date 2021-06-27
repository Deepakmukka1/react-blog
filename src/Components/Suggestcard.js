import React from "react";

const Suggestcard = ({
  content,
  description,
  publishedAt,
  title,
  urlToImage,
  url,
}) => {
  return (
    <div className="outline-none bg-blue-200 flex h-auto flex-col justify-between items-center p-8 rounded-lg cursor-pointer dark:bg-gray-900 m-4"
    onClick={()=>{
        window.location.href=url;
    }}
    >
      <div className="w-3/5">
        <img src={urlToImage} className="rounded-lg" />
      </div>
      <div className="w-5/6 mt-4">
        <h2 className="font-bold md:text-xl text-lg mb-2 text-blue-500">
          {title}
        </h2>
        <h2 className="mb-2 font-semibold md:text-base">{description}</h2>
        <h2 className="mt-10">
         <span class="px-5 font-semibold text-sm bg-blue-500 text-white rounded-full py-3 mr-4">
            Tags
          </span>
          <span class="px-5 font-semibold text-sm bg-blue-500 text-white rounded-full py-3">
            Sports
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Suggestcard;
