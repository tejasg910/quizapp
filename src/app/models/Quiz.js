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
  // Add other fields as needed
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
