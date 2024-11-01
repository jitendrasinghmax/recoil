import { useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms";

const Increase=()=>{
    const setCounter=useSetRecoilState(counterAtom);//write values
    console.log("decrease component renderd")
    return(
        <button onClick={()=>setCounter(c=>c+1)}>increase</button>
    )
}
export default Increase;