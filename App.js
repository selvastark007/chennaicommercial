import React from "react";

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
import Contact from "./pages/contact/Contact";
import Enquiry from "./pages/Enquiry";
import Footer from "./components/footer/Footer";

import Loader from "./components/Loader/Loader";
import About from "./pages/about/About";
import Description from "./pages/descriptionPage/Description";
import ThankYou from "./pages/thankYouPage/ThankYou";
import Filter2 from "./pages/fiter2/Filter2";
import FakeApi from "./components/fakeApi/FakeApi";
import Apidesc from "./pages/descriptionPage/Apidesc";

const LazyHome = React.lazy(() => import("./pages/home/Home"));

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<Loader />}>
                <LazyHome />
              </React.Suspense>
            }
          />
          <Route path="/it-parks-chennai" element={<ItParksChennai />} />
          <Route path="/properties-for-sale" element={<Propertiessale />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiery" element={<Enquiry />} />
          <Route
            path="/warhouse-rent-chennai"
            element={<WarhouseRentChennai />}
          />
          <Route path="/about" element={<About />} />
          {/* inner pages */}
          <Route path="/description" element={<Description />} />
          <Route path="/description" element={<Apidesc />} />
          <Route path="thankyou" element={<ThankYou />} />
          <Route path="filter2" element={<Filter2 />} />
          <Route path="api" element={<FakeApi />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
