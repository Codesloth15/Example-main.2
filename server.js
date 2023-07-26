import express from "express";
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from "url";
import morgan from "morgan";

const fileName = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files, including the style.css file
app.use(express.static(fileName));

app.get("/", (req, res) => {
  res.sendFile(fileName + "/index.html");
});

app.listen(2000, () => {
  console.log("Server connected and listening on port 2000");
});