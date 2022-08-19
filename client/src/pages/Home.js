import React from "react";
import Navbar from "../components/Navbar";
import Upcoming from "../components/Upcoming";
import ToDo from "../components/ToDo";
import FamilyList from "../components/FamilyList"




const Home = () => {
    return (
      <div className="container">
        <Navbar />
        <Upcoming />
        <ToDo />
        <FamilyList />
      </div>
    );
  };









export default Home;