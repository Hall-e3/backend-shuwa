import mongoose from "mongoose";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@cluster0.divntla.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
      }
    );
    console.log("Connected to DB!!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default InitiateMongoServer;
