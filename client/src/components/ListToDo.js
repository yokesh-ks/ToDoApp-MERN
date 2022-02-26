import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import EditTodo from "./EditToDo.js";

function ListToDo() {
  const [todos, setTodos] = useState([]);

  async function getToDo() {
    try {
      const response = await axios.get("/api/v1/todos");
      const todoData = await response.data.alltodo;
      setTodos(todoData);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getToDo();
  });

  // delete todo function
  async function deleteTodo(id) {
    try {
      await axios.delete(`/api/v1/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                  <EditTodo todo={todo} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
}

export default ListToDo;
