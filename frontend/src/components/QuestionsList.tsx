import QuestionButton from "./QuestionButton";
import { Question } from "../pages/QuizPage";

type QuestionProps = {
    questions: Question[];
};

export default function QuestionsList(props: QuestionProps) {
    return (
        <div className="w-full h-full flex flex-wrap justify-center">
            {props.questions &&
                props.questions.map((question: Question, index) => (
                    <QuestionButton
                        key={question._id}
                        questionNumber={index + 1}
                        questionId={question._id}
                    />
                ))}
        </div>
    );
}
