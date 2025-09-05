
import Card from "../Cards/Cards";   

import "./certi.css";
import python from "./python.png";
import Html from "./Html.jpg";
import image from "./image_cd97ae3d-5304-4b07-9a13-3357f6d9babd20230831_163952.jpg";
import go from "./Googleanalytics.jpg";

function Cert() {
  return (
    <div>
<h1 style={{ fontFamily: 'Playfair Display' }}> Certifications & Achievements</h1>
      <div id="card-skills">
  <Cad      
        <ul>
          <img src={python} alt="python" />

          <img src={Html} alt="" />

          <img src={go} />
         
        </ul>


      </div>

      
    </div>
  );
}

export default Cert;
