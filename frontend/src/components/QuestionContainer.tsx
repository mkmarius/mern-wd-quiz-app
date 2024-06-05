import Button from "./Button";
import { Question } from "../pages/QuizPage";
import { useParams } from "react-router-dom";
import { useQuestionsContext } from "../hooks/useQuestionsContext";
import { REDUCER_ACTION_TYPE } from "../features/QuestionsReducer";

type QuestionContainerProps = {
    questions: Question[];
};

export default function QuestionContainer(props: QuestionContainerProps) {
    const { dispatch } = useQuestionsContext();
    const questionNumber = useParams().questionNumber?.toString();

    let currentNumber;
    if (questionNumber) currentNumber = parseInt(questionNumber);

    let currentQuestion: Question = {
        _id: "",
        question: "",
        answers: [],
    };

    if (currentNumber) currentQuestion = props.questions[currentNumber - 1];

    const deleteQuestion = async () => {
        const response = await fetch(
            `http://localhost:4000/api/questions/${currentQuestion._id}`,
            {
                method: "DELETE",
            }
        );
        const json = await response.json();

        if (response.ok) {
            dispatch({
                type: REDUCER_ACTION_TYPE.DELETE_QUESTION,
                payload: json,
            });
        }
    };

    return (
        <div className="w-full border-2 border-light-digital-blue p-3 mb-3">
            <div className="w-full flex justify-between items-center">
                {/* TODO: IMPLEMENT AUTHENTICATION FOR ADMINS TO USE THIS AND REMOVE DISPLAY NONE */}
                <Button
                    value="Remove"
                    class="bg-none !text-digital-red !border-digital-red !mt-0 hover:!bg-digital-red hover:!text-white !w-[35%] hidden"
                    event={deleteQuestion}
                />
                <h1 className="text-light-digital-blue text-7xl text-right font-body font-bold m-0 p-0">
                    {currentNumber && currentNumber < 10
                        ? `0${currentNumber}`
                        : currentNumber}
                </h1>
            </div>
            <p className="text-light-digital-blue font-bold font-body text-5xl mb-3">
                Question #{currentNumber}:
            </p>
            <p className="text-white font-body text-3xl row leading-8">
                {currentQuestion && currentQuestion?.question}
            </p>
        </div>
    );
}
