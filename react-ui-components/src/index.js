import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
      </div>
    </div>
  );
};

const Container = ({ children }) => {
  return <div style={{ background: "lightgreen" }}>{children}</div>;
};

window.___REACT_UI_COMPONENTS__APP = App;
window.___REACT_UI_COMPONENTS__Container = Container;
