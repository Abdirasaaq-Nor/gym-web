import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Pages from '../components/Routers'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavbarToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <header className="flex justify-between  lg:justify-between lg:mx-20 md:justify-around mx-3 mt-4 text-white">
        <div className="logo pl-10 md:pl-0  lg:mr-0">
          {/* md:absolute md:left-12 md:top-4  */}
          <Link className="text-[30px]" to="/"> IRON  <span className="text-red-700">GYM</span></Link>
        </div>
        {/*  md:relative md:left-32 md:top-0 */}
        <div className="hidden md:block">
          <nav>
            <ul className="flex">
              <li className="px-4">
                <Link to="/Home_page">HOME</Link>
              </li>
              <li className="px-4">
                {" "}
                <Link to="/Service_page">Service</Link>
              </li>
              <li className="px-4">
                {" "}
                <Link to="/Trainers_page">Trainers</Link>
              </li>
              <li className="px-4">
                {" "}
                <Link to="/Testomonial_page">Testimonial</Link>
              </li>
              <li className="px-4">
                {" "}
                <Link to="/Contact_page">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="btn_ hidden md:block">
          <button className="px-2 bg-[#FF0000] text-white w-32 h-8 rounded-md hover:bg-[#ed2a2a]">
            Get started
          </button>
        </div>

        <div className="btn px-4  flex absolute left-[80%] top-[%] cursor-pointer">
          <span className=" text-[20px] pl-4 block md:hidden text-white">
            <FontAwesomeIcon icon={faBars} onClick={() => NavbarToggle()} />
          </span>
        </div>

        {/* ............ toggle navbar */}
        {isOpen && (
          <div className="navbar">
            <nav>
              <ul className="flex flex-col text-white">
                <li className="px-4 py-4">
                  <Link to="/Home_page">HOME</Link>
                </li>
                <li className="px-4 py-4">
                  {" "}
                  <Link to="/Service_page">Service</Link>
                </li>
                <li className="px-4 py-4">
                  {" "}
                  <Link to="/Trainers_page">Trainers</Link>
                </li>
                <li className="px-4 py-4">
                  {" "}
                  <Link to="/Testomonial_page">Testimonial</Link>
                </li>
                <li className="px-4 py-4">
                  {" "}
                  <Link to="/Contact_page">Contact</Link>
                </li>
              </ul>
            </nav>
            <button className="px-2 bg-[#FF0000] text-white w-32 h-8 rounded-md hover:bg-[#ed2a2a] ml-4 md:ml-0">
              Get started
            </button>
          </div>
        )}

        {/* ...........end toggle bar */}
      </header>
      {/* ............pages */}
      <Pages />
    </div>
  );
};

export default Navbar;
