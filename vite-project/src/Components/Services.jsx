import React from "react";
import Servicesblock from "../assets/Servicesblock.png";
import Frame19 from "../assets/Frame19.png";

const Services = () => {
  return (
    <section className="px-6 md:px-24">

      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6 mt-20">
        <h1 className="bg-[#B9FF66] px-3 py-2 font-bold w-fit">
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
      <div className="bg-[#F3F3F3] rounded-2xl mt-20 p-8 md:p-16 w-[1240px] h-[347px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        <div className="max-w-lg">
          <h2 className="text-xl md:text-2xl font-bold">
            Let's make things happen
          </h2>

          <p className="mt-4">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>

          <button className="mt-6 px-6 py-3 bg-black text-white rounded-xl">
            Get your free proposal
          </button>
        </div>

        
        <img
          src={Frame19}
          alt="frame"
          className="w-full max-w-md"
        />
        

      </div>
    </section>
  );
};

export default Services;