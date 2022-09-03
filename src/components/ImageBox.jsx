export default function ImageBox({ img }) {
  return (
    <div className="flex-1 text-white relative basis-1/3 w-full overflow-hidden">
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
    </div>
  );
}
