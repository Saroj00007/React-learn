import { LOGO_LINK } from "../utils/cdn_links";
import { useState } from "react";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_LINK} />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className="btn"
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
