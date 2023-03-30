import React from "react";
import CardData from "./CardData";

const Card = (props) => {
  return (
    <>
      {props.details.map((value, index) => (
        <div
          key={index}
          className="w-36 md:w-48 lg:w-60 ml-5 mb-5 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
        >
          <img className="rounded-t-lg" src={value.img} alt="" />
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 sm:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {value.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {value.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
