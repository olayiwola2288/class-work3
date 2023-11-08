import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  let myStyle = {
    backgroundColor: "black",
    color: "red",
  };
  return (
    <div>
      <div className="bg-gray-800 text-white py-4 flex justify-center">
        <div className="hover:blue-400">
          <Link to="/Map" className="px-2">
            MAP
          </Link>
          <Link to="/Form" className="px-2">
            Form
          </Link>
          <Link to="/Input " className="px-2">
            input
          </Link>
          <Link to="/Api" className="px-2">
            Api
          </Link>
          <Link to="/Event" className="px-2">
            Event
          </Link>
          <Link to="/About:id" className="px-2">
            About
          </Link>
          <Link to="/signIn" className="px-2">
            LOG IN
          </Link>
          <Link to="/formik" className="px-2">
            FORMIK
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
