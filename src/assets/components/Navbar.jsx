import { Routes, Route, Link } from "react-router-dom";
import Home_page from '../pages/Home_page'
import Service_page from "../pages/Service_page";
import Trainers_page from "../pages/Trainers_page";
import Testomonial_page from "../pages/Testomonial_page";
import Contact_page from '../components/Contact'
import React, {useState} from 'react'
import hero from '../images/hero.png'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const navbar = () => {
 
 const [isOpen, setIsOpen] = useState(false);

 const Navbar_toggle = () => {
   setIsOpen(!isOpen);
 };


  return (
    <div className="">
      <section className="secttion1  ">
        <div className="Main_div flex justify-between mx-20 border-b-2 border-white">
          {/* ....LOGO...... */}
          <div className="pt-10">
            <h4 className="text-white text-[17px]">
              IRON <span className="text-[#FF0000]">GYM</span>
            </h4>
          </div>
          {/* .... navbar */}
          <div className="navbar ">
            {/* md:bg-yellow-700 lg:bg-green-800 */}
            <nav className="  ">
              <ul className="text-white flex justify-center pt-10">
                <li className="px-8 text-sm text-[#FF0000]">
                  <Link to="/Home_page">HOME</Link>
                </li>
                <li className="px-8 text-sm">
                  <Link to="/Service_page">SERVICE</Link>
                </li>
                <li className="px-8 text-sm">
                  <Link to="/Trainers_page">TRAINERS</Link>
                </li>
                <li className="px-8 text-sm">
                  <Link to="/Testomonial_page">TESTEMONIAL</Link>
                </li>
                <li className="px-8 text-sm">
                  <Link to="/Contact_page">CONTACT</Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* ......Button */}
          <div className="py-6 ">
            <button className="btn_1 bg-[#FF0000] text-white w-40 h-12 rounded-md hover:bg-[#ed2a2a]">
              Started Now
            </button>
            <span
              onClick={Navbar_toggle}
              className="text-white md:hidden fabar_iocn  "
            >
              <FontAwesomeIcon icon={faBars} />
            </span>
            {isOpen && (
              <nav className="text-white">
                <li>a</li>
                <li>b</li>
              </nav>
            )}
          </div>
        </div>
        {/* ............pages */}
        <Routes>
          <Route path="/Home_page" element={<Home_page />}></Route>
          <Route path="/Service_page" element={<Service_page />}></Route>
          <Route path="/Trainers_page" element={<Trainers_page />}></Route>
          <Route
            path="/Testomonial_page"
            element={<Testomonial_page />}
          ></Route>
          <Route path="/Contact_page" element={<Contact_page />}></Route>
        </Routes>
      </section>
    </div>
  );
};
export default navbar;
