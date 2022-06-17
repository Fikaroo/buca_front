import { Link } from "react-router-dom";
import logo_white from "../assets/media/bucatechlogo_white.svg";
import logo_colored from "../assets/media/bucatechlogo_colored.svg";
import frame from "../assets/media/Frame.svg";
import arrow_left from "../assets/icons/arrow-circle-left.svg";
import eye from "../assets/icons/eye.svg";
import eye_off from "../assets/icons/eye-off.svg";
import { useState } from "react";

function Login() {
  const [isShow, setShow] = useState(false);
  const handlePassword = () => {
    setShow(!isShow);
  };
  return (
    <div className="w-full h-full relative">
      <div className="flex">
        <div className="w-full lg:w-1/2 h-screen flex">
          <div className="flex flex-col px-32 py-24 space-y-6 text-black lg:w-full">
            <div className="flex">
              <Link className="flex space-x-2" to="/">
                <img className="w-8 lg:w-6" src={arrow_left} alt="" />
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
                Login an account
              </h1>
              <span className="font-medium text-base md:text-lg lg:text-base flex">
                Don't you an account?
                <Link to="/singup" className="text-primary ml-1">
                  Register
                </Link>
              </span>
            </div>
            <div className="flex flex-col pt-8 max-w-sm">
              <form className="flex flex-col space-y-4 text-base md:text-lg lg:text-base">
                <div className="flex flex-col space-y-2">
                  <label>Email</label>
                  <input
                    type="email"
                    className="border border-gray-300 rounded py-3 pl-3 outline-none  placeholder:text-gray-500"
                    placeholder="Enter your e-mail address here"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex">
                    <label>Password</label>
                    <Link className="flex text-primary ml-auto" to="#">
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    type={`${isShow ? "text" : "password"}`}
                    className="border border-solid border-gray-300 rounded py-3 pl-3 outline-none placeholder:text-gray-500"
                    placeholder="Enter your password here"
                  />
                  <div className="flex relative" onClick={handlePassword}>
                    <img
                      className="bottom-[20px] right-4 absolute hover:cursor-pointer"
                      src={isShow ? eye_off : eye}
                      alt=""
                    />
                  </div>
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

export default Login;
