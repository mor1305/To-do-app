import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());

const URI = process.env.ATLAS_URI;
const PORT = process.env.PORT || 5050;

// mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }); //db file

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

app.get("/users", (req, res) => {
  res.send("testing");
});

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
