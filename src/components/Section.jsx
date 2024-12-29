import React from "react";
import "../styles/restStyles/Section.css";

const Section = ({ id, title, children, className }) => {
  return (
    <section id={id} className={`section ${className}`}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
