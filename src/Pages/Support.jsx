import ImageBox from "../components/ImageBox";
import img1 from "../assets/supportCall.jpg";
export default function Support() {
  return (
    <>
      <div className="flex flex-col pt-14 md:pt-[70px] lg:pt-20 text-black">
        <ImageBox img={img1} />
        <ImageBox img={img1} />
        <ImageBox img={img1} />
        <ImageBox img={img1} />
      </div>
    </>
  );
}
