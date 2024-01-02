import React, { useState } from "react";

function Main() {
  const [name, setName] = useState(""); // Set initial value for state

  function show() {
    setName("Welcome to REACT"); // Call setName function to update state
  }

  function hide() {
    setName(""); // Call setName function to update state
  }

  return (
    <div>
      <h1 className="text-center mt-5">Welcome!</h1>
      <div className="d-flex justify-content-center m-3 p-1 bg-light">
        <div className="p-5 mt-3 text-center bg-dark border-danger">
          <img src="https://i.gifer.com/7N3z.gif" alt="" />
          <h1>{name}</h1>
          <div className="mt-5">
            <button className="btn btn-success mx-2" onClick={show}>
              Show
            </button>
            <button className="btn btn-danger" onClick={hide}>
              Hide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
