import Image from "next/image";
import React from "react";
import SocialIcon from "../socialIcon/socialIcon";

function UserLink() {
  return (
    <div className=" bg-primary-profileBoxBg w-full h-[200px] rounded-xl flex items-center justify-evenly flex-col my-5">
      <div className="bg-primary-secondBlack  rounded-3xl w-3/4 flex justify-evenly items-center py-5">
        <SocialIcon />
        <SocialIcon />
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
