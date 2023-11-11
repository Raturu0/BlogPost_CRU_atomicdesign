import React from "react";
import { Fragment } from "react";
import Nav from "../Fragments/Nav";
import Banner from "../Fragments/Banner";
import InputAdmin from "../Fragments/InputAdmin";

const AdminInput = () => {
  return (
    <Fragment>
      <Banner title={"Admin Page"} />
      <section className="bg-gray-200">
        <Nav />
        <InputAdmin />
      </section>
    </Fragment>
  );
};

export default AdminInput;
