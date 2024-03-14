import MainContainer from "../components/MainContainer";
import QuizHeader from "../components/QuizHeader";
import QuestionContainer from "../components/QuestionContainer";
import QuestionsList from "../components/QuestionsList";
import Answer from "../components/Answer";
import QuestionForm from "../components/QuestionForm";

export default function QuizPage() {
    return (
        <MainContainer innerLayoutStyling="flex flex-col">
            <QuizHeader />
            <div className="flex">
                <div className="w-[13%] flex flex-col">
                    <QuestionContainer />
                    <QuestionsList />
                </div>
                <div>
                    <Answer />
                    <QuestionForm />
                </div>
            </div>
        </MainContainer>
    );
}
