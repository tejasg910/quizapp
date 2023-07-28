import mongoose from "mongoose";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export async function connectDb() {
  try {
    if (mongoose.connection.readyState !== 1) {
      // Check if the connection is not already established (readyState 1)
      await mongoose.connect(
        "mongodb+srv://tejasgiri910:admin@cluster0.kstrcyy.mongodb.net/quizapp",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
      console.log("Connected to MongoDB");
    } else {
      console.log("Database already connected");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

export async function disConnect() {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
}
