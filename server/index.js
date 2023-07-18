const cors = require("cors");
const express = require(`express`);
const app = express();
const { createUser } = require("./routes/info");
require("./routes/info");
const { createShipingInfo } = require("./routes/shipping");

app.use(cors({ origin: "*" }));
app.use(express.json());

app.post(`/info`, createUser);
app.post(`/postShip`, createShipingInfo);

app.listen(process.env.PORT || 3000, () => {
	console.log("server is running");
});
