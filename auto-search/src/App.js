import React, { Fragment } from "react";
import "./App.css";
import NavComponents from "./elements/navComponent/navComponents";
import Header from "./elements/header";
import News from "./elements/news/newsBlock";

function App() {
  return (
    <Fragment>
      <Header />
      <NavComponents />
      <News />
    </Fragment>
  );
}

export default App;
