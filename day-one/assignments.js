import React from "react";
import ReactDOM from "react-dom/client";

const top = React.createElement(
  "ul",
  {},

  [
    React.createElement("h1", {}, "heading one"),
    React.createElement("h1", {}, "heading two"),
    React.createElement("h1", {}, "heading three"),
  ]
);

let heading = (
  <div>
    <h1>jsx</h1>
    <h1>jsx</h1>
    <h1>jsx</h1>
  </div>
);

let Component = () => {
  return <h3> i am a component </h3>;
};

let Fnhead = () => {
  return (
    <div>
      <Component />
      <h1 className="title"> functional component</h1>
      <h1> functional component</h1>
      <h1> functional component</h1>
    </div>
  );
};



let User = () => {
  return <div>
<img className="img" src = "https://images.unsplash.com/photo-1726178543393-032f01abacd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"></img>
 <input className="text" type="text"></input>
 <div className="icon"></div>
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<User />);
