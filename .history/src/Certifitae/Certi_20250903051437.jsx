
import Card from "../Cards/Cards";

import "./certi.css";
import go from "./Googleanalytics.jpg";
import Html from "./Html.jpg";
import python from "./python.png";

function Cert() {
  return (
    <div>
<h1 style={{ fontFamily: 'Playfair Display' }}> Certifications & Achievements</h1>
      <div id="card-skills">
  <Card
       
          <img src={python} alt="python" />

          <img src={Html} alt="" />

          <img src={go} />
         
        </ul>
</Card>      

      </div>

          
    </div>
  );
}

export default Cert;
