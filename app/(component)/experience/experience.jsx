import React from "react";

const array = [
  {
    number: "10",
    year: "YEARS",
    experience: "EXPERIENCE",
  },
  {
    number: "+125",
    year: "CLIENT",
    experience: "WORLDWIDE",
  },
  {
    number: "+210",
    year: "TOTAL",
    experience: "PROJECT",
  },
];

function Experience() {
  return (
    <div className="bg-primary-profileBoxBg w-full  rounded-xl p-4 space-y-4 md:space-y-0 md:flex md:space-x-4 md:items-center md:justify-center">
      {array.map((item) => {
        return (
          <div className="bg-primary-secondBlack w-full h-[150px] rounded-xl flex justify-center items-center flex-col">
            <h1 className="text-3xl mb-5">{item.number}</h1>
            <p className="text-xs text-primary-textColor mb-2">{item.year}</p>
            <p className="text-xs text-primary-textColor">{item.experience}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Experience;
