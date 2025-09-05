import { Card } from "../Cards/Cards";
import "./certi.css"
import python from "./python.png";
import Html from".Html .jpg";

function Cert() {
 
  return (
    <div>
         <h1> Certifications & Achievements</h1>
      <div id="card-skills">
      
         
           <img src={python} alt="" />
       
         <img src={Html} alt="" />
       
        <Card
          className="card3"
          
        />
        <Card
          className="card4"
          
        />
      </div>

      
      </div>
  
   
  );
}

export default Cert;
