import fs from "fs";
import path from "path";

// Define the path to Vite's public folder
const dataPath = path.join(process.cwd(), "public", "data.json");

// The text content data you want to save
const contentData = {
  message: "Hello from Node.js!",
  timestamp: new Date().toISOString(),
  articles: [
    {
      id: 1,
      title: "Static Generation",
      body: "This data was compiled by Node.js.",
    },
    {
      id: 2,
      title: "Manual Generation",
      body: "This data was compiled by Developer.",
    },
  ],
};

// Save the text content to the JSON file
fs.writeFileSync(dataPath, JSON.stringify(contentData, null, 2));
console.log("✅ Text data successfully saved to public/data.json");
