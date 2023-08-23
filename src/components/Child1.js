import React,{useState} from "react"
import Style from "./style.css"

const Child1 = ({SetText}) =>{

    function handleClick(e){
       SetText(e.target.innerText)
    }

    return (
        <div class="child1">
             <h1>Child Component</h1>  
             <button id="btn" onClick={handleClick}>Option 1</button>
        </div>
    )
    
    }
    
    export default Child1;