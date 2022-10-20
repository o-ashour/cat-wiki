const express = require("express");
const app = express();
const connectDB = require("./db/conn");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
const cors = require('cors');
// const axios = require("axios");

// Used to allow HTTP requests from any origin
app.use(cors());

// Used to parse body of HTTP request from JSON to JS object
app.use(express.json());

// Used to parse body of HTTP request from xxx-url-encoded to JS object
app.use(express.urlencoded({ extended: false }));



// connect Mongoose to MongoDB
connectDB();

app.use("/", require("./routes/breedRoutes"));

app.listen(port, () => console.log(`Server started on port: ${port}`));
