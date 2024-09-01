import { FC } from "react";

type QuestionButtonProps = {
    questionNumber: number;
    currentQuestion: number;
};

import { Link } from "react-router-dom";

const QuestionButton: FC<QuestionButtonProps> = ({
    questionNumber,
    currentQuestion,
}) => {
    return (
        <Link
            to={`/quiz/${questionNumber}`}
            className={`text-4xl border-2 ${
                questionNumber === currentQuestion
                    ? "border-digital-orange bg-digital-yellow text-dark-digital-blue"
                    : "border-light-digital-blue bg-medium-digital-blue text-white"
            }  rounded-[50%] w-[4rem] px-4 pt-2 pb-3 flex items-center justify-center flex-wrap text-center m-1`}>
            {questionNumber}
        </Link>
    );
};

export default QuestionButton;
