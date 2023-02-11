import "./App.css";
import Header from "./components/header/Header";
// bootstarp
import "bootstrap/dist/css/bootstrap.min.css";
// router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import WarhouseRentChennai from "./pages/WarhouseRentChennai";
import ItParksChennai from "./pages/ItParksChennai";
import Propertiessale from "./pages/Propertiessale";
import Contact from "./pages/Contact";
import Enquiry from "./pages/Enquiry";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/it-parks-chennai" element={<ItParksChennai />} />
          <Route path="/properties-for-sale" element={<Propertiessale />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiery" element={<Enquiry />} />
          <Route
            path="/warhouse-rent-chennai"
            element={<WarhouseRentChennai />}
          />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
