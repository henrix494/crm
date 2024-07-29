// userController.js
const { User } = require("../models/userInfo");
const { connectToDB } = require("../utils/mongo");

async function createUser(req, res) {
	const { name, phone, date } = req.body;

	try {
		if (!name || !phone) {
			return res.status(401).json("נא למלא את כל הפרטים");
		}
		if (phone.length < 7) {
			return res.status(401).json("מספר פאלאפון לא חוקי");
		} else {
			await connectToDB();
			const newPost = new User({
				name: name,
				number: phone,
				date: date,
			});
			await newPost.save();
			return res.status(201).json("נהיה בקשר בקרוב!");
		}
	} catch (error) {
		console.log(error);
		return res.status(500).json("שגיאה בשרת");
	}
}

module.exports = {
	createUser,
};
