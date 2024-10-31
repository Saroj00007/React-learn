import { LOGO_LINK } from "../utils/cdn_links";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
// import Grocery from "./Grocery";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const status = useOnlinestatus();

  return (
  
    
    <div className="header">
      <Link to="/">
      <div className="logo-container">
        <img src={LOGO_LINK} />
      </div></Link>
       
       <div> online status : {status? "🟢" : "🔴"}</div>


      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contactus">Contact us</Link></li>
          <li><Link to="/Grocery">Grocery</Link></li>
          <li>Cart</li>
          <button className="btn font-semibold"
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
