import React from "react";
import UploadBox from "./components/UploadBox.jsx";
import "./App.css";

function App() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>AI Resume Analyzer</h1>
      <UploadBox />
    </div>
  );
}

export default App;