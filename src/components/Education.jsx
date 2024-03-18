import React from "react";
import { education } from "../data";

const Education = () => {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <i className="fa-solid text-6xl text-[#F95054] fa-graduation-cap"></i>
        <h4 className="text-[1.625rem] dark:text-white font-medium">
          Education
        </h4>
      </div>
      {education.map((item) => {
        return (
          <div
            key={item.id}
            className="bg-[#fff4f4] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2"
          >
            <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
              {item.year}
            </span>
            <h3 className="text-xl dark:text-white">{item.course}</h3>
            <p className="dark:text-[#b7b7b7]">{item.college}</p>
          </div>
        );
      })}
      {/* <div className="bg-[#fff4f4] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
        <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
          2021-2023
        </span>
        <h3 className="text-xl dark:text-white">Ph.D in Horriblensess</h3>
        <p className="dark:text-[#b7b7b7]">ABC University, Los Angeles, CA</p>
      </div>
      <div className="bg-[#fff1fb] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg mb-6 dark:border-[#212425] dark:border-2">
        <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
          2019 - Present
        </span>
        <h3 className="text-xl dark:text-white">Sr. Software Tester</h3>
        <p className="dark:text-[#b7b7b7]">Google Inc.</p>
      </div>
      <div className="py-4 pl-5 bg-[#fff4f4] dark:bg-transparent pr-3 space-y-2 rounded-lg dark:border-[#212425] dark:border-2">
        <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
          2021
        </span>
        <h3 className="text-xl dark:text-white">Best Developer</h3>
        <p className="dark:text-[#b7b7b7]">University Of Melbourne, NA</p>
      </div> */}
    </div>
  );
};

export default Education;
