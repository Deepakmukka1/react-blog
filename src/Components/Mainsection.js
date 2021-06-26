import React from "react";
import Card from "./Card";
const Mainsection = () => {
  const articles = new Array(9);
  return (
    <div className="bg-blue-100 border-gray-900 flex flex-wrap flex-col flex-grow justify-center md:w-3/5 p-4 font-semibold text-center h-auto dark:bg-gray-800 dark:text-gray-200">
      
      <h2 className="font-extrabold text-blue-700 text-4xl">Trending</h2>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Mainsection;
