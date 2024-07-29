const express = require(`express`);

const app = express();

const { createUser } = require("./routes/info");

const { createShipingInfo } = require("./routes/shipping");
const { chekout } = require("./routes/chekout");
const cors = require("cors");
//asc
var corsOptions = {
  origin: ["*"],
  optionsSuccessStatus: 200, // For legacy browser support
};
app.use(cors((origin = "*")));
app.use(express.json());
require("./routes/info");

app.post(`/info`, createUser);
app.post(`/postShip`, createShipingInfo);
app.post(`/cheakout`, chekout);
app.listen(process.env.PORT || 3000, () => {
  console.log("server is running");
});
