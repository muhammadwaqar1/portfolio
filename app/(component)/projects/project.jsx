import Image from "next/image";
import React from "react";

function Project() {
  return (
    <div className="lg:flex w-full">
      <div className="flex w-full  justify-center">
        <div className=" bg-primary-profileBoxBg  m-4 rounded-3xl p-5 w-full justify-center">
          <Image
            src="/images/weer.jpeg"
            width={350}
            height={500}
            alt="Profile image"
            className="rounded-3xl h-72 "
          />
          <div className="flex justify-between my-4">
            <div>
              <p className="text-sm text-primary-textColor">WEB DESIGNING</p>
              <p>DYNAMIC</p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/iconNext.svg"
                width={40}
                height={40}
                className="flex self-end cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
