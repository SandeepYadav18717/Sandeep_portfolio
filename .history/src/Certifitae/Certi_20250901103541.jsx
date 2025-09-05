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
        <Card 
          className="card1"
     {img.map((image, index) => (
          <Card key={index} className={`card${index + 1}`}>
            <img src={image} alt={`Certification ${index + 1}`} />
          
        />
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
