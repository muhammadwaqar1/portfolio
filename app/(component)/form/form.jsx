"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
const data = {
  user_name: "",
  user_email: "",
  subject: "",
  description: "",
};
function Form() {
  const [user, setUser] = useState(data);

  const handleChance = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };
  const form = useRef();
  const notyf = new Notyf();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ftryqm7",
        "template_w7ufojo",
        form.current,
        "bM_3xweCKRR5ZS2Mm"
      )
      .then(
        (result) => {
          setUser(data);
          notyf.open({
            type: "success",
            message: "Message successfully sent",
            duration: 5000,
            background:"#434343",
            position: {
              x: "center",
              y: "top",
            },
            layout: "centerRight",
            dismissible: true,
            width: "800px",
            height: "100px",
          });
          console.log(result.text, "success");
          console.log("message sent");
        },
        (error) => {
          console.log(error.text, "error");
        }
      );
  };
  return (
    <div className="bg-primary-profileBoxBg  h-full  rounded-3xl space-y-4 px-5 md:px-10 py-8">
      <div className="md:mb-5">
        <p className="font-medium text-3xl">
          Let's Work{" "}
          <span className="text-blue-900 font-medium text-3xl ">together</span>{" "}
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <input
          className="rounded-lg  w-full bg-primary-secondBlack pl-4 py-3 md:py-4 outline-none"
          placeholder="Name"
          type="text"
          name="user_name"
          value={user.user_name}
          onChange={(e) => handleChance(e)}
        />
        <input
          className="rounded-lg  w-full bg-primary-secondBlack pl-4 py-3 md:py-4 outline-none"
          type="email"
          name="user_email"
          placeholder="email"
          value={user.user_email}
          onChange={(e) => handleChance(e)}
        />
        <input
          className="rounded-lg  w-full bg-primary-secondBlack pl-4 py-3 md:py-4  outline-none"
          type="text"
          name="subject"
          placeholder="subject"
          value={user.subject}
          onChange={(e) => handleChance(e)}
        />
        <textarea
          className="rounded-lg  w-full bg-primary-secondBlack pl-4 pb-10 md:pb-20 pt-4 outline-none "
          type="text"
          name="description"
          placeholder="Yor Message"
          value={user.description}
          onChange={(e) => handleChance(e)}
        />
        <button
          className="rounded-lg  w-full bg-primary-secondBlack pl-4 py-5 cursor-pointer"
          onClick={(e) => sendEmail(e)}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Form;
