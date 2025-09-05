import { useState } from "react";
import "./certi.css";
import python from "./python.png";
import Html from "./Html.jpg";
import go from "./Googleanalytics.jpg";
import C from "./Clang.png";

function Cert() {
  const certificates = [
    { img: python, text: "Python Programming Certificate" },
    { img: Html, text: "HTML5 Web Development Certificate" },
    { img: go, text: "Google Analytics Certificate" },
    { img: C, text: "C Language Programming Certificate" },
  ];

  const [count, setCount] = useState(0);

  // Next button → count + 1
  const nextCert = () => {
    setCount((count + 1) % certificates.length);
  };

  // Prev button → count - 1 (modulus trick)
  const prevCert = () => {
    setCount((count - 1 + certificates.length) % certificates.length);
  };

  return (
    <div className="cert-container">
      <h1 style={{ fontFamily: "Playfair Display", textAlign: "center" }}>
        Certifications & Achievements
      </h1>

      <div
        className="cert-card"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
          marginTop: "30px",
        }}
      >
        {/* Image */}
        <img
          src={certificates[count].img}
          alt="certificate"
          style={{
            width: "300px",
            height: "200px",
            objectFit: "cover",
            border: "2px solid #333",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        />

        {/* Text */}
        <div
          className="cert-text"
          style={{
            maxWidth: "400px",
            fontFamily: "Georgia, serif",
            fontSize: "18px",
            color: "#333",
          }}
        >
          <p>{certificates[count].text}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="btns" style={{ marginTop: "20px", textAlign: "center" }}>
        <button onClick={prevCert}>⬅ Prev</button>
        <button onClick={nextCert} style={{ marginLeft: "10px" }}>
          Next ➡
        </button>
      </div>
    </div>
  );
}

export default Cert;
