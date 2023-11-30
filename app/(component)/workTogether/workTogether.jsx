"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
function WorkTogether() {
  const router = useRouter();
  return (
    <div
      className="bg-primary-profileBoxBg w-full  rounded-xl pl-5 py-7 mt-4 lg:mt-0 cursor-pointer"
      onClick={() => router.push("/contact")}
    >
      <Image src="/images/icon2.png" width={30} height={30} alt="icon2" />
      <h1 className="font-medium text-3xl">Let's </h1>
      <p className="font-medium text-3xl">
        Work{" "}
        <span className="text-blue-900 font-medium text-3xl ">together</span>{" "}
      </p>
      <div className="flex justify-end w-full pr-2 -mt-7">
        <Image
          src="/images/iconNext.svg"
          width={40}
          height={40}
          alt="iconNext"
          className="flex self-end cursor-pointer"
        />
      </div>
    </div>
  );
}

export default WorkTogether;
