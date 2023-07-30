import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [
    {
      question: String,
      options: [
        {
          option: String,
        },
      ],
      correctOption: Number,
    },
  ],
  category: { type: String, required: true },
  timeLimit: {
    type: Number, // You can use Date type as well if you need more flexibility (e.g., using ISODate)
    required: true,
  },
  // Add other fields as needed
});
const Quiz = mongoose.models.Quiz || mongoose.model("Quiz", quizSchema);

export default Quiz;
