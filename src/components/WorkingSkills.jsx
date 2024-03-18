import React from "react";
import { currentSkills } from "../data";

const WorkingSkills = () => {
  return (
    <div className="col-span-1">
      <h4 className="text-[1.625rem] dark:text-white font-medium mb-6">
        Working Skills
      </h4>
      {currentSkills.map((item) => {
        return (
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-[#526377] dark:text-[#A6A6A6]">
                {item.skill}
              </span>
              <span className="font-semibold text-[#526377] dark:text-[#A6A6A6">
                {item.percentage}%
              </span>
            </div>
            <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
              <div
                className="bg-[#FF6464] h-1 rounded-full"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        );
      })}
      {/* <div className="mb-5">
        <div className="flex justify-between mb-1">
          <span className="font-semibold text-[#526377] dark:text-[#A6A6A6]">
            Web Design
          </span>
          <span className="font-semibold text-[#526377] dark:text-[#A6A6A6">
            65%
          </span>
        </div>
        <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
          <div className="bg-[#FF6464] h-1 rounded-full" style="width: 65%"></div>
        </div>
      </div>

      <div className="mb-5">
        <div className="flex justify-between mb-1">
          <span className="font-semibold text-[#526377] dark:text-[#A6A6A6]">
            Mobile App
          </span>
          <span className="font-semibold text-[#526377] dark:text-[#A6A6A6">
            85%
          </span>
        </div>
        <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
          <div className="bg-[#9272d4] h-1 rounded-full" style="width: 85%"></div>
        </div>
      </div>

      <div className="mb-5">
        <div className="flex justify-between mb-1">
          <span className="font-semibold text-[#526377] dark:text-[#A6A6A6]">
            Illustrator
          </span>
          <span className="font-semibold text-[#526377] dark:text-[#A6A6A6">
            75%
          </span>
        </div>
        <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
          <div className="bg-[#5185d4] h-1 rounded-full" style="width: 75%"></div>
        </div>
      </div>

      <div className="mb-5">
        <div className="flex justify-between mb-1">
          <span className="font-semibold text-[#526377] dark:text-[#A6A6A6]">
            Photoshope
          </span>
          <span className="font-semibold text-[#526377] dark:text-[#A6A6A6">
            90%
          </span>
        </div>
        <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
          <div className="bg-[#ca56f2] h-1 rounded-full" style="width: 90%"></div>
        </div>
      </div> */}
    </div>
  );
};

export default WorkingSkills;
