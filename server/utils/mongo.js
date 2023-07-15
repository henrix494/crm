const { MongoClient } = require(`mongodb`);
const mongoose = require(`mongoose`);

async function connectToDB() {
	mongoose.set("strictQuery", true);
	try {
		await mongoose.connect(
			process.env.MONGO_URL ||
				"mongodb+srv://natan494:NffxgLcopC$!M&5Q@cluster0.r8sjpai.mongodb.net/",
			{
				dbName: "crm",
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);
		console.log("MongoDB connected");
	} catch (error) {
		console.log(error);
	}
}

module.exports = { connectToDB };
