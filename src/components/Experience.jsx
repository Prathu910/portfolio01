import React from "react";
import { experience } from "../data";

const Experience = () => {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <i className="fa-solid text-6xl text-[#F95054] fa-briefcase"></i>
        <h4 className="text-[1.625rem] dark:text-white font-medium">
          Experience
        </h4>
      </div>
      {experience.map((item) => {
        return (
          <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg bg-[#eef5fa] dark:bg-transparent dark:border-[#212425] dark:border-2">
            <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
              {item.year}
            </span>
            <h3 className="text-xl dark:text-white">{item.role}</h3>
            <p className="dark:text-[#b7b7b7]">{item.company}</p>
          </div>
        );
      })}
      {/* <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg bg-[#eef5fa] dark:bg-transparent dark:border-[#212425] dark:border-2">
        <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
          2017-2021
        </span>
        <h3 className="text-xl dark:text-white">Computer Science</h3>
        <p className="dark:text-[#b7b7b7]">Imperialize Technical Institute</p>
      </div>
      <div className="bg-[#f2f4ff] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg mb-6 dark:border-[#212425] dark:border-2">
        <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
          2015-2017
        </span>
        <h3 className="text-xl dark:text-white">Cr. Web Developer</h3>
        <p className="dark:text-[#b7b7b7]">ib-themes ltd.</p>
      </div>
      <div className="py-4 bg-[#eef5fa] dark:bg-transparent pl-5 pr-3 space-y-2 rounded-lg dark:border-[#212425] dark:border-2">
        <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
          2008
        </span>
        <h3 className="text-xl dark:text-white">Best Writter</h3>
        <p className="dark:text-[#b7b7b7]">Online Typodev Soluation Ltd.</p>
      </div> */}
    </div>
  );
};

export default Experience;
