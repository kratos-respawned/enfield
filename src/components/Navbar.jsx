import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
export default function Navbar() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState(false);

  function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }

  function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
      setTimeout(() => {
        setShow(true);
      }, 500);
    } else {
      setTimeout(() => {
        setShow(false);
      }, 500);
    }
  }
  useEffect(() => {
    window.addEventListener("wheel", checkScrollDirection);
    return () => {
      window.removeEventListener("wheel", checkScrollDirection);
    };
  }, []);
  return (
    <div className="text-white">
      <nav
        className={` ${
          show
            ? " opacity-100  "
            : window.scrollY > 200
            ? "  opacity-0 pointer-events-none  "
            : " pointer-events-auto "
        }${window.scrollY > 200 ? " fixed " : " opacity-100 "} 
        w-full  transition-all z-50 flex justify-between items-center bg-black h-[75px] text-white px-4`}
      >
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
              <Link to="/">Motorcycles</Link>
            </li>
            <li className="font-semibold md:px-0 lg:px-1 px-1 py-7 text-xs cursor-pointer tracking-wider mx-1 hover:text-red-500">
              <Link to="/f">Become A Dealer</Link>
            </li>
            <li className="font-semibold md:px-0 lg:px-1 px-1 py-7 text-xs cursor-pointer tracking-wider mx-1 hover:text-red-500">
              <Link to="/s">Support</Link>
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
              enableBackground="new 0 0 24 24"
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
            <Link to="/">Motorcycles</Link>
          </li>
          <li className="py-3 text-[18px] px-12">
            <Link to="/f">Become A Dealer</Link>
          </li>
          <li className="py-3 text-[18px] px-12">
            <Link to="/s">Support</Link>
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
        </ul>
        <ul className="my-2 mx-12 w-[250px] border-white border-[1px] flex items-center">
          <li className="py-3 text-center flex-1 border-r-[1px]">Share</li>
          <li className="py-3 text-center flex-1 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></li>
          <li className="py-3 text-center flex-1 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg></li>
          <li className="py-3 text-center flex-1 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" id="IconChangeColor" height="20" width="20"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" id="mainIconPathAttribute" fill="#ffffff"></path></svg></li>
        </ul>
      </div>
    </div>
  );
}
