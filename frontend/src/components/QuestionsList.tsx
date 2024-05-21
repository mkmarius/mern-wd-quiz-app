import QuestionButton from "./QuestionButton";
import { useEffect } from "react";
import { useQuestionsContext } from "../hooks/useQuestionsContext";
import { REDUCER_ACTION_TYPE } from "../features/QuestionsReducer";

export type Question = {
    _id: string;
    questionNumber: number;
    question: string;
};

export default function QuestionsList() {
    const { questions, dispatch } = useQuestionsContext();

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch("http://localhost:4000/api/questions");
            const questionsData = await response.json();

            if (response.ok) {
                dispatch({
                    type: REDUCER_ACTION_TYPE.SET_QUESTIONS,
                    payload: questionsData,
                });
            }
        };

        fetchQuestions();
    }, [dispatch]);

    return (
        <div className="w-full h-full flex flex-wrap justify-center">
            {questions &&
                questions.sort(
                    (a: Question, b: Question) =>
                        a["questionNumber"] - b["questionNumber"]
                ) &&
                questions.map((question: Question) => (
                    <QuestionButton
                        key={question._id}
                        questionNumber={question.questionNumber}
                    />
                ))}
        </div>
    );
}
