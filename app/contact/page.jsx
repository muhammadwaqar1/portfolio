import React from "react";
import Social from "../(component)/social/social";
import SocialIcon from "../(component)/socialIcon/socialIcon";
import Form from "../(component)/form/form";

function Contact() {
  return (
    <div className="md:container md:mx-auto md:space-x-8  px-5 md:flex w-full">
      <div className="md:w-[30%] mb-10">
        <h1 className="text-xl mb-5">CONTACT INFO</h1>
        <div className="space-y-16 ">
          <Social
            title="MAIL US"
            contact="info@bluebase.com"
            address="info@bluebase.com"
            icon="/images/iconNext.svg"
          />
          <Social
            title="MAIL US"
            contact="info@bluebase.com"
            address="info@bluebase.com"
            icon="/images/iconNext.svg"
          />
          <Social
            title="MAIL US"
            contact="info@bluebase.com"
            address="info@bluebase.com"
            icon="/images/iconNext.svg"
          />
        </div>
        <h1 className="text-xl my-10">SOCIAL INFO</h1>
        <div className="flex space-x-9">
          <SocialIcon />
          <SocialIcon />
          <SocialIcon />
        </div>
      </div>
      <div className="md:w-[70%]">
        <Form />
      </div>
    </div>
  );
}

export default Contact;
