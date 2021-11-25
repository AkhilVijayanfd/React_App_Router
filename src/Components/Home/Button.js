import React, { useState } from "react";

const Button = () => {
    const [count,SetCount] = useState (1)
    return(
        <div className = "button">
            <h2>Counter Value {count}</h2>
            <br></br>
            <button onClick = {() => SetCount (count+1)}>Update value</button>
        </div>
    );

};
export default Button;