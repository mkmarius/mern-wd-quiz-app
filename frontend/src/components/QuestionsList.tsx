import { FC } from "react";
import QuestionButton from "./QuestionButton";
import { Question } from "../pages/QuizPage";

type QuestionProps = {
    questions: Question[];
    questionNumber: number;
};
const QuestionsList: FC<QuestionProps> = ({ questions, questionNumber }) => {
    return (
        <div className="w-full flex justify-center mb-5 mt-5">
            {questions &&
                questions.map((question: Question, index) => (
                    <QuestionButton
                        key={question._id}
                        questionNumber={index + 1}
                        currentQuestion={questionNumber}
                    />
                ))}
        </div>
    );
};

export default QuestionsList;
