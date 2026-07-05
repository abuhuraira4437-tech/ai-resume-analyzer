import React, { useState } from "react";

export default function UploadBox() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file first");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      // safety check
      if (!res.ok) {
        setError(data?.message || "Server error");
      } else {
        setResult({
          score: data?.score ?? 0,
          foundSkills: Array.isArray(data?.foundSkills) ? data.foundSkills : [],
          missingSkills: Array.isArray(data?.missingSkills) ? data.missingSkills : [],
          message: data?.message || "Done"
        });
      }

    } catch (err) {
      setError("Network error - backend not reachable");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        background: "white",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}
    >
      <h2>Upload CV</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Analyzing CV..." : "Analyze CV"}
      </button>

      {/* ERROR */}
      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {error}
        </p>
      )}

      {/* LOADING */}
      {loading && (
        <p style={{ color: "blue", marginTop: "10px" }}>
          Please wait, analyzing your CV...
        </p>
      )}

      {/* RESULT */}
      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>CV Score: {result.score}/100</h3>

          <h4>Skills Found:</h4>
          <p>
            {result.foundSkills.length > 0
              ? result.foundSkills.join(", ")
              : "None"}
          </p>

          <h4>Missing Skills:</h4>
          <p>
            {result.missingSkills.length > 0
              ? result.missingSkills.join(", ")
              : "None"}
          </p>

          <p style={{ color: "green" }}>
            {result.message}
          </p>
        </div>
      )}
    </div>
  );
}