export default function (props) {
  return (
    <div className="relative text-white">
      <img src={props.img} alt="" />
      <div className="w-full h-full flex items-end justify-start md:items-center absolute top-0 left-0">
        <div className="p-4 pb-6">
          <div className="text-base md:text-[24px] font-Guardian-Semibold font-semibold">
            {props.heading}
          </div>
          {props.text ? <div className="text-sm font-Montserrat text-[14px] font-normal mt-3">{props.text}</div> : null}
          <div className="border border-[white] h-[35px] p-3 text-left hover:bg-white hover:text-[#d1291c] flex flex-row items-center justify-start text-white font-Montserrat font-bold text-xs tracking-wide transition-all duration-1000 cursor-pointer mt-5">
              {props.btn} &gt;
            </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div
  className={` items-end justify-start flex-1 basis-full grid flex-col ${url} bg-cover bg-center`}
>
  <div className="p-4 pb-6">
    <div className="text-2xl font-semibold">{props.heading}</div>
    {props.text ? <div className="text-sm">{props.text}</div> : null}
  </div>
</div>; */
}
