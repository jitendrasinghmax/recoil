import { createContext, useState } from "react"
import Counter from "./counter";
export const MyContext=createContext();
const Context=()=>{
    const [counter,setCounter]=useState(0);
    return(
        <MyContext.Provider value={{counter,setCounter}}>
            <Counter></Counter>
        </MyContext.Provider>
    )
}
export {Context};