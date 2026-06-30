import "./index.css";

const skills = ["HTML", "CSS", "Git", "GitHub"];

function App() {
  return (
    <div className="app">
      <header className="hero">
        <nav className="nav">
          <div className="logo">Divanshu Choudhary</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="badge">B.Tech CSE Student</p>
          <h1>Hi, I'm Divanshu Choudhary</h1>
          <p className="subtitle">
            I am a B.Tech CSE student and currently learning DevOps.
          </p>
          <div className="hero-actions">
            <a href="#about" className="btn primary">Know More</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            I am a B.Tech CSE student who is currently learning DevOps and building a strong foundation in web technologies.
          </p>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2>Contact</h2>
          <p>Email: choudharydivanshu95@gmail.com</p>
        </section>
      </main>
    </div>
  );
}

export default App;