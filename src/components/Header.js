import { LOGO_LINK } from "../utils/cdn_links";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
// import Grocery from "./Grocery";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const status = useOnlinestatus();

  return (
  
    
    <div className="header flex justify-between mx-12 my-4 mt-6 items-center  ">
      <Link to="/">
      <div >
        <img className="rounded-full w-24 h-24" src={LOGO_LINK} />
      </div></Link>
       
       <div className="text-2xl"> online status : {status? "🟢" : "🔴"}</div>


      <div className="nav-items">
        <ul className="flex gap-8 text-2xl font-semibold items-center">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contactus">Contact us</Link></li>
          <li><Link to="/Grocery">Grocery</Link></li>
          <li>Cart</li> 
          <button className=" px-4 py-2 text-lg text-white font-semibold bg-blue-500 rounded-md mr-4"
             onClick={
              ()=>{
                 btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
              }
             }
          >{btnName}</button>
        </ul>
      </div>
    </div>
  );
};


export default Header;
