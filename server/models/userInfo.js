const { model, Schema, models } = require(`mongoose`);

const userInfo = new Schema({
	name: {
		type: String,
		required: [true, "שם משתמש חובה"],
	},
	number: {
		type: Number,
		required: [true, "מספר חובה"],
	},
	date: {
		type: String,
	},
});

const User = models.User || model("User", userInfo);

module.exports = { User };
