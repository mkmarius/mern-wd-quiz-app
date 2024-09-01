import MainContainer from "../components/MainContainer";
import QuizHeader from "../components/QuizHeader";
import QuestionContainer from "../components/QuestionContainer";
import QuestionsList from "../components/QuestionsList";
import Answer from "../components/Answer";
// import QuestionForm from "../components/QuestionForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuestionsContext } from "../hooks/useQuestionsContext";
import { REDUCER_ACTION_TYPE } from "../features/QuestionsReducer";
import CustomLink from "../components/CustomLink";

export type Question = {
    _id: string;
    question: string;
    answers: string[];
};

export default function QuizPage() {
    const { questions, dispatch } = useQuestionsContext();
    const questionPath = useParams().questionNumber;
    const [currentQuestion, setQurrentQuestion] = useState<Question>();

    let questionNumber: number;

    if (questionPath) {
        questionNumber = parseInt(questionPath);
    } else {
        questionNumber = 1;
    }

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch(
                "http://localhost:4000/api/questions/"
            );

            const questionsData = await response.json();

            if (response.ok) {
                dispatch({
                    type: REDUCER_ACTION_TYPE.SET_QUESTIONS,
                    payload: questionsData,
                });

                setQurrentQuestion({
                    _id: questionsData[questionNumber - 1]._id,
                    question: questionsData[questionNumber - 1].question,
                    answers: questionsData[questionNumber - 1].answers,
                });
            }
        };

        fetchQuestions();
    }, [questionNumber, dispatch]);

    return (
        <MainContainer innerLayoutStyling="flex flex-col items-center">
            <QuizHeader />
            <div className="w-full max-w-[1440px] flex flex-col">
                <div className="w-full flex flex-col">
                    <QuestionsList
                        questions={questions}
                        questionNumber={questionNumber}
                    />
                    {currentQuestion && (
                        <QuestionContainer
                            question={currentQuestion}
                            questionNumber={questionNumber}
                        />
                    )}
                </div>
                <div>
                    <form className="w-full">
                        {questions &&
                            questions.length > 0 &&
                            questions[questionNumber - 1].answers.map(
                                (answer, index) => (
                                    <Answer
                                        key={index}
                                        answer={answer}
                                        index={index}
                                    />
                                )
                            )}
                        {questionNumber < questions.length && (
                            <CustomLink
                                link={`/quiz/${questionNumber + 1}`}
                                value="Continue"
                                class="flex items-center justify-center w-full text-5xl h-[5rem] mt-3"
                            />
                        )}
                    </form>
                    {/* <QuestionForm /> */}
                    {/* TODO: MOVE TO ADMIN AREA <QuestionForm /> */}
                </div>
            </div>
        </MainContainer>
    );
}
