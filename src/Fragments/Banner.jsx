import React from "react";
import { Fragment } from "react";

const Banner = (props) => {
  const {title} = props;
  return (
    <Fragment>
      <section
        id="BANNER"
        className="bg-gray-400 h-20 flex justify-center items-center font-bold text-3xl"
      >
        <div>
          <h1>{title}</h1>
        </div>
      </section>
    </Fragment>
  );
};

export default Banner;
