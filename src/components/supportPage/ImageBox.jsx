export default function ImageBox({ img }) {
  return (
    <>
      <div className="flex-1  relative w-full text-white  ">
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
      </div>
    </>
  );
}
