import React from "react";
import MainPages from "./MainPages";
import Admin from "./Admin";

import { Fragment } from "react";

const MainPagesAdmin = () => {
  return (
    <Fragment>
      <MainPages />
      <Admin />
    </Fragment>
  );
};

export default MainPagesAdmin;
