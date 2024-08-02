import React from "react";
import MainNav from "./MainNav";
import MainContent from "./MainContent";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main-container">
     <MainNav />
     <MainContent />
    </div>
  );
};

export default Main;


