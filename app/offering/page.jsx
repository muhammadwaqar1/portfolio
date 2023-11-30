import React from "react";
import Social from "../(component)/social/social";
import Form from "../(component)/form/form";
import SocialIcon from "../(component)/socialIcon/socialIcon";
import Image from "next/image";
import Heading from "../(component)/heading/heading";
import InfoBox from "../(component)/infoBox/infoBox";
import Link from "next/link";
import Specialization from "../(component)/specialization/specialization";
import UserLink from "../(component)/userLink/userLink";
import WorkTogether from "../(component)/workTogether/workTogether";
const data = [
  {
    icon: "/images/camera.svg",
    name: "PHOTOGRAPHY",
  },
  {
    icon: "/images/camera.svg",
    name: "WEB DESIGNING",
  },
  {
    icon: "/images/camera.svg",
    name: "BRANDING",
  },
  {
    icon: "/images/camera.svg",
    name: "DEVELOPMENT",
  },
];
const array = [
  {
    title: "PHOTOGRAPHY",
    description:
      "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.",
  },
  {
    title: "WEB DESIGNING",
    description:
      "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.",
  },
  {
    title: "BRANDING",
    description:
      "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.",
  },
  {
    title: "DEVELOPMENT",
    description:
      "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.",
  },
];
function Offering() {
  return (
    <div className="md:container md:mx-auto px-5">
      <div className=" md:flex w-full  justify-between px-5 ">
        <div className=" bg-primary-profileBoxBg justify-evenly py-8 md:py-0 mb-4 md:mb-0 space-y-8 md:space-y-0 flex flex-col  rounded-3xl md:w-[30%]">
          {data.map((item, index) => {
            return (
              <div className="flex justify-around w-full items-center ">
                <div className="">
                  <Image src={item.icon} width={40} height={40}  alt="icons"/>
                </div>
                <h1 className="flex justify-start md:w-[40%] w-[70%]  ">
                  {item.name}
                </h1>
              </div>
            );
          })}
        </div>
        <div className=" md:w-[65%]">
          <div className="mb-3">
            <Heading heading="MY OFFERINGS" />
          </div>
          <div className="bg-primary-profileBoxBg justify-center rounded-3xl w-full flex py-4 flex-wrap ">
            {array.map((item) => {
              return (
                <div className=" bg-primary-secondBlack w-full md:w-[40%] m-4 p-5 rounded-3xl space-y-2 ">
                  <p className="text-primary-textColor text-sm">{item.title}</p>
                  <p className="pb-7 opacity-[0.5] ">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="lg:flex w-full lg:space-x-5 lg:items-center lg:px-5  ">
        <div className="lg:w-[30%]">
          <Link href="/contact">
            <UserLink />
          </Link>
        </div>
        <div className="lg:w-[40%] mb-5 md:mb-0">
          <Link href="/offering">
            <WorkTogether />
          </Link>
        </div>
        <div className="lg:w-[30%]">
          <InfoBox
            title="More about me"
            description="Credentials"
            url="/images/sign.png"
            page="/aboutMe"
          />
        </div>
      </div>
    </div>
  );
}

export default Offering;
