
import "./Home.css";
import Linkdin from "../Pages/Linkdin.png"; // Adjust the path based on the actual location
import insta from"../Pages/instagram.png";
function Home() {
  return (
    <>
      
     <div id="detail">
    

     <div id="overlay">I'm sandeep Yadav
       <div id="Linkdin">
        <img src={Linkdin} alt=""
        style={{
        width: "50px",
        height: "50px",
         borderRadius: "50%",
        objectFit: "cover",
        border: "2px solid #0A66C2",
        marginTop: "0px"   }} />
       </div>
      <div id="Instagram">
        <img src={insta} alt=""
        style={{
        width: "50px",
        height: "50px",
         borderRadius: "50%",
        objectFit: "cover",
        border: "2px solid #0A66C2",
           marginTop: "250px"   }} />
        
      </div>
      <div id="twitter"></div>
     </div>
     <div id="bg-Photo">
     
     </div>
      
     <div id="intro">
     
          I am a dedicated and passionate individual with a strong interest in
          software development and data analytics. I am eager to apply my skills
          and knowledge in a professional setting, contributing to innovative
          projects and collaborating with a dynamic team. I am committed to
          continuous learning and growth in the ever-evolving field of
          technology.
     
    </div>   
        

   <div id="name">
    
          Sandeep Yadav
      </div> 
        
   <div id="role">
          Aspiring Software Developer
      

     </div></div>
     <br/><br/><br/><br/><br/>
    </>
  );
}

export default Home;