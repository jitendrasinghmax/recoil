import { useContext } from "react"
import { MyContext } from "./con-api"

const Increase=()=>{
    const {setCounter}=useContext(MyContext);
    console.log("decrease component renderd")
    return(
        <button onClick={()=>setCounter(c=>c+1)}>increase</button>
    )
}
export default Increase;