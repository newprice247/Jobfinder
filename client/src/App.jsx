import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "./assets/styles/index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {

  
  return (
    <>
      <Header />

      {/* the outlet is where the child components will be rendered based on the route specified in main.jsx */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
