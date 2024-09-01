import { FC } from "react";
import { Question } from "../pages/QuizPage";
// import { useQuestionsContext } from "../hooks/useQuestionsContext";
// import { REDUCER_ACTION_TYPE } from "../features/QuestionsReducer";

type QuestionContainerProps = {
    question: Question;
    questionNumber: number;
};

const QuestionContainer: FC<QuestionContainerProps> = ({
    question,
    questionNumber,
}) => {
    // const { dispatch } = useQuestionsContext();
    // const deleteQuestion = async () => {
    //     const response = await fetch(
    //         `http://localhost:4000/api/questions/${questionNumber}`,
    //         {
    //             method: "DELETE",
    //         }
    //     );
    //     const json = await response.json();

    //     if (response.ok) {
    //         dispatch({
    //             type: REDUCER_ACTION_TYPE.DELETE_QUESTION,
    //             payload: json,
    //         });
    //     }
    // };

    return (
        <div className="w-full border-2 rounded-lg border-light-digital-blue p-3 mb-8">
            <div className="w-full flex flex-col items-center">
                {/* TODO: IMPLEMENT AUTHENTICATION FOR ADMINS TO USE THIS AND REMOVE DISPLAY NONE */}
                {/* <Button
                    value="Remove"
                    class="bg-none !text-digital-red !border-digital-red !mt-0 hover:!bg-digital-red hover:!text-white !w-[35%] hidden"
                    event={deleteQuestion}
                /> */}
                <h1 className="text-light-digital-blue text-7xl center font-body font-bold mb-5 p-0">
                    Question{" "}
                    {questionNumber && questionNumber < 10
                        ? `0${questionNumber}`
                        : questionNumber}
                </h1>
                <p className="text-white font-body text-center text-5xl row w-[80%] leading-[1.3]">
                    {question && question?.question}
                </p>
            </div>
        </div>
    );
};

export default QuestionContainer;
