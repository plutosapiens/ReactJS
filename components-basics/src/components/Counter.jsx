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

//Not so good practice

    // if(count < 0) {
    //     return(
    //         <div>
    //             <h1>Kakvi igri4ki si igrae6?</h1>
    //         </div>
    //     )
    // }

//slightly better 
    // let warning = null;

    // if(count < 0) {
    //     warning = <h2>Kakvi igri4ki si igrae6?</h2>
    // }
    // if(count < -3) {
    //     warning = <h1>Nqma takava naglost!</h1>
    // }


    return (
        <div>
            <h3>Counter</h3>
{/* Conditional rendering with if operators */}
            {count < 0
            ? <h2>Kakvi igri4ki si igrae6?</h2>
            : <h2>Good! Good!</h2>
            }
{/* Conditional rendering with boolean operator */}
            {count == 0 && <p>Please start counting!</p>}


            <p>Count: {count}</p>

            <button onClick={incrementClickHandler}>+</button>
            <button onClick={clearCounterHandler}>Clear</button>
            <button onClick={() => setCount (count -1)}>-</button>
        </div>
    );
}