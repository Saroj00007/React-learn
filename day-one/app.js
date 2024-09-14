import React from "react";
import ReactDOM from "react-dom/client";

// const heading  = React.createElement("h1" , {

//     id: "title",
//     className: "class",
//     key: "h1"

//   } , "Namaste Everyone this is reformed code");

//   console.log(heading);

//   const heading2  = React.createElement("h2" , {

//     id: "title",
//     className: "class",
//     key:"h2"
//   }
//   , "Namaste Everyone second time this is the second tim ");

//   const list = React.createElement("ul" , {} ,
//     [
//       React.createElement("h1" , {
//      }
//      , "header"),
//        React.createElement("li" , {
//       }
//       , "about uss"),

//       React.createElement("li" , {
//       }
//       , " contact")
//     ]
//   )

// jsx

const Title = () => {
  // this is a react element
  return <h1 className="heading">i am jsx</h1>;
};

var num = 7;
const Headcomponent = () => {
  return (
    <div>
      {/* {} = any type of js can be weitten here   */}
      {num}
      {/* { Title() }   */}

      {/* component composition */}
      <Title />

      <h2> i am heading one</h2>
      <h2>i am heading two</h2>
    </div>
  );
};
// const div = React.createElement("div",  { id:"hello"} ,// props " fancy term "
//  [ head ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Headcomponent />);
