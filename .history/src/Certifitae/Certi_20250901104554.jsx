import { Card } from "../Cards/Cards";
import "./certi.css"

function Cert() {
  const img=[
    "Html.jpg"
  ]
  return (
    <div>
         <h1> Certifications & Achievements</h1>
      <div id="card-skills">
            <img src="Html.jpg" alt=""/>
        <Card 
          className="card1"
       
          
        />
        <img src="Html.jpg" alt="" style={{height:200px}}/>
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
