function Checkbox(){
    const[Php,setPhp]=useState();
    function click(){
      return(setPhp==php);
    }
    return(
        
        <>
    {/* <label>
    <input type="Checkbox"
     id="PHP"
    />
     PHP
     <input type="Checkbox"
    id="PHP"
     />hhjfjdkfjie
     <input type="Checkbox"onClick={click}
     id="PHP"
   placeholder="enter"/>hfdhfi
   
     </label> */}

<input type="radio"
 name="gender"/>male
<input type="radio" id="gender"/>male

     </>
    );
}
export default Checkbox