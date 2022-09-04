import "../style.css";
export default function ImageBox(props) {
  return (
    <>
      <div className="relative h-[380px] w-[100%] md:h-[250px] md:w-[25%] xl:hidden bg-red-500 flex flex-col">
        <div className="relative h-full w-full grid place-items-center overflow-hidden">
          <img
            className="absolute top-0 left-0 h-full w-full hover:scale-110 transition-transform transform-gpu duration-[3000ms] cursor-pointer "
            src={props.img}
            alt=""
          />
          <img
            src={props.centerImg}
            className="w-[30vw] md:w-[50px] lg:w-[65px] xl:w-[96px] z-20  -translate-y-3"
          />
          <div className="xl:hidden h-[100px] w-full absolute bottom-0 bg-[rgba(33,33,33)] flex flex-col items-center py-[10px]">
            <div className="text-white font-Guardian-Medium text-lg">
              {props.heading}
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
            src={props.img}
            alt=""
          />
          <img
            src={props.centerImg}
            className="w-[30px] md:w-[50px] lg:w-[65px] xl:w-[96px] z-20  -translate-y-3"
          />
          <div className="bottomBox h-[200px] z-30 w-full absolute -bottom-20 bg-[rgba(33,33,33)] flex flex-col items-center py-[10px] transition-all duration-500">
            <div className="text-white font-Guardian-Medium text-lg">
              {props.heading}
            </div>
            <div className="mt-2 w-[85%] text-white font-Montserrat min-h-[65px] text-[13px] leading-[22px] font-semibold break-words text-center px-[30px]">
              {props.text}
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
