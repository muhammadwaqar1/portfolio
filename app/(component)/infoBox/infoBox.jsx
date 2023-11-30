"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
function InfoBox({ title, description, url, page }) {
  const router = useRouter();
  return ( 
    <div
      className="bg-primary-profileBoxBg w-full h-[200px] rounded-xl flex items-center justify-evenly flex-col cursor-pointer"
      onClick={() => router.push(`${page}`)}
    >
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
          alt="iconNext"
          className="flex self-end cursor-pointer"
        />
      </div>
    </div>
  );
}

export default InfoBox;
