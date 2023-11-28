import Image from "next/image";
import React from "react";

function Profile() {
  return (
    <div className=" bg-primary-profileBoxBg w-full  space-x-4 h-3/4 sm:flex md:flex rounded-2xl p-8 cursor-pointer justify-between">
      <div className="mb-5 md:mb-0">
        <Image
          src="/images/weer.jpeg"
          width={350}
          height={500}
          alt="Profile image"
          className="rounded-tl-2xl rounded-br-2xl h-[200px]"
        />
      </div>
      <div className="justify-around flex flex-col ">
        <h1 className="text-primary-textColor">Web Designer</h1>
        <p className="text-4xl text-text_white">Muhammad</p>
        <p className="text-4xl text-text_white">Waqar .</p>
        <p className="text-primary-textColor">
          i am a web Designer and based in Pakistan
        </p>

        <Image
          src="/images/iconNext.svg"
          width={30}
          height={30}
          className="flex self-end cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Profile;
