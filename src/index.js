import React , {lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header  from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
// import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Restrauntmenu from "./components/Restrauntmenu";
// import Grocery from "./components/Grocery";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


// lazy loading 
// dynamic bundling 
// on demand response

const Grocery = lazy(()=>{
  return import("./components/Grocery")
})

const About = lazy(()=>{
  return import("./components/About")
})

const ContactUs = lazy(()=>{
  return import("./components/ContactUs")
})
 


const Applayout = () => {
// const Head = Promotedheader(Header)

  return (
    <div className="app-layout">
      <Header />
       <Outlet />
    </div>
  );
};

console.log(<Error />);

const appeouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element:<Suspense fallback={<h1 className="text-4xl text-center">loading....</h1>}><About /></Suspense>,
        },
        {
          path: "/contactus",
          element:<Suspense fallback={<h1 className="text-4xl text-center">loading....</h1>}><ContactUs /></Suspense>,
        },
        {
          path: "/Grocery",
          element: <Suspense fallback={<h1 className="text-4xl text-center">loading....</h1>}><Grocery /></Suspense>,
        },
        {
          path: "/restraunt/:resid",
          element: <Restrauntmenu />,
        },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appeouter} />);
