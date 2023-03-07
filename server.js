// import function
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
  try {
    const response = await axios.post(
      `https://sandbox-vendors.paddle.com/api/2.0/product/generate_pay_link`,
      req.body
    );
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send({
      url: response.data.response.url,
    });
    // console.log(response.data.response.url);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error);
  }
});

// local server port
app.listen(port);
app.listen(() => {
  console.log(`server run on port http://localhost:${port}`);
});
