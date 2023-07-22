import React from "react";
import "./style.css";
import Mealmenu from "./Mealmenu";
import { FaSearch } from "react-icons/fa";
import Note from "./Note";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div className="page-container">
      <div className="yellow-header"></div>
      <div className="logo-container">
        <img
          src="katex/src/components/Logo_02_32x32.png"
          className="logo"
          alt="logo"
        />
        <FaSearch className="search-icon" />
      </div>
      <Mealmenu />
      <br />
      <ShoppingList />
      <br></br>
      <Note />
      <Footer />
    </div>
  );
};

export default Homepage;
