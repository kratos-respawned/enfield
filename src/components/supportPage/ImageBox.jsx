export default function ImageBox({ img }) {
  return (
    <>
      <div className="flex-1 w-full text-white ">
        <div className="relative w-full h-full overflow-hidden">
          <img
            className="w-full cursor-pointer hover:scale-105 transition-transform  transform-gpu duration-[3000ms]"
            src="https://www.royalenfield.com/content/dam/royal-enfield/india/support/home/tout/support-call.jpg"
          />

          <div className="pointer-events-none absolute grid place-items-center w-full h-full z-20 bg-[#3636365c] top-0  left-0">
            <div>Center Image</div>
          </div>
        </div>

        <div className="h-[90px] w-full  bg-black flex flex-col items-center py-[10px]">
          <div className=" font-Guardian-Medium text-lg">Classic 350</div>
          <div className="border border-[white] h-[35px] px-5  hover:text-red-500 grid place-items-center text-white font-Montserrat text-xs font-[600] tracking-wide transition-all duration-1000 cursor-pointer mt-2">
            Explore <span>&gt;</span>
          </div>
        </div>
      </div>
    </>
  );
}

//
{
  /* <div className="flex-1 text-white relative basis-1/3 w-full overflow-hidden">
      <div
        className={` absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `}
      >
        <div className="w-fit h-fit">Center Img</div>
      </div>
      <div className="overflow-hidden backdrop-brightness-50 z-50">
        <img
          className="min-w-full hover:scale-110 duration-[5000ms] transition-transform transform-gpu"
          src={img}
          alt=""
          srcset=""
        />
      </div>
      <div className="bg-[#212121] z-50 w-full py-2">
        <div className="text-center text-lg z-50 font-semibold mb-2">
          Contact Us
        </div>
        <div className="mx-auto w-fit px-7 py-1  z-50 border-[1px]">
          Know More
        </div>
      </div>
    </div> */
}
