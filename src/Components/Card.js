/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { whatsAppShare } from "../utils/share";
import Sharebutton from "./Sharebutton";
// import Icon from "../Resources/whatsapp.svg"



const Card = ({ description, publishedAt, title, urlToImage, url }) => {
  const messageURL=whatsAppShare(title,url)
  const parsedDate = new Date(publishedAt).toUTCString().substr(0, 17);
  return (
    <div>
      <div className="outline-none bg-blue-200 flex xl:flex-row flex-col justify-between items-center p-8 rounded-lg dark:bg-gray-900 m-4">
        <div className="flex flex-col md:w-4/5 w-full text-base md:text-base xl:text-xl text-left p-4 order-last md:order-1 xl:order-1 ">
          <h2
            className="font-bold md:text-xl text-lg mb-2 text-blue-500 cursor-pointer"
            onClick={() => {
              window.open(url, "_blank").focus();
            }}
          >
            {title}
          </h2>
          <h4 className="mb-2 font-semibold md:text-base">{description}</h4>
          <h4 className="font-bold md:text-base pt-2">
            Published on : {parsedDate}{" "}
          </h4>
          <Sharebutton messageURL={messageURL}/>
        </div>
        <div className="rounded-lg md:w-2/5 xl:order-1 w-full bg-purple-800">
          <img
            alt="thumbnail"
            src={urlToImage}
            className="md:h-full rounded-sm float-right ml-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
