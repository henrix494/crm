const express = require(`express`);
const { connectToDB } = require(`./utils/mongo`);
const { User } = require(`./models/userInfo`);
const app = express();

app.use(express.json());

app.post("/info", async (req, res) => {
	const { name, phone } = await req.body;
	try {
		if (!name || !phone) {
			return res.status(401).json("נא למלא את כל הפרטים");
		}
		if (phone.length < 10) {
			return res.status(401).json("מספר פאלאפון לא חוקי");
		} else {
			await connectToDB();
			const newPost = new User({
				name: name,
				number: phone,
			});
			await newPost.save();
			return res.status(201).json("נהיה בקשר בקרוב!");
		}
	} catch (error) {
		console.log(error);
	}
});

app.listen(5000, () => {
	console.log("server is running");
});
