import express, { Router } from "express";
import {
    createQuestion,
    getQuestion,
    getQuestions,
    deleteQuestion,
    updateQuestion,
} from "../controllers/QuestionController";

const router: Router = express.Router();

router.get("/", getQuestions);

router.get("/:questionId", getQuestion);

router.post("/", createQuestion);

router.delete("/:questionId", deleteQuestion);

router.patch("/:questionId", updateQuestion);

export default router;
