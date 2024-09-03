


import React  from "react";
import ReactDOM from "react-dom/client";

const heading  = React.createElement("h1" , {
    id: "title",
    class: "class" 
  } , "Namaste Everyone this is reformed code");
  const heading2  = React.createElement("h2" , {
    id: "title",
    class: "class"
  } , "Namaste Everyone second time this is the second tim ");
  

  const div = React.createElement("div",  { id:"hello"} ,// props " fancy term "
   [heading , heading2]);


  const root  = ReactDOM.createRoot(document.getElementById("root"));

  root.render(div);  