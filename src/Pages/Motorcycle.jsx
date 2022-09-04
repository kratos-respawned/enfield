import Heading from "../components/Motorcyle Page Components/Heading";
import Card from "../components/Motorcyle Page Components/Card";
import Maprow from "../components/Motorcyle Page Components/Maprow";
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
      <Maprow/>
    </>
  );
}
