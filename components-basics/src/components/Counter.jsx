import { useState } from "react";

export default function Counter(props) {
    const [count, setCount] = useState(0);

    //Best practice: Use the functional form of setState when updating state based on the previous state
    const incrementClickHandler = () => {
        setCount (oldValue => oldValue + 1)
    }
    //Use this when you don't care what the previous state was
    const clearCounterHandler = () => {
        setCount(0)
    }

    if(count < 0) {
        return(
            <div>
                <h1>Kakvi igri4ki si igrae6?</h1>
            </div>
        )
    }

    return (
        <div>
            <h3>Counter</h3>

            <p>Count: {count}</p>

            <button onClick={incrementClickHandler}>+</button>
            <button onClick={clearCounterHandler}>Clear</button>
            <button onClick={() => setCount (count -1)}>-</button>
        </div>
    );
}