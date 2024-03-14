import { Request, Response, NextFunction } from "express";
import Question from "../models/QuestionModel";
import mongoose from "mongoose";

//Get questions
export const getQuestions = async (req: Request, res: Response) => {
    const questions = await Question.find({}).sort({ createdAt: -1 });

    res.status(200).json(questions);
};

//Get a single question
export const getQuestion = async (req: Request, res: Response) => {
    const { questionId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(questionId)) {
        return res.status(404).json({ error: "This question does not exist!" });
    }

    const question = await Question.findById(questionId);

    if (!question) {
        return res.status(404).json({ error: "This question does not exist!" });
    }

    res.status(200).json(question);
};

//Create a question
export const createQuestion = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { questionNumber, question } = req.body;

    try {
        const newQuestion = await Question.create({ questionNumber, question });
        res.status(200).json(newQuestion);
    } catch (error) {
        next(error);
    }
};

//Delete a question
export const deleteQuestion = async (req: Request, res: Response) => {
    const { questionId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(questionId)) {
        return res.status(404).json({ error: "This question does not exist!" });
    }

    const question = await Question.findOneAndDelete({ _id: questionId });

    if (!question) {
        return res.status(404).json({ error: "This question does not exist!" });
    }

    res.status(200).json(question);
};

//Update a question
export const updateQuestion = async (req: Request, res: Response) => {
    const { questionId } = req.params;

    console.log(questionId);

    if (!mongoose.Types.ObjectId.isValid(questionId)) {
        return res.status(404).json({ error: "This question does not exist!" });
    }

    const question = await Question.findOneAndUpdate(
        { _id: questionId },
        {
            ...req.body,
        }
    );

    if (!question) {
        return res.status(404).json({ error: "This question does not exist!" });
    }

    res.status(200).json(question);
};
