# AI Resume Analyzer

A full-stack web application that allows users to upload their resume, analyze its content, detect technical skills, and generate a basic resume score with improvement suggestions.

## Features

* Upload resume in PDF format
* Extract text from uploaded resume
* Detect technical skills from resume content
* Generate a resume score
* Display detected and missing skills
* Responsive user interface
* REST API built with Node.js and Express

## Tech Stack

### Frontend

* React.js
* JavaScript
* HTML
* CSS
* Vite

### Backend

* Node.js
* Express.js
* Multer
* pdf-parse
* CORS

## Project Structure

```text
ai-resume-analyzer/
│
├── backend/
│   ├── uploads/
│   ├── server.js
│   ├── package.json
│
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│
└── README.md
```

## Installation

### Clone the repository

```bash
git clone https://github.com/abuhuraira4437-tech/ai-resume-analyzer.git
```

### Go to the project folder

```bash
cd ai-resume-analyzer
```

## Backend Setup

```bash
cd backend
npm install
node server.js
```

The backend will run on:

```text
http://localhost:5000
```

## Frontend Setup

Open another terminal.

```bash
cd client
npm install
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

## How It Works

1. Open the application.
2. Upload a PDF resume.
3. The backend extracts text from the resume.
4. The application detects matching technical skills.
5. A resume score is generated.
6. Detected skills and missing skills are displayed.

## Future Improvements

* AI-powered resume feedback
* ATS compatibility analysis
* Job description matching
* Resume improvement suggestions
* User authentication
* Downloadable analysis report

## Author

**Huraira**

GitHub: https://github.com/abuhuraira4437-tech

---

If you found this project useful, consider giving it a ⭐ on GitHub.
