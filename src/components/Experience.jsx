import React from "react";
import CountUp from "react-countup";

function Experience() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 py-4 lg:px-10 space-y-5 gap-6">
      <div className="flex items-center pt-5">
        <CountUp
          className="text-xl lg:text-2xl font-bold text-orange-500"
          delay={0}
          end={3}
        />
        <span className="text-xl lg:text-2xl font-bold pl-1 text-orange-500">
          +
        </span>
        <span className="pl-6 lg:pl-4 text-sm lg:text-lg font-semibold">
          {" "}
          Years Experience
        </span>
      </div>
      <div className="flex items-center mt-0">
        <CountUp
          className="text-xl lg:text-2xl font-bold text-orange-500"
          delay={0}
          end={20}
        />
        <span className="text-xl lg:text-2xl font-bold pl-1 text-orange-500">
          +
        </span>
        <span className="pl-6 lg:pl-4 text-sm lg:text-lg font-semibold">
          {" "}
          Complete Projects
        </span>
      </div>
      <div className="flex items-center">
        <CountUp
          className="text-xl lg:text-2xl font-bold text-orange-500"
          delay={0}
          end={10}
        />
        <span className="text-xl lg:text-2xl font-bold pl-1 text-orange-500">
          +
        </span>
        <span className="pl-6 lg:pl-4 text-sm lg:text-lg font-semibold">
          {" "}
          Happy Customers
        </span>
      </div>
      <div className="flex items-center">
        <CountUp
          className="text-xl lg:text-2xl font-bold text-orange-500"
          delay={0}
          end={30}
        />
        <span className="text-xl lg:text-2xl font-bold pl-1 text-orange-500">
          +
        </span>
        <span className="pl-6 lg:pl-4 text-sm lg:text-lg font-semibold">
          {" "}
          Honar and Award
        </span>
      </div>
    </div>
  );
}

export default Experience;
