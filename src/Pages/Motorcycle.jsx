import Heading from "../components/Motorcyle Page Components/Heading";
import Card from "../components/Motorcyle Page Components/Card";
import Maprow from "../components/Motorcyle Page Components/Maprow";
import mData from "../helper/motorcycle_data.js";
export default function Motorcycles() {
  return (
    <>
      <Heading title="Motorcycles" />
      <div className="flex flex-row flex-wrap">
        {mData.map((card, key) => {
          return <Card img={card.img} head={card.heading} key={key} />;
        })}
      </div>
      <Maprow />
    </>
  );
}
