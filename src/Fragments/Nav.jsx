import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  return (
    <Fragment>
      <section id="NAVIGATION" className=" w-[40%] mx-auto pt-10">
        <div id="CONTAINER-TEKS" className=" flex justify-center">
          <Link to="/">
            <div
              className={`text-lg px-3 rounded-l-xl border-solid border-2 border-blue-500 hover:bg-blue-500 transition-all duration-500 hover:cursor-pointer hover:text-white focus:bg-blue-500 ${
                location.pathname === "/" ? "bg-blue-500 text-white" : ""
              }`}
            >
              <h1 className="font-bold">Pages</h1>
            </div>
          </Link>
          <Link to="/Admin">
            <div
              className={`text-lg px-3 rounded-r-xl border-solid border-2 border-blue-500 hover:bg-blue-500 transition-all duration-500 hover:cursor-pointer hover:text-white ${
                location.pathname === "/Admin" ? "bg-blue-500 text-white" : ""
              }`}
            >
              <h1 className="font-bold">Admin</h1>
            </div>
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default Nav;
