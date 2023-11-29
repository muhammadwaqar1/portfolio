"use client";
import React, { useState } from "react";

const data = {
  name: "",
  email: "",
  subject: "",
  description: "",
};

function Form() {
  const [user, setUser] = useState(data);

  const handleChance = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };
  console.log(user, "user");
  return (
    <div className="bg-primary-profileBoxBg  h-full  rounded-3xl space-y-4 px-5 md:px-10 py-8">
      <div className="md:mb-5">
        <p className="font-medium text-3xl">
          Let's Work{" "}
          <span className="text-blue-900 font-medium text-3xl ">together</span>{" "}
        </p>
      </div>
      <input
        className="rounded-lg  w-full bg-primary-secondBlack pl-4 py-3 md:py-4 outline-none"
        placeholder="Name"
        type="text"
        name="name"
        onChange={(e) => handleChance(e)}
      />
      <input
        className="rounded-lg  w-full bg-primary-secondBlack pl-4 py-3 md:py-4 outline-none"
        type="email"
        name="email"
        placeholder="email"
        onChange={(e) => handleChance(e)}
      />
      <input
        className="rounded-lg  w-full bg-primary-secondBlack pl-4 py-3 md:py-4  outline-none"
        type="text"
        name="subject"
        placeholder="subject"
        onChange={(e) => handleChance(e)}
      />
      <textarea
        className="rounded-lg  w-full bg-primary-secondBlack pl-4 pb-10 md:pb-20 pt-4 outline-none "
        type="text"
        name="description"
        placeholder="Yor Message"
        onChange={(e) => handleChance(e)}
      />
      <button
        className="rounded-lg  w-full bg-primary-secondBlack pl-4 py-5 cursor-pointer  "
        type="text"
      >
        Send Message
      </button>
    </div>
  );
}

export default Form;
