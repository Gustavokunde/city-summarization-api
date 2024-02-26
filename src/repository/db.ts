import "dotenv/config";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

export const connectMongoDB = () => mongoose.connection;
