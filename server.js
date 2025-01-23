import express from 'express';

// setup express server

const exapp = express();

// server static files from public folder
exapp.use(express.static("dist"));

// start express server
exapp.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
})