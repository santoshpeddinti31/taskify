const mongoose = require("mongoose");

async function connectToDb() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database is connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
module.exports = connectToDb;
