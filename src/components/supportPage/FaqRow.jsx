import React, { useState } from "react";
import Question from "./questions";
import faqss from "../../helper/questions.js";
import cat from "../../helper/quesCat";
export default function FaqRow() {
  const [q, setq] = useState(faqss[0]);
  const [head, setHead] = useState(cat[0]);
  return (
    <>
      <div className="flex flex-row flex-wrap mt-2 h-[600px]">
        <div className="flex flex-col items-center w-[100%] md:w-[30%] bg-[#D5D5D5] h-full md:h-[600px]">
          <div className="md:w-[81%] w-[90%] h-full flex flex-col py-12">
            <h2 className="mb-5 font-semibold text-black font-Guardian-Semibold text-[24px]">
              Categories
            </h2>
            <div className="font-Montserrat text-[13px] text-black font-semibold">
              Pick a Category
            </div>
            <div className="w-full md:hidden  mt-7 border border-[rgb(33,33,33)] h-[45px] md:w-[200px] lg:w-[250px] font-Guardian-Semibold text-[16px] font-semibold flex flex-row items-center px-3">
              Motorcycles
            </div>

            <div className="cursor-pointer hidden md:block mt-5 font-Montserrat text-[13px] text-black font-semibold hover:text-[#d1291c] py-5 border-b border-gray-800 ">
              <button
                onClick={() => {
                  setq(faqss[0]);
                  setHead(cat[0]);
                }}
              >
                Motorcycles
              </button>
            </div>
            <div className="cursor-pointer hidden md:block font-Montserrat text-[13px] text-black font-semibold hover:text-[#d1291c] py-5 border-b border-gray-800 ">
              <button
                onClick={() => {
                  setq(faqss[1]);
                  setHead(cat[1]);
                }}
              >
                Safety
              </button>
            </div>
            <div className="cursor-pointer hidden md:block font-Montserrat text-[13px] text-black font-semibold hover:text-[#d1291c] py-5 border-b border-gray-800 ">
              <button
                onClick={() => {
                  setq(faqss[2]);
                  setHead(cat[2]);
                }}
              >
                Customer Service
              </button>
            </div>
            <div className="cursor-pointer hidden md:block font-Montserrat text-[13px] text-black font-semibold hover:text-[#d1291c] py-5 border-b border-gray-800 ">
              <button
                onClick={() => {
                  setq(faqss[3]);
                  setHead(cat[3]);
                }}
              >
                General
              </button>
            </div>
          </div>
        </div>
        <Question ques={q} head={head} />
      </div>
    </>
  );
}
