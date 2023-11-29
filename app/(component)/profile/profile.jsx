import Image from "next/image";
import Link from "next/link";
import React from "react";

function Profile() {
  return (
    <Link href={"./contact"}>
      <div className=" bg-primary-profileBoxBg w-full  space-x-4  sm:flex md:flex rounded-2xl p-8 cursor-pointer justify-between">
        <div className=" profileBackground mb-5 md:mb-0">
          <Image
            src="/images/cat.png"
            width={350}
            height={300}
            alt="Profile image"
            className="rounded-tl-2xl object-contain w-full rounded-br-2xl"
          />
        </div>
        <div className="justify-center space-y-2 flex flex-col ">
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
    </Link>
  );
}

export default Profile;
