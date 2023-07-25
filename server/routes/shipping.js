const { shipInfo } = require("../models/shiping");
const { connectToDB } = require("../utils/mongo");

async function createShipingInfo(req, res) {
	const {
		name,
		lastName,
		phone,
		city,
		street,
		numOfTheBuilding,
		numOfTheAprt,
		note,
	} = await req.body;
	try {
		if (!name) {
			return res.status(401).json("נא להזין שם");
		}
		if (!lastName) {
			return res.status(401).json("נא להזין שם משפחה");
		}
		if (!phone) {
			return res.status(401).json("נא להזין מספר טלפון ");
		}
		if (!city) {
			return res.status(401).json("נא להזין עיר");
		}
		if (!street) {
			return res.status(401).json("נא להזין רחוב");
		} else {
			await connectToDB();
			const newShipingInfo = new shipInfo({
				name: name,
				lastName: lastName,
				phone: phone,
				city: city,
				street: street,
				numOfTheBuilding: numOfTheBuilding,
				numOfTheAprt: numOfTheAprt,
				note: note,
			});

			await newShipingInfo.save();

			return res.status(200).json("נהיה בקשר בקרוב!");
		}
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	createShipingInfo,
};
