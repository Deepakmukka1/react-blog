/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { whatsAppShare } from "../utils/share";
import Sharebutton from "./Sharebutton";
// import Sharebutton from "./Sharebutton";

const Suggestcard = ({
  content,
  description,
  publishedAt,
  title,
  urlToImage,
  url,
  tags
}) => {
  const messageURL=whatsAppShare(title,url)
  return (
    <div
      className="outline-none bg-blue-200 flex h-auto flex-col justify-between items-center p-8 rounded-lg dark:bg-gray-900 m-4"
    >
      <div className="w-40 bg-blue-500 md:-top-8 md:left-2 relative text-center leading-10 text-gray-50 transform">{tags}</div>
      <div className="rounded-lg md:w-3/5 w-full">
        <img
          src={urlToImage}
          className="md:h-auto rounded-sm float-right ml-5 w-full"
          alt="thumbanil"
        />
      </div>
      <div className="w-5/6 mt-4">
        <h2 className="font-bold md:text-xl text-lg mb-2 text-blue-500 cursor-pointer"  onClick={() => {
        window.open(url, "_blank");
      }}>
          {title}
        </h2>
        <h2 className="mb-2 font-semibold md:text-base">{description}</h2>
        <h2 className="mt-2">
          {/* <span className="px-5 font-semibold text-sm bg-blue-500 text-white rounded-full py-3 mr-4">
            Tags
          </span>
          <span className="px-5 font-semibold text-sm bg-blue-500 text-white rounded-full py-3">
            {tags}
          </span> */}
          <Sharebutton messageURL={messageURL}/>
        </h2>
      </div>
    </div>
  );
};

export default Suggestcard;
