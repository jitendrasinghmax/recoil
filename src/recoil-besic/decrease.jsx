
import { useSetRecoilState } from "recoil"
import { counterAtom } from "./store/atoms"

const Decrease=()=>{
    const setCounter=useSetRecoilState(counterAtom);//write values
    console.log("Increase component renderd")
    return(
        <button onClick={()=>setCounter(c=>c-1)}>decrease</button>
    )
}
export default Decrease;