import { useEffect, useState } from "react";
import { Resmenulink } from "../utils/cdn_links";

 const useRestrauntmenu = (resid)=>{

 const[Resinfo , setResinfo] = useState(null);

 useEffect(()=>{
  fetcdata();
 }, []);

 async function fetcdata() {
  let data =await fetch(Resmenulink + parseInt(resid));
  let json =await data.json();
  
  setResinfo(json);

 }

 return Resinfo;
 }
export default useRestrauntmenu;


// import { useEffect, useState } from "react";
// import { Resmenulink } from "../utils/cdn_links";

// const useRestaurantMenu = (resid) => {
//   const [resInfo, setResInfo] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, [resid]); // Fetch data whenever `resid` changes

//   const fetchData = async () => {
//     try {
//       const response = await fetch(Resmenulink + parent(resid));
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const json = await response.json();
//       setResInfo(json);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return { resInfo, error }; // Return both resInfo and error
// };

// export default useRestaurantMenu;
