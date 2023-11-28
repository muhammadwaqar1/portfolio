import Image from "next/image";
import React from "react";

function UserLink() {
  return (
    <div className=" bg-primary-profileBoxBg w-full h-[200px] rounded-xl flex items-center justify-evenly flex-col my-5">
      <div className="bg-primary-secondBlack  rounded-3xl w-3/4 flex justify-evenly items-center py-5">
        <div className="bg-primary-thirdBlack w-[50px] h-[50px] rounded-full flex justify-center items-center ">
        <Image
          src="/images/camera.svg"
          width={30}
          height={30}
          alt="sdf"
        />
        </div>
        <div className="bg-primary-thirdBlack w-[50px] h-[50px] rounded-full flex  justify-center items-center">
        <Image
          src="/images/camera.svg"
          width={30}
          height={30}
          alt="sdf"
        />
        </div>
      </div>
      <div className="flex w-full justify-around">
        <div>
          <p className="text-primary-textColor">Stay With me</p>
          <h1 className="text-2xl">Profile</h1>
        </div>

        <div className="flex self-end">
          <Image
            src="/images/iconNext.svg"
            width={30}
            height={30}
            className="flex self-end cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default UserLink;
