import React, { useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { title, body, image, onDelete, onSelect } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const clickMenu = () => {
    // yang tadinya false, jadi - (-) = + (true)
    // begitupun ketika diklik lagi yang tadinya true, jadi - (+) = - (false)
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Fragment>
      <section
        id="CARD"
        className="my-2 sm:w-[75%] mx-auto md:w-[45%] lg:w-[30%] relative"
      >
        <div className="bg-white w-full h-full p-5 shadow-2xl">
          <div id="IMAGE" className="w-full h-52 mx-auto">
            <img src={image} alt="" className="w-full h-full" />
          </div>
          <div id="TITLE">
            <h1 className="text-center font-bold text-2xl">{title}</h1>
          </div>
          <div id="DESC">
            <p className="text-gray-800 text-center line-clamp-5">{body}</p>
          </div>
          <div id="READ" className=" ">
            <div className="bg-blue-500 mt-4 p-2 rounded-lg hover:bg-blue-700">
              <a href="https://www.google.com" target="_blank">
                <div>
                  <h1 className="text-center font-bold text-xl text-white">
                    Baca
                  </h1>
                </div>
              </a>
            </div>
          </div>
        </div>
        {!isMenuOpen && (
          <div
            id="MENU"
            className="absolute right-0 top-1 font-bold hover:cursor-pointer w-[7%] hover:opacity-50 "
            onClick={clickMenu}
          >
            <img
              src="https://cdn.icon-icons.com/icons2/2954/PNG/512/three_dots_vertical_menu_icon_184615.png"
              alt=""
              className="w-full h-full"
            />
          </div>
        )}
        {isMenuOpen && (
          <div
            id="MENU"
            className="absolute -right-1 top-1 font-bold hover:cursor-pointer w-[7%] hover:opacity-50 "
            onClick={clickMenu}
          >
            <h1 className="font-bold text-xl">X</h1>
          </div>
        )}

        {/* jika elemen true maka memberikan pop up di bawah */}
        {isMenuOpen && (
          <div className="absolute right-2 top-10 bg-white border-2 border-solid border-black shadow-md">
            <ul className="">
              <div
                id="UPLOAD-TEKS"
                className="bg-green-600 p-2 hover:bg-green-800"
                onClick={onSelect}
              >
                <Link to="/Admin">
                  <li className="text-black hover:text-gray-800 font-bold">
                    Upload
                  </li>
                </Link>
              </div>
              <div
                id="DELETE-TEKS"
                className="bg-red-600 p-2 hover:bg-red-800"
                onClick={onDelete}
              >
                <Link to="/">
                  <li className="text-black font-bold">Delete</li>
                </Link>
              </div>
            </ul>
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default Card;
