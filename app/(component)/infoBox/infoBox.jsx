import Image from "next/image";
import React from "react";

function InfoBox({ title, description, url }) {
  return (
    <div className="bg-primary-profileBoxBg w-full h-[200px] rounded-xl flex items-center justify-evenly flex-col">
      <div className="">
        <Image src={url} width={150} height={150} alt="sdf" />
      </div>
      <div className="w-full flex justify-around ">
        <div>
          <p className="text-primary-textColor">{title} </p>
          <p className="text-xl">{description}</p>
        </div>
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

export default InfoBox;
