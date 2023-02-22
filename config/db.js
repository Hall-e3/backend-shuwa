import mongoose from "mongoose";

const mongoDB = process.env.MONGO_URL || process.env.DEV_DB_URL;
const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
    });
    console.log("Connected to DB !!");
    await mongoose.connection.on("connection", () => {
      console.log("Mongoose connection to db is very successfully");
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default InitiateMongoServer;
