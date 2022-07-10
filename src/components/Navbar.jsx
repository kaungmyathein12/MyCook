import React from "react";
import { BiCookie } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header>
      <nav className="flex flex-row justify-between items-center w-11/12 lg:w-2/3 mx-auto py-8 ">
        <div className="flex flex-row items-center">
          <Link to="/">
            <h2 className="text-xl font-medium">MyCook</h2>
          </Link>
          <BiCookie className="text-xl ml-1" />
        </div>
        <div>
          <a href="https://github.com/kaungmyathein982/MyCook">
            <AiOutlineGithub className="text-2xl float-right" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
