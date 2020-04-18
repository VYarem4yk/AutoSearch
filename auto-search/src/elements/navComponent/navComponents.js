import React, { Fragment } from "react";
import "./styles/index.css";

const NAV_ARR = ["News", "Cars", "Parts"];

function NavComponents() {
  return (
    <ul className="navList">
      {NAV_ARR.map((element) => {
        return <li>{element}</li>;
      })}
    </ul>
  );
}

export default NavComponents;
