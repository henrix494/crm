const { model, Schema, models } = require(`mongoose`);
const shipingInfo = new Schema({
	name: {
		type: String,
	},
	lastName: {
		type: String,
	},
	phone: {
		type: String,
	},
	city: {
		type: String,
	},
	street: {
		type: String,
	},
	numOfTheBuilding: {
		type: String,
	},
	numOfTheAprt: {
		type: String,
	},
	note: {
		type: String,
	},
});

const shipInfo = models.shipInfo || model("shipInfo", shipingInfo);

module.exports = { shipInfo };
