
import Increase from './increase';
import Decrease from './decrease';
import { useRecoilValue } from 'recoil';
import { counterAtom } from './store/atoms';
const Counter = () => {
    const counter=useRecoilValue(counterAtom)//read values
    return (
        <>
            <h1>{counter}</h1>
        </>
    )
}
export default Counter;