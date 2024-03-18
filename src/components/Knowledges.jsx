import React from "react";
import { knowledges } from "../data";

const Knowledges = () => {
  return (
    <div className="col-span-1">
      <h4 className="text-[1.625rem] dark:text-white font-medium mb-8">
        Knowledges
      </h4>
      <div className="flex gap-y-5 gap-x-2.5 flex-wrap">
        {knowledges.map((item) => {
          return (
            <button key={item.id} className="resume-btn">
              {item.skill}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Knowledges;
