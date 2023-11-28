import Image from "next/image";
import React from "react";

function Heading({ heading }) {
  return (
      <div className="flex justify-center items-center">
        <Image
          src="/images/star.png"
          width={50}
          height={50}
          alt="Profile image"
        />
        <p className="lg:text-7xl md:text-4xl text-2xl">{heading}</p>
        <Image
          src="/images/star.png"
          width={50}
          height={50}
          alt="Profile image"
        />
    </div>
  );
}

export default Heading;
