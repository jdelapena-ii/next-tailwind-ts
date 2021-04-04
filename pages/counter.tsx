import React, { useState } from 'react';


interface Test {
    children: React.ReactNode
}

function Test( {children} ) {
    let text = "hello";
    return (
        <div>
            {text}
            <div className="m-10 text-teal-500">   
                {children}
            </div>
        </div>
    )
}

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => { setCount(count+1) }
    const handleDecrement = () => { setCount(count-1) }
    return(
        <React.Fragment>
            <Test>Children elements from test component</Test>
            <p>Count is: {count} </p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </React.Fragment>
    )
}


export default Counter;