import { useContext } from 'react';
import { MyContext } from './con-api'
import Increase from './increase';
import Decrease from './decrease';
const Counter = () => {
    const { counter } = useContext(MyContext);
    return (
        <>
            <h1>{counter}</h1>
            <Increase />
            <Decrease />
        </>
    )
}
export default Counter;