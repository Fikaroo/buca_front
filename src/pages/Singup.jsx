import { Link } from "react-router-dom";
import logo_white from "../assets/media/bucatechlogo_white.svg";
import logo_colored from "../assets/media/bucatechlogo_colored.svg";
import frame from "../assets/media/Frame.svg";
import arrow_left from "../assets/icons/arrow-circle-left.svg";
import eye from "../assets/icons/eye.svg";
import eye_off from "../assets/icons/eye-off.svg";
import { useState } from "react";

function Singup() {
  const [isShow, setShow] = useState(false);
  const [isActive, setActive] = useState(false);
  const handlePassword = () => {
    setShow(!isShow);
  };

  const handleBtn = (e) => {
    if (e.target.className.includes("bg-secondary")) return;
    setActive(!isActive);
  };
  return (
    <div className="w-full h-full relative">
      <div className="flex">
        <div className="w-full lg:w-1/2 h-screen flex items-center justify-center">
          <div className="flex flex-col px-8 py-6 space-y-6 text-black">
            <div className="flex">
              <Link className="flex space-x-2" to="/">
                <img className="w-8 lg:w-fit" src={arrow_left} alt="" />
                <span className="text-xl md:text-2xl lg:text-base flex items-center">
                  Back homepage
                </span>
              </Link>
            </div>
            <img
              className="flex w-96 md:w-[420px] lg:hidden"
              src={logo_colored}
              alt=""
            />
            <div className="flex flex-col space-y-2">
              <h1 className="text-2xl md:text-4xl lg:text-3xl font-medium">
                Create an account
              </h1>
              <span className="font-medium text-base md:text-lg lg:text-base flex">
                Do you have an account?
                <Link to="/login" className="text-primary ml-1">
                  Log in
                </Link>
              </span>
            </div>
            <div className="flex w-full justify-center">
              <button
                className={`py-3 w-full border border-secondary rounded-l ${
                  !isActive ? "bg-secondary text-default" : "text-secondary"
                }`}
                onClick={handleBtn}
              >
                Personal
              </button>
              <button
                className={`py-3 w-full border border-secondary rounded-r ${
                  isActive ? "bg-secondary text-default" : "text-secondary"
                }`}
                onClick={handleBtn}
              >
                Business
              </button>
            </div>
            <div className="flex flex-col">
              <form className="flex flex-col space-y-4 text-base md:text-lg lg:text-base">
                <div className="flex flex-col space-y-2">
                  <label>Email</label>
                  <input
                    autoComplete="false"
                    type="email"
                    className="w-full border border-gray-300 rounded py-3 pl-3 outline-none  placeholder:text-gray-500"
                    placeholder="Enter your e-mail address here"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label>Password</label>
                  <input
                    autoComplete="false"
                    type={`${isShow ? "text" : "password"}`}
                    className="w-full border border-solid border-gray-300 rounded py-3 pl-3 outline-none placeholder:text-gray-500"
                    placeholder="Enter your password here"
                  />
                  <div className="flex relative" onClick={handlePassword}>
                    <img
                      className=" bottom-[20px] right-4 absolute hover:cursor-pointer"
                      src={isShow ? eye_off : eye}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <input type="checkbox" name="privacy" id="privacy" />
                  <label className="ml-4 w-full">
                    I agree to the
                    <span className="mx-1 text-primary hover:cursor-pointer">
                      Terms & Conditions
                    </span>
                    and
                    <span className="ml-1 text-primary hover:cursor-pointer">
                      Privacy Policy
                    </span>
                    .
                  </label>
                </div>
              </form>
              <button
                type="submit"
                className="text-base md:text-lg lg:text-base mt-6 bg-secondary text-default py-3 rounded hover:bg-green-btnHover"
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 hidden lg:flex bg-primary h-screen text-default">
          <div className="flex flex-col px-28 py-24 space-y-6 relative">
            <div>
              <img src={logo_white} alt="" />
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="font-medium text-3xl">Welcome back :)</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                faucibus est, dictum viverra mi ut ut.
              </p>
            </div>
            <div className="flex relative">
              <img className="absolute top-4" src={frame} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singup;
