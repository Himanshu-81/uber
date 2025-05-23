import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URI}/${process.env.DB_NAME}`
    );

    console.log(
      `Mongo DB connected! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(error);
    process(1);
  }
};

export default connectDB;
