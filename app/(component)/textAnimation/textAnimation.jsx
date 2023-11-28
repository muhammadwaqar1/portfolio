import React from "react";
import "./text.css";
function TextAnimation() {
  return (
    <div className="wrapper bg-primary-profileBoxBg w-full rounded-3xl py-3 pl-2">
      <div className="marquee">
        <p className="z-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          volutpat, ante eu bibendum tincidunt, sem lacus vehicula augue, ut
          suscipit.
        </p>
      </div>
    </div>
  );
}

export default TextAnimation;
