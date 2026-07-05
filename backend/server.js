const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const pdf = require("pdf-parse");

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

// Simple skill list (basic MVP)
const skillsDB = [
  "javascript",
  "react",
  "node",
  "express",
  "html",
  "css",
  "sql",
  "mongodb"
];

function analyzeText(text) {
  const lower = text.toLowerCase();

  let foundSkills = [];
  skillsDB.forEach(skill => {
    if (lower.includes(skill)) {
      foundSkills.push(skill);
    }
  });

  // simple scoring logic
  let score = Math.round((foundSkills.length / skillsDB.length) * 100);

  let missingSkills = skillsDB.filter(s => !foundSkills.includes(s));

  return {
    score,
    foundSkills,
    missingSkills
  };
}

app.get("/", (req, res) => {
  res.send("Backend working");
});

app.post("/analyze", upload.single("file"), async (req, res) => {
  try {
    const dataBuffer = fs.readFileSync(req.file.path);
    const data = await pdf(dataBuffer);

    const result = analyzeText(data.text);

    res.json({
      message: "Analysis complete",
      ...result
    });

  } catch (err) {
    res.json({ message: "Error analyzing CV" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});