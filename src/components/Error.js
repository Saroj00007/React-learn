 import { useRouteError } from "react-router-dom";
 
const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
        <h1>OOPS !!!!!!!!!!!!!</h1>
        <h1>SOMETHING WENT WRONG</h1>
        <h2>{err.data}  {err.status}</h2>
    </div>
  )
}

export default Error;