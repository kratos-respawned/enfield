import ImageBox from "../components/supportPage/ImageBox";
import LowerRow from "../components/supportPage/lowerRow";
import upperRowData from "../helper/supportPage_upper.js";
import lowerRowData from "../helper/supportPage_lowerRow.js";
export default function Support() {
  return (
    <>
      <div className="grid grid-rows-2">
        <div className="flex flex-col md:flex-row md:flex-wrap text-white">
          {upperRowData.map((card, key) => {
            return (
              <ImageBox
                key={key}
                img={card.img}
                text={card.innerText}
                heading={card.heading}
                centerImg={card.centerImg}
              />
            );
          })}
        </div>
        <div className="w-full flex flex-col md:flex-row   text-white">
          {lowerRowData.map((card, key) => {
            return (
              <LowerRow
                img={card.bg}
                heading={card.heading}
                text={card.text}
                key={key}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
