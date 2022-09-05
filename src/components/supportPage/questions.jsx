import { useEffect, useRef, useState } from "react";
import QuestionRow from "./QuestionRow";

export default function Question(props) {
  return (
    <>
      <div className="flex flex-col items-center w-[100%] md:w-[70%] bg-[#fff] h-full">
        <div className="md:w-[81%] w-[90%] h-full flex flex-col py-5 md:py-12">
          <h2 className="mb-5 font-semibold text-black font-Guardian-Semibold text-[24px]">
            {props.head}
          </h2>
          <div>
            {props.ques.map((q, key) => {
              return <QuestionRow question={q.q} text={q.answer} key={key} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
