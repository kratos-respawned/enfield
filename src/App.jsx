import Navbar from "./components/Navbar";
import img1 from "./assets/supportCall.jpg";
import ImageBox from "./components/ImageBox";
function App() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col pt-14 md:pt-[70px] lg:pt-20 text-black">
        <ImageBox img={img1} />
        <ImageBox img={img1} />
        <ImageBox img={img1} />
        <ImageBox img={img1} />
      </div>
    </div>
  );
}

export default App;
