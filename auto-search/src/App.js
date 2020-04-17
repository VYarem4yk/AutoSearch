import React, { Fragment } from "react";
import "./App.css";
import Header from "./elements/header";
import NavComponents from "./elements/navComponent/navComponents";

function App() {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <nav>
        <NavComponents />
      </nav>
      <div>Hello</div>
    </Fragment>
  );
}

export default App;
