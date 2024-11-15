import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate()
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand"
          to={"/"}>
            Contact List App
          </Link>
          <div className="d-flex justify-content-end mb-3">
            <button
              className="btn btn-success mt-2 me-3"
              style={{ width: '150px' }}
              onClick={() => navigate('/add')}
            >
              Add new contact
            </button>
            <button
              className="btn btn-danger mt-2 me-3"
              style={{ width: '150px' }}
              onClick={() => navigate('/delete')}
            >
              Delete agenda
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
