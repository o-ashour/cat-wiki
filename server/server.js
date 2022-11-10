const express = require("express");
const path = require("node:path");
const app = express();
const connectDB = require("./db/conn");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
const cors = require("cors");
// change url for server requests based on current environment
const url = process.env.NODE_ENV === 'production' ? '/api/breeds' : '/';

// Used to allow HTTP requests from any origin
app.use(cors());

// Used to parse body of HTTP request from JSON to JS object
app.use(express.json());

// Used to parse body of HTTP request from xxx-url-encoded to JS object
app.use(express.urlencoded({ extended: false }));

// connect Mongoose to MongoDB
connectDB();

app.use(url, require("./routes/breedRoutes"));

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "client", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production."));
}

app.listen(port, () => console.log(`Server started on port: ${port}`));
