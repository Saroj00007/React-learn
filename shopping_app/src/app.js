import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Compo/Header";

const heading = React.createElement(
  "h1",
  {},
  "hello this is the shoppig app of saroj kandel"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// main component
const Applayut = () => {
  return (
    <div className="App-Layout">
      <Header />
    </div>
  );
};

root.render(<Applayut />);
