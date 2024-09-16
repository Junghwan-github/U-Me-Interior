import React from "react";

const Section = (props) => {
  return <section className={props.attr}>{props.children}</section>;
};

export default Section;
