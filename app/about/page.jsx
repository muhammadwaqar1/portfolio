"use client";
import Image from "next/image";
import React from "react";
import InfoBox from "../(component)/infoBox/infoBox";
import UserLink from "../(component)/userLink/userLink";
import WorkTogether from "../(component)/workTogether/workTogether";
import Heading from "../(component)/heading/heading";
import { motion } from "framer-motion";
function About() {
  return (
    <div className=" md:container md:mx-auto px-5 w-full">
      {/* <----------- Picture ---------> */}
      <div className="lg:flex">
        <div className="flex w-full lg:w-[30%]  justify-center">
          <motion.div
            animate={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.7, opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className=" bg-primary-profileBoxBg  m-4 rounded-3xl p-5 flex justify-end"
          >
            <div className="profileBackground">
              <Image
                src="/images/cat.png"
                width={350}
                height={500}
                alt="Profile image"
                className="rounded-3xl "
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.7, opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="lg:w-[70%]"
        >
          <Heading heading={"SELF-SUMMARY"} />
          <div className="bg-primary-profileBoxBg m-4 rounded-3xl px-5 pt-8 pb-5 lg:py-20 ">
            <p className="text-2xl mb-4"> Muhammad Waqar </p>
            <p className="text-primary-textColor">
              I am a San francisco-based product designer with a focus on web
              design, illustration, a visual development. I have a diverse range
              of experience having worked across various fields and industries.
            </p>
          </div>
        </motion.div>
      </div>
      {/* <-------------Education ---------> */}
      <div className="md:flex ">
        <div className="bg-primary-profileBoxBg m-4 rounded-3xl space-y-6 px-5 py-10 md:w-1/2">
          <h1 className="text-xl">EDUCATION</h1>
          <div className="space-y-1">
            <p className="text-sm text-primary-textColor">
              2018&nbsp;&nbsp;&nbsp;2022
            </p>
            <h1 className="text-xl">Bachelor Degree in Psychology</h1>
            <p className="text-base text-primary-textColor">
              University of California
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-primary-textColor">
              2018&nbsp;&nbsp;&nbsp;2022
            </p>
            <h1 className="text-xl">Master Degree in Designing</h1>
            <p className="text-base text-primary-textColor">
              University of California
            </p>
          </div>
        </div>
        <div className="bg-primary-profileBoxBg m-4 rounded-3xl space-y-6 px-5 py-10 md:w-1/2">
          <h1 className="text-xl">EXPERIENCE</h1>
          <div className="space-y-1">
            <p className="text-sm text-primary-textColor">
              2018&nbsp;&nbsp;&nbsp;2022
            </p>
            <h1 className="text-xl">Framer Designer & Developer</h1>
            <p className="text-base text-primary-textColor">Bluebase Designs</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-primary-textColor">
              2018&nbsp;&nbsp;&nbsp;2022
            </p>
            <h1 className="text-xl">Front-End Developer</h1>
            <p className="text-base text-primary-textColor">Larsen & Toubro</p>
          </div>
        </div>
      </div>
      <div className="lg:flex w-full lg:space-x-5 lg:items-center lg:px-5 px-5 ">
        <div className="lg:w-[30%]">
          <InfoBox
            title="More about me"
            description="Credentials"
            url="/images/sign.png"
          />
        </div>
        <div className="lg:w-[40%]">
          <WorkTogether />
        </div>
        <div className="lg:w-[30%]">
          <UserLink />
        </div>
      </div>
    </div>
  );
}
export default About;
