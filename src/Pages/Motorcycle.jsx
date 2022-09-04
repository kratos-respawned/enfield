import Heading from "../components/Motorcyle Page Components/Heading";
import Card from "../components/Motorcyle Page Components/Card";
import MapItems from "../components/Motorcyle Page Components/MapItems";
export default function Motorcycles() {
  return (
    <>
      <Heading/>
      <div className="flex flex-row flex-wrap">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-evenly h-[140px] bg-[#212121]">
          <MapItems/>
          <MapItems/>
          <MapItems/>
          <MapItems/>
        </div>
    </>
  );
}
