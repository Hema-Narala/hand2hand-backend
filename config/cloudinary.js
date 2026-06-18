import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});
// console.log("CLOUD_NAME:", process.env.CLOUD_NAME);
// console.log("CLOUD_API_KEY:", process.env.CLOUD_API_KEY ? "FOUND" : "MISSING");
// console.log("CLOUD_API_SECRET:", process.env.CLOUD_API_SECRET ? "FOUND" : "MISSING");

export default cloudinary;

// All imports are executed BEFORE any code in server.js runs

// server.js imports routes
// routes import upload.js
// upload.js imports cloudinary.js
// cloudinary.js runs immediately
// process.env still empty

// REAL FIX
// import dotenv from "dotenv";
// dotenv.config();  
// at top of cloudinary.js