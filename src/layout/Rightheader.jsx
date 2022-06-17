import React from "react";
import { Link } from "react-router-dom";
function rightHeader() {

  return (
    <div className="flex ml-auto">
      <div className="flex mr-4">
        <select
          id="lang"
          className="flex hover:cursor-pointer w-14 outline-none"
        >
          <option value="AZ">AZ</option>
          <option value="ENG">ENG</option>
        </select>
      </div>
      <div className="flex space-x-4">
        <Link to={"/login"}>
          <button
            type="button"
            className="border border-primary py-2 px-8 hover:bg-blue-btnHover text-primary hover:text-default transition ease-in duration-300 font-normal rounded"
          >
            Login
          </button>
        </Link>
        <Link to={"/singup"}>
          <button className="border bg-primary py-2 px-4 w-40 hover:bg-blue-btnHover text-default transition ease-in duration-200 font-normal rounded">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default rightHeader;
