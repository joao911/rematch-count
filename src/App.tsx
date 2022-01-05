import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "./store";

import "./app.css";
function App() {
  const dispatch = useDispatch<Dispatch>();

  const { userAge } = useSelector((state: RootState) => state.users);
  return (
    <div className="container">
      <button onClick={() => dispatch.users.downAge("")}>-</button>
      <h1>{userAge}</h1>
      <button onClick={() => dispatch.users.upAge("")}>+</button>
    </div>
  );
}

export default App;
