import React, { Fragment } from "react";

const NAV_ARR = ["Cars", "Parts", "News", "Price"];

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
