import { useState } from "react";
import logo from "../assets/logo.svg";
export default function Navbar() {
  const [status, setStatus] = useState(false);
  return (
    <div className="text-white">
      <nav className="w-full z-50 flex justify-between items-center bg-black h-[75px] text-white px-4">
        <div
          onClick={() => {
            console.log("gotohome");
          }}
          className="md:py-6 md:px-4"
        >
          <img
            src={logo}
            className=" lg:w-52 lg:h-7 md:w-24 md:h-3 w-[100px] h-[13.4px]"
          />
        </div>
        <div className="hidden md:block">
          <ul className="flex">
            <li className="font-semibold md:px-0 lg:px-1 px-1 py-7 text-xs cursor-pointer tracking-wider mx-1 hover:text-red-500">
              Motorcycles
            </li>
            <li className="font-semibold md:px-0 lg:px-1 px-1 py-7 text-xs cursor-pointer tracking-wider mx-1 hover:text-red-500">
              Service
            </li>
            <li className="font-semibold md:px-0 lg:px-1 px-1 py-7 text-xs cursor-pointer tracking-wider mx-1 hover:text-red-500">
              Locate Us
            </li>
            <li className="font-semibold md:px-0 lg:px-1 px-1 py-7 text-xs cursor-pointer tracking-wider mx-1 hover:text-red-500">
              Rides
            </li>
            <li className="font-semibold md:px-0 lg:px-1 px-1 py-7 text-xs cursor-pointer tracking-wider mx-1 hover:text-red-500">
              Accessories
            </li>
            <li className="font-semibold md:px-0 lg:px-1 px-1 py-7 text-xs cursor-pointer tracking-wider mx-1 hover:text-red-500">
              Apparel
            </li>
            <li className="font-semibold md:px-0 lg:px-1 px-1 py-7 text-xs cursor-pointer tracking-wider mx-1 hover:text-red-500">
              Our World
            </li>
            <li className="font-semibold md:px-0 lg:px-1 px-1 py-7 text-xs cursor-pointer tracking-wider mx-1 hover:text-red-500">
              Support
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <button className="hidden md:block">Login</button>
          <button className="md:hidden py-4 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3-12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 7a7.489 7.489 0 0 1 6-3 7.489 7.489 0 0 1 6 3 7.489 7.489 0 0 1-6 3 7.489 7.489 0 0 1-6-3Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="pb-4 pt-5 pl-4 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              width="20px"
              height="20px"
              strokeLinejoin="round"
              strokeMiterlimit="1.414"
              clipRule="evenodd"
              viewBox="0 0 128 128"
            >
              <path fill="#000" d="M.211 0h128v128h-128z" />
              <path
                fill="#fff"
                fillRule="nonzero"
                d="M75.941 79.528c-11.617 10.144-28.988 13.34-43.601 7.365C14.72 79.689 3.496 59.425 6.867 40.571 10.24 21.704 27.782 6.443 47.398 6.008c.361-.006.722-.008 1.084-.007 19.279.183 37.454 15.06 41.025 34.312 2.394 12.904-1.734 26.845-10.689 36.433l34.787 33.82c.746.788.617 1.05.605 1.489-.042 1.525-2.11 2.527-3.394 1.379L75.941 79.528ZM47.965 10.001c-17.208.163-33.355 13.173-36.934 30.111-2.634 12.469 1.515 26.166 10.639 35.073 10.478 10.228 27.063 13.662 40.897 8.005 16.003-6.542 26.182-25.034 23.007-42.148-3.147-16.967-18.86-30.64-36.627-31.035a53.632 53.632 0 0 0-.982-.006Z"
              />
            </svg>
          </button>
          <button className="py-4 px-2">India</button>
          <button
            className="md:hidden relative py-4 px-2"
            onClick={() => {
              setStatus(!status);
            }}
          >
            <svg
              className={`absolute transition-opacity ${
                status ? " opacity-0 " : " opacity-100 "
              } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6`}
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
            >
              <path
                d="M20,11H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,11,20,11z M4,8h16c0.6,0,1-0.4,1-1s-0.4-1-1-1H4
	C3.4,6,3,6.4,3,7S3.4,8,4,8z M20,16H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,16,20,16z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={` transition-opacity
              ${status ? " opacity-100 " : " opacity-0 "}
              absolute top-1/2 left-1/2 -translate-x-1/4 z-50 -translate-y-1/4 w-6 h-6`}
            >
              <path
                fill="none"
                fillRule="evenodd"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 1 1 13M1 1l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={` md:hidden ${
          status ? " block " : " hidden "
        } bg-[#212121]  overflow-y-auto h-[calc(100vh-56px)] w-full z-[990] fixed top-[56px] left-0`}
      >
        <ul>
          <li className="py-3 text-[18px] px-12">
            <a href="#"> Motorcycles</a>
          </li>
          <li className="py-3 text-[18px] px-12">
            <a href="#"> Services</a>
          </li>
          <li className="py-3 text-[18px] px-12">
            <a href="#"> Locate Us</a>
          </li>
          <li className="py-3 text-[18px] px-12">
            <a href="#"> Rides</a>
          </li>
          <li className="py-3 text-[18px] px-12">
            <a href="#"> Accessories</a>
          </li>
          <li className="py-3 text-[18px] px-12">
            <a href="#"> Apparel</a>
          </li>
          <li className="py-3 text-[18px] px-12">
            <a href="#"> Our </a>World
          </li>
          <li className="py-3 text-[18px] px-12">
            <a href="#"> Support</a>
          </li>
        </ul>
        <ul className="my-2 mx-12 w-[250px] border-white border-[1px] flex items-center">
          <li className="py-3 text-center flex-1 border-r-[1px]">Share</li>
          <li className="py-3 text-center flex-1">Logo1</li>
          <li className="py-3 text-center flex-1">Logo2</li>
          <li className="py-3 text-center flex-1">Logo3</li>
        </ul>
      </div>
    </div>
  );
}
