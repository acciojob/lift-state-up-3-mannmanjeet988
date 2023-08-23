import React,{useState}  from "react"
import Style from "./style.css"

import Child1 from "./Child1"
import Child2 from "./Child2"


const Parent = () =>{

    const[text,SetText] = useState("")

return (
    <div class="parent">
        <h1>Parent Component</h1> 

        <Child1  SetText={SetText} />
        <Child2  SetText={SetText} />
        <p>Selected Option : {text} </p>
    </div>
)

}

export default Parent;