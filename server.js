const express = require("express");
const morgan = require("morgan");
const campsiteRouter = require("./routes/campsiteRouter");
const promotionRouter = require("./routes/promotionRouter");
const partnerRouter = require("./routes/partnerRouter");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
//morgan is middleware that facilitates logging
app.use(express.json());

app.use("/campsites", campsiteRouter);
app.use("/promotions", promotionRouter);
app.use("/partners", partnerRouter);
//looks for /campsites route and matches logic embedded in CampsiteRouter

app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
  res.setHeader("content-type", "text/html");
  res.statusCode = 200;
  res.end("<html><body><h1>This is an express server</h1></body></html>");
});

app.listen(port, hostname, () => {
  console.log(`server is running at http://${hostname}:${port}/`);
});
