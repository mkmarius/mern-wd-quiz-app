import QuestionButton from "./QuestionButton";
import { useEffect, useState } from "react";

type Question = {
    _id: string;
    questionNumber: number;
    question: string;
};

export default function QuestionsList() {
    const [questions, setQuestions] = useState<Question[]>([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch("http://localhost:4000/api/questions");
            const questionsData = await response.json();
            if (response.ok) {
                setQuestions(questionsData);
            }
        };

        fetchQuestions();
    }, []);

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
