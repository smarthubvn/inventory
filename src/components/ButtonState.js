import { useState } from "react"
import Data from "./Data";

//  Build component by function and Hook

function ButtonState() {
    const [title, setTitle] = useState("");
    const [count, setCount] = useState(0);

    const updateTitleClicked = () => {
        setTitle("We now have a title");
    };    
    const updateCounterCliked = () => {
        setCount(count + 1);
    };
    
    console.log(useState("console log useState"));

    return (
        <div>
            {/* <p>Title: {title}</p>
            <p>Counter: {count}</p> */}
            <Data title={title} count={count} /> 
            <button onClick={updateTitleClicked}>Update Title</button>
            <button onClick={updateCounterCliked}>Update Counter</button>
        </div>
    )
}

export default ButtonState