"use client";
import React from "react";
import Project from "../(component)/projects/project";
import Heading from "../(component)/heading/heading";
import { motion } from "framer-motion";
function Work() {
  return (
    <div className=" md:container md:mx-auto mx-0 px-5 ">
      <div className="md:flex md:flex-row flex flex-col-reverse w-full">
        <motion.div
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.7, opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className=" md:w-[35%] w-full "
        >
          <Project />
          <Project />
        </motion.div>
        <div className="md:w-[65%] w-full">
          <Heading heading={"ALL PROJECTS"} />
          <motion.div
            animate={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.7, opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="md:flex"
          >
            <Project />
            <Project />
          </motion.div>
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
