import { useContext } from "react"
import { MyContext } from "./con-api"

const Decrease=()=>{
    const {setCounter}=useContext(MyContext);
    console.log("Increase component renderd")
    return(
        <button onClick={()=>setCounter(c=>c-1)}>decrease</button>
    )
}
export default Decrease;