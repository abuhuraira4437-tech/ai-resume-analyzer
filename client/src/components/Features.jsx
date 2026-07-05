import { FaRobot, FaChartPie, FaFileAlt, FaSearch } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaRobot />,
      title: "AI Analysis",
      text: "Get intelligent feedback on your resume instantly."
    },
    {
      icon: <FaChartPie />,
      title: "ATS Score",
      text: "See how well your resume performs for ATS systems."
    },
    {
      icon: <FaSearch />,
      title: "Keyword Detection",
      text: "Find missing keywords required for your target role."
    },
    {
      icon: <FaFileAlt />,
      title: "Resume Report",
      text: "Download a professional analysis report."
    }
  ];

  return (
    <section className="features container">
      <h2>Why Use AI Resume Analyzer?</h2>

      <div className="feature-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;