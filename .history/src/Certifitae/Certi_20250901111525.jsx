import { Card } from "../Cards/Cards";
import "./certi.css"
import python from "./python.png";

function Cert() {
 
  return (
    <div>
         <h1> Certifications & Achievements</h1>
      <div id="card-skills">
        
        <Card 
          className="card1"
 
          
        />
        <img src={python} alt="" style={{height:"200px",width:"200px",}}/>
        <Card
          className="card2"
        
        />
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
