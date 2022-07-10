import React from "react";
import { BiCookie } from "react-icons/bi";

function Footer() {
  return (
    <div className="grid place-items-center h-28 mt-10">
      <div>
        <div className="flex flex-row items-center justify-center mb-2">
          <h5 className="text-base">MyCook</h5>
          <BiCookie className="text-base ml-1" />
        </div>
        <h6 className="text-sm">Created by &#9829; KaungMyatHein</h6>
      </div>
    </div>
  );
}

export default Footer;
