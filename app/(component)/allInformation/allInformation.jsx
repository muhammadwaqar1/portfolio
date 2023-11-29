import React from "react";

function AllInformation({ date, title, subTitle, description }) {
  return (
    <div>
      <h4>{date}</h4>
      <h3 className="text-blue-900 ">{title}</h3>
      <h5>{subTitle}</h5>
      <p>{description}</p>
    </div>
  );
}

export default AllInformation;
