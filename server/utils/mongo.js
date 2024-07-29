const { MongoClient } = require(`mongodb`);
const mongoose = require(`mongoose`);

async function connectToDB() {
	mongoose.set("strictQuery", true);
	try {
		await mongoose.connect(
			process.env.MONGO_URL,

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
