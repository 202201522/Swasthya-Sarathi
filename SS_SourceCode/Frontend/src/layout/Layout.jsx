import "./Layout.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors/Doctors";
import DoctorsDetails from "../pages/Doctors/DoctorsDetails";
import About from "../components/About/About";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Register from "../components/Register/Register";
import SignupHos from "../pages/SignupHos";

const Layout = () => {
  return (
    <>
      <div className="layout-container">
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/doctor/:id" element={<DoctorsDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/signup-patient" element={<Signup />} />
              <Route path="/signup-hos" element={<SignupHos />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default Layout;
