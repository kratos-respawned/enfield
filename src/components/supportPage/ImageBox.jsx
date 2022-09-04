import "../style.css";
export default function ImageBox({ img }) {
  return (
    <>
      {/* <div className="flex-1  relative w-full text-white  ">
        <div className="relative flex-1 overflow-hidden">
          <img
            className="w-full cursor-pointer scale-105 hover:scale-110 transition-transform  transform-gpu duration-[3000ms]"
            src="https://www.royalenfield.com/content/dam/royal-enfield/india/support/home/tout/support-call.jpg"
          />

          <div className="pointer-events-none absolute grid place-items-center md:items-end md:pb-4 w-full h-full z-20 bg-[#2a292988] top-0  left-0">
            <img
              src="https://www.royalenfield.com/content/dam/royal-enfield/india/support/home/logos/call.svg"
              className="w-[30vw] md:w-[50px] lg:w-[65px] xl:w-[96px] "
            />
          </div>
        </div>

        <div className="  h-full w-full  px-[15px] z-30 bg-[#212121] flex flex-col items-center py-[10px]">
          <div className=" font-Guardian-Medium text-lg">Contact Us</div>
          <div className="hidden xl:block min-h-[65px] text-[13px] leading-[22px] font-semibold break-words text-center px-[30px]">
            For assistance on all things Enfield, contact us at: 1800 210 0007
            (Roadside Assistance 24X7 &amp; Customer Care 9 AM - 9 PM)
          </div>
          <div className="border  border-[white] h-[35px] px-5  hover:text-red-500 flex items-center text-white font-Montserrat text-xs font-[600] tracking-wide transition-colors duration-500 cursor-pointer mt-2">
            <div>Know More</div>
            <div className="ml-[5px] pt-[1px]">&gt;</div>
          </div>
        </div>
      </div> */}
      <div className="relative h-[380px] w-[100%] md:h-[250px] md:w-[25%] xl:hidden bg-red-500 flex flex-col">
        <div className="relative h-full w-full grid place-items-center overflow-hidden">
          <img
            className="absolute top-0 left-0 h-full w-full hover:scale-110 transition-transform transform-gpu duration-[3000ms] cursor-pointer "
            src="https://www.royalenfield.com/content/dam/royal-enfield/india/support/home/tout/support-call.jpg"
            alt=""
          />
          <img
            src="https://www.royalenfield.com/content/dam/royal-enfield/india/support/home/logos/call.svg"
            className="w-[30px] md:w-[50px] lg:w-[65px] xl:w-[96px] z-20 -translate-y-10"
          />
          <div className="h-[100px] w-full absolute bottom-0 bg-[rgba(33,33,33)] flex flex-col items-center py-[10px]">
            <div className="text-white font-Guardian-Medium text-lg">
              Classic 350
            </div>
            <div className="border border-[white] h-[35px] w-[100px]  hover:bg-white hover:text-[#d1291c] grid place-items-center text-white font-Montserrat text-xs font-[600] tracking-wide transition-all duration-1000 cursor-pointer mt-3">
              Know More &gt;
            </div>
          </div>
        </div>
      </div>
      <div className="mainBox hidden overflow-hidden relative xl:flex h-[250px] w-[25%] bg-emerald-900">
        <div className="relative h-full w-full grid place-items-center overflow-hidden transition-all duration-500">
          <img
            className="absolute top-0 left-0 h-full w-full hover:scale-110 transition-transform transform-gpu duration-[3000ms] cursor-pointer "
            src="https://www.royalenfield.com/content/dam/royal-enfield/india/support/home/tout/support-call.jpg"
            alt=""
          />
          <img
            src="https://www.royalenfield.com/content/dam/royal-enfield/india/support/home/logos/call.svg"
            className="w-[30px] md:w-[50px] lg:w-[65px] xl:w-[96px] z-20 "
          />
          <div className="bottomBox h-[200px] z-30 w-full absolute -bottom-28 bg-[rgba(33,33,33)] flex flex-col items-center py-[10px] transition-all duration-500">
            <div className="text-white font-Guardian-Medium text-lg">
              Classic 350
            </div>
            <div className="mt-2 text-white font-Montserrat min-h-[65px] text-[13px] leading-[22px] font-semibold break-words text-center px-[30px]">
              For assistance on all things Enfield, contact us at: 1800 210 0007
              (Roadside Assistance 24X7 &amp; Customer Care 9 AM - 9 PM)
            </div>
            <div className="border border-[white] h-[35px] w-[100px] hover:bg-white hover:text-[#d1291c] grid place-items-center text-white font-Montserrat text-xs font-[600] tracking-wide transition-all duration-1000 cursor-pointer mt-5">
              Explore &gt;
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
