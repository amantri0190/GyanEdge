import mongoose from "mongoose";

const { username, password } = process.env;
export const connectionStr =
  "mongodb+srv://" +
  username +
  ":" +
  password +
  "@cluster0.sfyituf.mongodb.net/GyanEdge?retryWrites=true&w=majority&appName=Cluster0";

export async function connectMongo() {
  if (mongoose.connection.readyState === 1) return;
  try {
    await mongoose.connect(connectionStr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error", err);
  }
}
