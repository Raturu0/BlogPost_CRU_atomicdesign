import React from "react";
import { Fragment } from "react";
import Banner from "../Fragments/Banner";
import Posts from "../Fragments/Posts";
import Nav from "../Fragments/Nav";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const MainPages = (props) => {
  return (
    <Fragment>
      <Banner title={"Blog Post"}/>
      <section className="bg-gray-200">
        <Nav />
        <Posts />
      </section>
    </Fragment>
  );
};

export default MainPages;
