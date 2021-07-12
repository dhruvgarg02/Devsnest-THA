import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    let increment = () => {
        setCount(count + 1);
    }
    return (
        <button className='counter' onClick = {increment} > {count} </button>
    )
}

export default Counter