// Everything on the site is driven from this file. Edit here, not in App.jsx.
export const profile = {
  name: "Manya Shettigar",
  short: "MANYA",
  title: "Frontend Developer",
  subtitle: "Frontend Developer | Information Science Engineering Student",
  photo: "/manya.png",
  resume: "/resume.pdf", // put your resume PDF in /public and keep this name
  heroText:
    "Passionate about building responsive and user-friendly web applications, developing practical software solutions, and exploring data-driven technologies. Always eager to learn, improve my technical skills, and create meaningful projects.",
  about: [
    "I am an Information Science Engineering student interested in frontend development and software development. I enjoy working on practical projects involving web technologies, Python, data processing, and application development.",
    "I am continuously learning new technologies and improving my programming, problem-solving, and development skills. I look forward to starting my professional journey and contributing to real-world projects.",
  ],
  info: [
    ["Name", "Manya Shettigar"],
    ["Degree", "B.E. Information Science Engineering"],
    ["College", "Alva's Institute of Engineering and Technology"],
    ["University", "VTU"],
    ["Graduation", "2027"],
    ["CGPA", "8.19"],
  ],
};

// TODO: replace placeholders with your real links
export const contact = {
  email: "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/manya-shettigar",
  github: "https://github.com/manya-shettigar",
};

export const skillGroups = [
  { group: "Programming", items: [["Python", "Py"], ["JavaScript", "JS"]] },
  { group: "Frontend Development", items: [["HTML", "H5"], ["CSS", "C3"]] },
  { group: "Data Processing", items: [["Pandas", "Pd"], ["NumPy", "Np"]] },
  { group: "AI and Machine Learning", items: [["LSTM", "LS"], ["RAG", "RG"], ["NLP", "NL"]] },
  { group: "Tools and APIs", items: [["Streamlit", "St"], ["NewsAPI", "NA"], ["yfinance", "yf"]] },
];

export const projects = [
  {
    title: "Event-Driven Stock Market Prediction",
    badge: "Hybrid RAG-LSTM Model",
    image: "", // e.g. "/projects/stock.png" (place file in /public/projects)
    description:
      "An AI-powered stock prediction application combining Retrieval-Augmented Generation (RAG) with an LSTM model.",
    tags: ["Python", "LSTM", "RAG", "NLP", "Streamlit", "NewsAPI", "yfinance", "Pandas"],
    features: [
      "Integrated NewsAPI and yfinance through REST APIs to collect real-time financial and news data.",
      "Applied NLP techniques including sentiment analysis using NLTK, spaCy, and VADER.",
      "Built an interactive Streamlit dashboard.",
      "Implemented backend data processing and prediction visualization.",
    ],
    demo: "https://stock-market-prediction-with-rag-ls.vercel.app/",
    github: "", // add your repository link
  },
  {
    title: "Smart Data Visualization & Analysis Tool",
    badge: "Web Application",
    image: "",
    description:
      "A web application for cleaning, validating, analyzing, and visualizing datasets using Python and JavaScript.",
    tags: ["Python", "Pandas", "NumPy", "JavaScript", "HTML", "CSS"],
    features: [
      "Automated data preprocessing and chart generation using Pandas and NumPy.",
      "Implemented modular backend logic.",
      "Added error handling and reusable data-processing functions.",
      "Improved application reliability through debugging and testing.",
    ],
    demo: "",
    github: "",
  },
];

export const education = [
  {
    degree: "B.E. Information Science Engineering",
    school: "Alva's Institute of Engineering and Technology, Moodbidri, Karnataka",
    meta: "VTU University | Expected Graduation: 2027",
    score: "CGPA: 8.19",
  },
];

// Add only real certificates. Leave empty to show the placeholder card.
export const certifications = [
  // { title: "Course name", org: "Issuer", date: "Mon YYYY", link: "/certs/file.pdf" },
];
