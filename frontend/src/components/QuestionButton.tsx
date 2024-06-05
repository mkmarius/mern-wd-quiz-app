type QuestionButtonProps = {
    questionNumber: number;
    questionId: string;
};

import { Link } from "react-router-dom";

export default function QuestionButton(props: QuestionButtonProps) {
    return (
        <Link
            to={`/quiz/${props.questionNumber}`}
            className="text-white text-4xl bg-medium-digital-blue border-2 border-light-digital-blue rounded-[50%] w-[4rem] px-4 pt-2 pb-3 flex items-center justify-center flex-wrap text-center m-1">
            {props.questionNumber}
        </Link>
    );
}
