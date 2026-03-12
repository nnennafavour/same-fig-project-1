import React from "react";
import Servicesblock from "../assets/Servicesblock.png";
import Frame19 from "../assets/Frame19.png";

const Services = () => {
  return (
    <section className="px-6 md:px-24">

      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6 mt-20">
        <h1 className="bg-[#B9FF66] px-3 py-2 font-bold w-fit text-xl">
          Services
        </h1>

        <p className="max-w-xl">
          At our digital marketing agency, we offer a range of services
          to help businesses grow and succeed online.
        </p>
      </div>

      {/* Services Image */}
      <img
        src={Servicesblock}
        alt="services"
        className="mt-12 w-full max-w-[1240px] mx-auto"
      />

      {/* CTA */}
      
    </section>
  );
};

export default Services;