import Image from "next/image";
import React from "react";
import Social from "../(component)/social/social";
import SocialIcon from "../(component)/socialIcon/socialIcon";
import AllInformation from "../(component)/allInformation/allInformation";
const data = [
  {
    percentage: "65%",
    language: "JavaScript",
    comment: "Non enim praesent",
  },
  {
    percentage: "65%",
    language: "JavaScript",
    comment: "Non enim praesent",
  },
  {
    percentage: "65%",
    language: "JavaScript",
    comment: "Non enim praesent",
  },
  {
    percentage: "65%",
    language: "JavaScript",
    comment: "Non enim praesent",
  },
  {
    percentage: "65%",
    language: "JavaScript",
    comment: "Non enim praesent",
  },
  {
    percentage: "65%",
    language: "JavaScript",
    comment: "Non enim praesent",
  },
];
function AboutMe() {
  return (
    <div className="md:container md:mx-auto w-full md:flex justify-between px-5 ">
      <div className=" bg-primary-profileBoxBg mb-5 md:mb-0 rounded-3xl flex flex-col justify-center items-center h-[100%]  md:w-[30%] p-6 space-y-10">
        <div className="profileBackground w-full h-[400px] md:h-full">
          <Image
            src="/images/cat.png"
            width={350}
            height={500}
            alt="Profile image"
            className="rounded-3xl w-full h-full  "
          />
        </div>
        <div className="space-y-4 text-center">
          <h1 className="text-2xl">Muhammad Waqar</h1>
          <h1 className="text-sm text-primary-textColor">@MuhammadWaqar</h1>
        </div>
        <div className="flex justify-evenly w-full">
          <SocialIcon />
          <SocialIcon />
          <SocialIcon />
          <SocialIcon />
        </div>
        <button className="rounded-lg  w-full bg-primary-secondBlack pl-4 py-2 cursor-pointer text-xl ">
          Contact Me
        </button>
      </div>
      <div className=" md:w-[65%]">
        <div className="pb-28">
          <h1 className="mb-10">ABOUT ME</h1>
          <p className="mb-8">
            Sit amet luctussd fav venenatis, lectus magna fringilla inis urna,
            porttitor rhoncus dolor purus non enim praesent in elementum sahas
            facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
            etisam dignissim diam quis enim lobortis viverra orci sagittis eu
            volutpat odio facilisis mauris sit.
          </p>
          <p>
            Sit amet luctussd fav venenatis, lectus magna fringilla inis urna,
            porttitor rhoncus dolor purus non enim praesent in elementum sahas
            facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
            etisam dignissim diam quis enim lobortis viverra orci sagittis eu
            volutpat odio facilisis mauris sit.
          </p>
        </div>
        <div className="space-y-10">
          <div>
            <h2 className="mb-5">EXPERIENCE</h2>
            <AllInformation
              date="2007 - 2017"
              title="Framer Designer & Develope"
              subTitle="Bluebase Designs"
              description="Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit."
            />
          </div>
          <AllInformation
            date="2007 - 2017"
            title="Framer Designer & Develope"
            subTitle="Bluebase Designs"
            description="Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit."
          />
          <div>
            <h2 className="mb-5">EDUCATION</h2>
            <AllInformation
              date="2007 - 2017"
              title="Framer Designer & Develope"
              subTitle="Bluebase Designs"
              description="Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit."
            />
          </div>
          <AllInformation
            date="2007 - 2017"
            title="Framer Designer & Develope"
            subTitle="Bluebase Designs"
            description="Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit."
          />
        </div>
        <h1 className="my-6 text-2xl pt-10">Skill</h1>
        <div className="md:flex w-full md:flex-wrap">
          {data.map((item) => {
            return (
              <div className="w-1/2 mb-5 ">
                <span>{item.percentage}</span>
                <h3>{item.language}</h3>
                <p>{item.comment}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
