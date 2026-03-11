import React from "react";
import Casestudiesblock from "../assets/Casestudiesblock.png";
import Processblock from "../assets/Processblock.png";

const UseCases = () => {
  return (
    <section className="px-6 md:px-24">

      {/* Case Studies */}
      <div className="flex flex-col md:flex-row gap-6 mt-20">
        <h1 className="bg-[#B9FF66] px-3 py-2 font-bold w-fit">
          Case Studies
        </h1>

        <p className="max-w-xl">
          Explore Real-Life Examples of Our Proven Digital Marketing
          Success through Our Case Studies
        </p>
      </div>

      <img
        src={Casestudiesblock}
        alt="cases"
        className="mt-12 w-full max-w-[1240px] mx-auto"
      />

      {/* Working Process */}
      <div className="flex flex-col md:flex-row gap-6 mt-24">
        <h1 className="bg-[#B9FF66] px-3 py-2 font-bold w-fit">
          Our Working Process
        </h1>

        <p className="max-w-md">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      <img
        src={Processblock}
        alt="process"
        className="mt-12 w-full max-w-[1240px] mx-auto"
      />

    </section>
  );
};

export default UseCases;