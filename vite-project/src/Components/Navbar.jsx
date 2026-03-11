
import React, { useState } from "react";
import Vector from "../assets/Vector.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">

      <div className="max-w-[1240px] mx-auto px-6 md:px-24 flex items-center justify-between h-20">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Vector} alt="logo" className="w-8 h-8" />
          <span className="font-semibold">Positivus</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/usecases">Use Cases</Link>
          <span>Prices</span>
          <Link to="/blog">Blog</Link>

          <button className="border px-6 py-2 rounded-xl">
            Request a quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-white">

          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/usecases">Use Cases</Link>
          <span>Prices</span>
          <Link to="/blog">Blog</Link>

          <button className="border px-6 py-2 rounded-xl w-fit">
            Request a quote
          </button>

        </div>
      )}
    </nav>
  );
};

export default Navbar;