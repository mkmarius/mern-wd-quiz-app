import mongoose from "mongoose";

const Schema = mongoose.Schema;

const questionSchema = new Schema(
    {
        questionNumber: {
            type: Number,
            required: true,
        },
        question: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Question", questionSchema);
