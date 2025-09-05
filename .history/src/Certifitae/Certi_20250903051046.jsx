import python from ".python.png";
import html from ".html.jpg";
import go from ".googleanalytics.jpg";

function Cert() {
  return (
    <div>
      <h1 style={{ fontFamily: 'Playfair Display' }}>Certifications & Achievements</h1>
      <div id="card-skills">
        <ul>
          <img src={python} alt="Python Certificate" />
          <img src={html} alt="HTML Certificate" />
          <img src={go} alt="Google Analytics Certificate" />
        </ul>
      </div>
    </div>
  );
}

export default Cert;
