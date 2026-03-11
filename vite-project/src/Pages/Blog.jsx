import React from "react";
import Groupofcards from "../assets/Groupofcards.png";
import Testimonialsblock from "../assets/Testimonialsblock.png";
import Contactblock from "../assets/Contactblock.png";
import Footerblock from "../assets/Footerblock.png";

const Blog = () => {
  return (
    <section className="px-6 md:px-24">

      {/* Team */}
      <div className="flex flex-col md:flex-row gap-6 mt-24">
        <span className="bg-[#B9FF66] px-3 py-2 font-bold w-fit">
          Team
        </span>

        <p className="max-w-xl">
          Meet the skilled and experienced team behind our successful
          digital marketing strategies
        </p>
      </div>

      <img
        src={Groupofcards}
        alt="team"
        className="mt-12 w-full max-w-[1240px] mx-auto"
      />

      <div className="flex justify-center md:justify-end mt-10">
        <button className="bg-black text-white rounded-xl py-4 px-10">
          See all Teams
        </button>
      </div>

      {/* Testimonials */}
      <div className="flex flex-col md:flex-row gap-6 mt-24">
        <span className="bg-[#B9FF66] px-3 py-2 font-bold w-fit">
          Testimonials
        </span>

        <p className="max-w-xl">
          Hear from Our Satisfied Clients: Read Our Testimonials
          to Learn More about Our Digital Marketing Services
        </p>
      </div>

      <img
        src={Testimonialsblock}
        alt="testimonials"
        className="mt-12 w-full max-w-[1240px] mx-auto"
      />

      {/* Contact */}
      <div className="flex flex-col md:flex-row gap-6 mt-24">
        <span className="bg-[#B9FF66] px-3 py-2 font-bold w-fit">
          Contact Us
        </span>

        <p className="max-w-xl">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>

      <img
        src={Contactblock}
        alt="contact"
        className="mt-12 w-full max-w-[1240px] mx-auto"
      />

      <img
        src={Footerblock}
        alt="footer"
        className="mt-20 w-full max-w-[1240px] mx-auto"
      />

    </section>
  );
};

export default Blog;