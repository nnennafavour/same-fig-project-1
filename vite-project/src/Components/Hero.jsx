import React from "react";
import Illustration from "../assets/Illustration.png";
import Logotypes from "../assets/Logotypes.png";

const Hero = () => {
  return (
    <div className="pt-28 px-6 md:px-24">

      <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-[1240px] mx-auto">

        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-medium leading-tight">
            Navigating the digital landscape for success
          </h1>

          <p className="mt-6 text-lg">
            Our digital marketing agency helps businesses grow and succeed
            online through SEO, PPC, social media marketing, and content creation.
          </p>

          <button className="mt-8 px-6 py-3 bg-black text-white rounded-xl">
            Book a consultation
          </button>
        </div>

        <img
          src={Illustration}
          alt="Illustration"
          className="w-full max-w-md"
        />

      </div>

      <img
        src={Logotypes}
        alt="logos"
        className="w-full max-w-[1240px] mx-auto mt-16"
      />

    </div>
  );
};

export default Hero;