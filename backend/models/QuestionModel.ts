import mongoose from "mongoose";

const Schema = mongoose.Schema;

const questionSchema = new Schema(
    {
        question: {
            type: String,
            required: true,
        },
        answers: {
            type: Array<String>,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Question", questionSchema);
