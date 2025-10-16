import { useState } from "react";

const WorkSteps = ({ data, style }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`rounded-xl hover:drop-shadow-2xl shadow-gray-300 transition-all duration-500 ${style}`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center rounded-md transition-colors duration-300 ${
          hover ? "bg-picto-primary" : "bg-[#EDD8FF80]"
        }`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 sm:w-10 sm:h-10"
        >
          <path d={data?.svgPath} fill={hover ? "#FFFFFF" : "#A53DFF"} />
        </svg>
      </div>

      {/* Text */}
      <div className="mt-3 xs:mt-4 sm:mt-6">
        <p className="font-semibold sm:text-xl">{`${data?.id}. ${data?.title}`}</p>
        <p className="mt-2 text-[13px] sm:text-[16px] text-[#697482]">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default WorkSteps;
