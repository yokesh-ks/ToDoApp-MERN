import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function InputToDO() {
  const [description, setDescription] = useState("");

  function handleChange(e) {
    setDescription(e.target.value);
  }

  async function Submit(e) {
    e.preventDefault();
    try {
      const body = {
        newToDo: {
          description: description,
        },
      };

      await axios.post("/api/v1/todos", body);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <Fragment>
      <h1 className="text-center mt-5">To Do List</h1>
      <form className="d-flex mt-5" onSubmit={Submit}>
        <input
          type="text"
          className="form-control"
          name="description"
          value={description}
          onChange={handleChange}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
}

export default InputToDO;
