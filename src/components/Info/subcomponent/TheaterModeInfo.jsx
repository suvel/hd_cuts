import React from "react";
import Heading from "../../Heading";
import Description from "../../Description";

const TheaterModeInfo = ({ title, desc }) => {
  return (
    <>
      <Heading>{title}</Heading>
      <Description>{desc}</Description>
    </>
  );
};

export default TheaterModeInfo;
