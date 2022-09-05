import { useState } from "react";

export default function QuestionRow(props) {
  const [status, setStatus] = useState(false);
  function change() {
    setStatus(!status);
  }
  return (
    <>
      <h2>
        <button
          onClick={() => {
            change();
          }}
          type="button"
          className="flex items-center justify-between w-full py-5 text-left border-b border-gray-500 dark:border-gray-700 bg-white font-semibold text-black font-Guardian-Semibold text-[18px]"
        >
          <span>{props.question}</span>
          <svg
            data-accordion-icon=""
            className={`w-6 h-6 ${status ? " " : " rotate-180 "} shrink-0`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        className={`${status ? "" : " hidden "}`}
        aria-labelledby="accordion-flush-heading-1"
      >
        <div className="py-5 font-light border-b border-gray-500 dark:border-gray-700">
          <p className="mb-2 font-Montserrat text-[13px] text-black font-medium leading-2">
            {props.text}
          </p>
        </div>
      </div>
    </>
  );
}
