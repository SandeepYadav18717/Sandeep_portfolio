import { Card } from "../Cards/Cards";
import "./certi.css"
import python from "./python.png";
import Html from"./Html.jpg";
import image from "./"

function Cert() {
 
  return (
    <div>
         <h1> Certifications & Achievements</h1>
      <div id="card-skills">
      
         
           <img src={python} alt="python" />
        
       
           <img src={Html} alt="" />
      
        <Card
          className="card4"
          
        />
      </div>

      
      </div>
  
   
  );
}

export default Cert;
