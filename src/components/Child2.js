import React,{useState} from "react"
import Style from "./style.css"

const Child2 = ({SetText}) =>{

    function handleClick(e){
       SetText(e.target.innerText)
    }

    return (
        <div class="child2">
             <h1>Child Component</h1>  
             <button id="btn" onClick={handleClick}>Option 2</button>
        </div>
    )
    
    }
    
    export default Child2;