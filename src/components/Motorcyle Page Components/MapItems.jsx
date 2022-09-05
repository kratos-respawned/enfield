import React from "react";

export default function MapItems(props) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-[200px] h-full my-5 md:my-0">
        <img
          src="	https://www.royalenfield.com/content/dam/royal-enfield/india/support/home/logos/book-a-service.svg"
          className="w-[60px] h-[60px]"
          alt=""
        />
        <div className="opacity-75 hover:text-[#d1291c] grid place-items-center text-white font-Montserrat text-xs font-[600] tracking-wide transition-all duration-1000 cursor-pointer mt-5 -mb-2">
          {props.text}
        </div>
      </div>
    </>
  );
}
