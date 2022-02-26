import React, { Fragment } from "react";

import InputToDO from "./components/InputToDo";
import ListToDo from "./components/ListToDo";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputToDO />
        <ListToDo />
      </div>
    </Fragment>
  );
}

export default App;
