import { useState } from "react";

useState

function Checkbox(){
    const[Gender,setGender]=useState();
    function value(event){
        setGender(event.target.value)

    }
    
    
    
    return(
        
        <>
     <h1>gender {value}</h1>

<input onClick={value}type="radio"
 name="gender"
 id="male"/>male

<input type="radio"
 name="gender"
 id="male"/>Female

     </>
    );
}
export default Checkbox