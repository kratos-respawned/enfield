import React from "react";

export default function Card() {
  return (
    <>
      <div className="relative h-[220px] w-[280px] md:h-[250px] md:w-[350px] xl:hidden bg-red-500 flex flex-col">
        <div className="h-full w-full grid place-items-center overflow-hidden">
          <img
            className="h-full w-full hover:scale-110 transition-transform transform-gpu duration-[3000ms] cursor-pointer "
            src="https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/classic-350/landing/classic-350-motorcycle.jpg"
            alt=""
          />
          <div className="h-[90px] w-full absolute bottom-0 bg-[rgba(33,33,33,0.85)] flex flex-col items-center py-[10px]">
            <div className="text-white font-Guardian-Medium text-lg">
              Classic 350
            </div>
            <div className="border border-[white] h-[35px] w-[100px] hover:bg-white hover:text-[#d1291c] grid place-items-center text-white font-Montserrat text-xs font-[600] tracking-wide transition-all duration-1000 cursor-pointer mt-2">
              Explore &gt;
            </div>
          </div>
        </div>
      </div>
      <div className="hidden relative xl:flex h-[300px] w-[400px] bg-emerald-900">
      <div className="h-full w-full grid place-items-center overflow-hidden">
          <img
            className="h-full w-full hover:scale-110 transition-transform transform-gpu duration-[3000ms] cursor-pointer "
            src="https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/classic-350/landing/classic-350-motorcycle.jpg"
            alt=""
          />
          <div className="h-[100px] w-full absolute bottom-0 bg-[rgba(33,33,33)] flex flex-col items-center py-[10px]">
            <div className="text-white font-Guardian-Medium text-lg">
              Classic 350
            </div>
            <div className="border border-[white] h-[35px] w-[100px] hover:bg-white hover:text-[#d1291c] grid place-items-center text-white font-Montserrat text-xs font-[600] tracking-wide transition-all duration-1000 cursor-pointer mt-3">
              Explore &gt;
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
