var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
var FormData = require("form-data");
const fetch = require("node-fetch");
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
console.log(`api key is ${process.env.API_KEY}`);
const textApiKey = process.env.API_KEY;

const app = express();
app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client")));

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

app.post("/analyze", function (req, res) {
  postData("https://api.meaningcloud.com/sentiment-2.1", {
    key: textApiKey,
    lang: "en",
    url: req.body.txt,
  })
    .then((response) => res.send(response))
    .catch((er) => console.log(er));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

const postData = async (url = "", data = {}) => {
  console.log(data);
  const formData = new FormData();

  for (const name in data) {
    formData.append(name, data[name]);
  }

  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    body: formData,
  });
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};
