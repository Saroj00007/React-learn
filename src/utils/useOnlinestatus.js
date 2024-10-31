import { useEffect, useState } from "react";

const useOnlinestatus = ()=>{
    const [Onlinestatus , setOnlinestatus] = useState(true);

    useEffect(()=>{
       status();
    }, [])

 const status = ()=>{
    window.addEventListener("offline" , ()=>{
        setOnlinestatus(false)
    })
    window.addEventListener("online" , ()=>{
        setOnlinestatus(true)
    })
 }

    return Onlinestatus;
}

export default useOnlinestatus;