import { useState } from 'react';

export default function Timer(props) {
    const [time, setTime] = useState(5);

    setTimeout(() => {
        setTime (time - 1);
    }, 2000)
    return (
        <div>
            <h3>Timer</h3> 
            <p>{time}</p>
        </div>
    );
}