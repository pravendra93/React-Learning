import React, {useState} from "react";
const Counter = () => {
    const [counter, setCounter] = useState(1);
    return (
        <>
            <h1>Counter : {counter} </h1>
            <button onClick={() => setCounter(counter+1)}>Increament</button>
            <button onClick={() => setCounter(counter-1)}>Decreament</button>
        </>
    )
}

export default  Counter;