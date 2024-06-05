import MainContainer from "../components/MainContainer";
import QuizHeader from "../components/QuizHeader";
import QuestionContainer from "../components/QuestionContainer";
import QuestionsList from "../components/QuestionsList";
import Answer from "../components/Answer";
// import QuestionForm from "../components/QuestionForm";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuestionsContext } from "../hooks/useQuestionsContext";
import { REDUCER_ACTION_TYPE } from "../features/QuestionsReducer";

export type Question = {
    _id: string;
    question: string;
    answers: string[];
};

export default function QuizPage() {
    const { questions, dispatch } = useQuestionsContext();
    console.log(questions);
    const questionNumber = useParams().questionNumber;
    let currentNumber: number = 1;
    if (questionNumber) currentNumber = parseInt(questionNumber);

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
        <MainContainer innerLayoutStyling="flex flex-col">
            <QuizHeader />
            <div className="flex w-full">
                <div className="w-[15%] flex flex-col">
                    <QuestionContainer questions={questions} />
                    <QuestionsList questions={questions} />
                </div>
                <div className="w-[85%]">
                    <form className="w-full">
                        {questions &&
                            questions.length > 0 &&
                            questions[currentNumber - 1].answers.map(
                                (answer, index) => <Answer answer={answer} index={index} />
                            )}
                    </form>
                    {/* <QuestionForm /> */}
                    {/* TODO: MOVE TO ADMIN AREA <QuestionForm /> */}
                </div>
            </div>
        </MainContainer>
    );
}
