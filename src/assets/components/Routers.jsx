import { Routes, Route, Link } from "react-router-dom";
import Home_page from "../pages/Home_page";
import Service_page from "../pages/Service_page";
import Trainers_page from "../pages/Trainers_page";
import Testomonial_page from "../pages/Testomonial_page";
import Contact_page from "../components/Contact";
function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home_page />}></Route>
        <Route path="/Home_page" element={<Home_page />}></Route>

        <Route path="/Service_page" element={<Service_page />}></Route>
        <Route path="/Trainers_page" element={<Trainers_page />}></Route>
        <Route path="/Testomonial_page" element={<Testomonial_page />}></Route>
        <Route path="/Contact_page" element={<Contact_page />}></Route>
      </Routes>
    </div>
  );
}
export default Routers;
