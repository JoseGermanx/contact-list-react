import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import ContactContext from "../store/appContext";

const Home = () => {
  return (
    <div
      className="container-fluid d-flex flex-column mt-5"
      style={{ minHeight: "100vh" }}
    >
      <div className="row flex-grow-1">
        <div className="col-12 d-flex flex-column">
          <h2>Renderizar Lista</h2>
          <div className="d-flex flex-wrap">
            <ContactCard />
            <ContactCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
