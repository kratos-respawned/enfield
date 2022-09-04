import React from 'react'

export default function FaqRow() {
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
            <div className="w-full md:hidden mt-7 border border-[rgb(33,33,33)] h-[45px] md:w-[200px] lg:w-[250px] font-Guardian-Semibold text-[16px] text-black font-semibold flex flex-row items-center px-3">Motorcycles</div>

            <div className="cursor-pointer hidden md:block mt-5 font-Montserrat text-[13px] text-black font-semibold hover:text-[#d1291c] py-5 border-b border-gray-800 ">
              Motorcycles
            </div>
            <div className="cursor-pointer hidden md:block font-Montserrat text-[13px] text-black font-semibold hover:text-[#d1291c] py-5 border-b border-gray-800 ">
              Safety
            </div>
            <div className="cursor-pointer hidden md:block font-Montserrat text-[13px] text-black font-semibold hover:text-[#d1291c] py-5 border-b border-gray-800 ">
              Customer Service
            </div>
            <div className="cursor-pointer hidden md:block font-Montserrat text-[13px] text-black font-semibold hover:text-[#d1291c] py-5 border-b border-gray-800 ">
              General
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-[100%] md:w-[70%] bg-[#fff] h-full">
          <div className="md:w-[81%] w-[90%] h-full flex flex-col py-5 md:py-12">
          <h2 className="mb-5 font-semibold text-black font-Guardian-Semibold text-[24px]">
              Motorcycles
            </h2>
            <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              <h2 id="accordion-flush-heading-1">
                <button type="button" className="flex items-center justify-between w-full py-5 text-left border-b border-gray-500 dark:border-gray-700 bg-white font-semibold text-black font-Guardian-Semibold text-[18px]" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                  <span>Which Royal Enfield motorcycle is perfect for me?</span>
                  <svg data-accordion-icon="" className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
              </h2>
              <div id="accordion-flush-body-1" className="" aria-labelledby="accordion-flush-heading-1">
                <div className="py-5 font-light border-b border-gray-500 dark:border-gray-700">
                  <p className="mb-2 font-Montserrat text-[13px] text-black font-medium leading-2">Our motorcycles differ in many ways as each offers a different experience, while providing the signature Royal Enfield riding pleasure. You can explore our range, <span className="text-[#4747FF] cursor-pointer">book a test ride</span> and select the motorcycle that’s best for you by walking in to a <span className="text-[#4747FF] cursor-pointer">Royal Enfield</span> store near you.</p>
                </div>
              </div>
              <h2 id="accordion-flush-heading-2">
                <button type="button" className="flex items-center justify-between w-full py-5 text-left border-b border-gray-500 dark:border-gray-700 bg-white font-semibold text-black font-Guardian-Semibold text-[18px]" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                <span>Which Royal Enfield motorcycle is perfect for me?</span>
                  <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
              </h2>
              <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                <div className="py-5 font-light border-b border-gray-500 dark:border-gray-700">
                  <p className="mb-2 font-Montserrat text-[13px] text-black font-medium leading-2">Across the world, we have stores in over 50 countries. They are well equipped to provide you support and guidance to ride a Royal Enfield motorcycle of your choice. All you need to do is walk in to a <span className="text-[#4747FF] cursor-pointer">Royal Enfield store</span> near you.</p>
                </div>
              </div>
              <h2 id="accordion-flush-heading-3">
                <button type="button" className="flex items-center justify-between w-full py-5 text-left border-b border-gray-500 dark:border-gray-700 bg-white font-semibold text-black font-Guardian-Semibold text-[18px]" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                <span>What is the frame number of my motorcycle?</span>
                  <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
              </h2>
              <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                <div className="py-5 font-light border-b border-gray-500 dark:border-gray-700">
                  <p className="mb-2 font-Montserrat text-[13px] text-black font-medium leading-2">The frame number of your Royal Enfield motorcycle is punched on the steering head on the right side</p>
                </div>
              </div>
              <h2 id="accordion-flush-heading-4">
                <button type="button" className="flex items-center justify-between w-full py-5 text-left border-b border-gray-500 dark:border-gray-700 bg-white font-semibold text-black font-Guardian-Semibold text-[18px]" data-accordion-target="#accordion-flush-body-4" aria-expanded="false" aria-controls="accordion-flush-body-4">
                <span>What is the engine number of my motorcycle?</span>
                  <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
              </h2>
              <div id="accordion-flush-body-4" className="hidden" aria-labelledby="accordion-flush-heading-4">
                <div className="py-5 font-light border-b border-gray-500 dark:border-gray-700">
                  <p className="mb-2 font-Montserrat text-[13px] text-black font-medium leading-2">The engine number of your Royal Enfield motorcycle is punched on the left side of the crank case.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
