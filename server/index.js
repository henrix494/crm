const express = require(`express`);

const app = express();

const { createUser } = require("./routes/info");

const { createShipingInfo } = require("./routes/shipping");
const cors = require("cors");

var corsOptions = {
	origin: ["https://www.kapit-coffee.com", "http://localhost:3000"],
	optionsSuccessStatus: 200, // For legacy browser support
};
app.use(cors(corsOptions));
app.use(express.json());
require("./routes/info");

app.post(`/info`, createUser);
app.post(`/postShip`, createShipingInfo);

app.listen(process.env.PORT || 3000, () => {
	console.log("server is running");
});
