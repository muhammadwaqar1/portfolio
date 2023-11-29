import React from "react";
import Project from "../(component)/projects/project";
import Heading from "../(component)/heading/heading";

function Work() {
  return (
    <div className=" md:container md:mx-auto mx-0 px-5 ">
      <div className="md:flex md:flex-row flex flex-col-reverse w-full">
        <div className=" md:w-[35%] w-full ">
          <Project />
          <Project />
        </div>
        <div className="md:w-[65%] w-full">
          <Heading heading={"ALL PROJECTS"} />
          <div className="md:flex">
            <Project />
            <Project />
          </div>
          <div className="md:flex">
            <Project />
            <Project />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
