import React from "react";
import { useState, useRef } from "react";

const App = () => {
  const [todo, setToDo] = useState([]);
  const todoVal = useRef();

  const addtoDo = (event) => {
    event.preventDefault();

    if (todoVal.current.value == "") {
      alert("the field is required");
    } else {
      todo.push(todoVal.current.value);

      setToDo([...todo]);

      console.log(todo);

      todoVal.current.value = "";
    }
  };


  const deleteItem = (index) => {

    todo.splice(index, 1);

    setToDo([...todo])

  }

  const edditItem = (index) => {
    
    const updatedVal = prompt("Update the Values")

    todo.splice(index, 1, updatedVal)

    setToDo([...todo])

  }

  return (
    <>
      <h1 className="text-center">ToDo App</h1>

      <div className="row">
        <div className="container">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <form onSubmit={addtoDo}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Item"
                  ref={todoVal}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

      <div className="row">
        <div className="container">
          <div className="col-md-3"></div>

          <div className="col-md-6">

          <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Items</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                  </table>

            {todo.map((item, index) => {
              return (
                <div key={Math.random() * 4}>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>{item}</td>
                        <td>
                          <button className="btn btn-danger" onClick={()=> deleteItem(index)}>delete</button> | &nbsp;
                          <button className="btn btn-success" onClick={()=> edditItem(index)}>edit</button>

                        </td>
                        
                      </tr>
              
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>

          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default App;
