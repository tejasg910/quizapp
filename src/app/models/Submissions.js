import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  title: { type: String, required: true },

  //   user:{type:{ref()}},

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
const Submission =
  mongoose.models.Submission || mongoose.model("Submission", submissionSchema);

export default Submission;
