type QuestionButtonProps = {
    questionNumber: number;
};

import { Link } from "react-router-dom";

export default function QuestionButton(props: QuestionButtonProps) {
    return (
        <Link
            to="/quiz/question/:questionID"
            className="text-white text-4xl bg-medium-digital-blue border-2 border-light-digital-blue rounded-[50%] px-3 pt-2 pb-3 flex items-center justify-center w-[20%] text-center m-1"
        >
            {props.questionNumber}
        </Link>
    );
}
