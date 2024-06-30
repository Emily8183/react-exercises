import React, {useState} from React;

function UseStateSample() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }

    return (
        <div>
            <button onClick={increment}>Click to change the count</button>
        </div>
    )
}