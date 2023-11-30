import Image from "next/image";
import React from "react";

function Social({title,contact,address,icon}) {
  return ( 
    <div className="flex  items-center space-x-3 ">
      <div className="bg-primary-profileBoxBg flex items-center justify-center p-4 rounded-xl ">
        <Image
          src={`${icon}`}
          width={40}
          height={40}
          alt="icon"
          className="flex self-end cursor-pointer"
        />
      </div>
      <div>
        <h1 className="text-primary-textColor text-lg">{title}</h1>
        <h1>{contact}</h1>
        <h1>{address}</h1>
      </div>
    </div>
  );
}

export default Social;
