import { useState } from "react";
import "./certi.css";
import python from "./python.png";
import Html from "./Html.jpg";
import go from "./Googleanalytics.jpg";
import C from "./Clang.png";

function Cert() {
  // Array of certificates
  const certificates = [python, Html, go, C];

  // State for current index
  const [index, setIndex] = useState(0);

  // Next certificate
 const nextCert = () => {
    let newIndex = index + 1;
    if (newIndex >= certificates.length) {
      newIndex = 0; // last ke baad wapas first
    }
    setIndex(newIndex);
  };

  // Prev button → index - 1
  const prevCert = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = certificates.length - 1; // first ke pehle last
    }
    setIndex(newIndex);
  };

  return (
    <div className="cert-container">
      <h1 style={{ fontFamily: "Playfair Display", textAlign: "center" }}>
        Certifications & Achievements
      </h1>

      <div id="card-skills">
        <img
          src={certificates[index]}
          alt="certificate"
          style={{
            width: "600px",
            height: "400px",
            objectFit: "cover",
            border: "2px solid #333",
            borderRadius: "12px",
          }}
        />
      </div>

      <div className="btns" style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={prevCert}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            borderRadius: "8px",
            background: "#444",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          ⬅ Prev
        </button>
        <button
          onClick={nextCert}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            background: "#444",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}

export default Cert;
