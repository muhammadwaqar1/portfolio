import React from "react";
import Image from "next/image";
function Specialization() {
  return (
    <div className="bg-primary-profileBoxBg w-full h-[200px] rounded-xl flex items-center justify-evenly flex-col my-5">
      <div className=" flex text-white justify-around w-full px-5">
        <Image src="/images/camera.svg" width={30} height={30} alt="sdf" />
        <Image
          src="/images/pencil.svg"
          width={30}
          height={30}
          alt="pencil"
          style={{ fill: "red" }}
        />
        <Image src="/images/cercal.svg" width={30} height={30} alt="cercal" />
        <Image src="/images/mobile.svg" width={30} height={30} alt="mobile" />
      </div>
      <div className="w-full flex justify-around ">
        <div>
          <p className="text-primary-textColor">Specialization </p>
          <p className="text-xl">Service Offering</p>
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

export default Specialization;
