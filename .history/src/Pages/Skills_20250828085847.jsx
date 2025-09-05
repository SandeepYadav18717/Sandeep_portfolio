import { Card } from "../Cards/Cards"
import "./Skills.css"

function Skills() {
  return (
    <>
      <h1> Technologies & Tools</h1>
      <div id="card-skill">
        <Card
          className="card-skill-1"
          title={<h3>⚛️</h3>}
          description="React"
        />
        <Card
          className="card-skill-2"
          title={<h3>🌐</h3>}
          description="HTML / CSS"
        />
        <Card
          className="card-skill-3"
          title={<h3>📜</h3>}
          description="JavaScript"
        />
        <Card
          className="card-skill-4"
          title={<h3>🗄️</h3>}
          description="SQL"
        />
      </div>

      {/* another div line 2 */}
      <div id="card-skill">
        <Card
          className="card-skill-1"
          title={<h3>🐼</h3>}
          description="Pandas"
        />
        <Card
          className="card-skill-2"
          title={<h3>🐍</h3>}
          description="Python"
        />
        <Card
          className="card-skill-3"
          title={<h3>🐙</h3>}
          description="github"
        />
        <Card
          className="card-skill-4"
          title={<h3>🛠️</h3>}
          description="Tools"
        />
      </div>
    </>
  )
}

export default Skills;
