function ATSScore() {
  return (
    <section className="results container">

      <h2>Your Resume Analysis</h2>

      <div className="results-grid">

        <div className="result-card score-card">
          <h3>ATS Score</h3>

          <div className="circle">
            92%
          </div>

          <p>Excellent Resume</p>
        </div>

        <div className="result-card">
          <h3>Skills Found</h3>

          <ul>
            <li>✅ React</li>
            <li>✅ JavaScript</li>
            <li>✅ Node.js</li>
            <li>✅ Express.js</li>
            <li>✅ Git</li>
          </ul>
        </div>

        <div className="result-card">
          <h3>Missing Keywords</h3>

          <ul>
            <li>Docker</li>
            <li>AWS</li>
            <li>TypeScript</li>
            <li>CI/CD</li>
          </ul>
        </div>

        <div className="result-card">
          <h3>AI Suggestions</h3>

          <ul>
            <li>Add measurable achievements</li>
            <li>Improve professional summary</li>
            <li>Include more technical keywords</li>
            <li>Highlight major projects</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default ATSScore;