import { useState } from "react";
import { useQuestionsContext } from "../hooks/useQuestionsContext";
import { REDUCER_ACTION_TYPE } from "../features/QuestionsReducer";
import Button from "./Button";

export default function QuestionForm() {
    type Inputs = {
        question: string;
        answer: string;
    };

    type Errors = Partial<Record<keyof Inputs, string>>;

    const [inputs, setInputs] = useState<Inputs>({
        question: "",
        answer: "",
    });

    const [errors, setErrors] = useState<Errors>({});

    const [successMessage, setSuccessMessage] = useState<string>("");

    const { dispatch } = useQuestionsContext();

    function validate(newInputs: Inputs): Errors {
        const newErrors: Errors = {};

        if (!newInputs.question) {
            newErrors.question = "Please enter question text";
        }

        if (!newInputs.answer) {
            newErrors.answer = "Please enter an answer";
        }

        return newErrors;
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const newErrors = validate(inputs);

        if (!newErrors.question && !newErrors.answer) {
            const newQuestion = {
                question: inputs.question,
                answers: [inputs.answer],
            };

            const response = await fetch(
                "http://localhost:4000/api/questions",
                {
                    method: "POST",
                    body: JSON.stringify(newQuestion),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const json = await response.json();

            if (response.ok) {
                setInputs({ ...inputs, question: "" });
                setInputs({ ...inputs, answer: "" });
                setErrors({});
                setSuccessMessage("New Question Added!");
                setTimeout(() => setSuccessMessage(""), 1000);
                console.log("New Question Added", json);
                dispatch({
                    type: REDUCER_ACTION_TYPE.CREATE_QUESTION,
                    payload: json,
                });
                console.log(json);
            }
        } else {
            setErrors(newErrors);
        }
    }

    return (
        <form
            className="m-5 flex flex-col justify-center items-start w-6/12"
            onSubmit={handleSubmit}>
            <h3 className="text-white text-3xl font-bold font-body mb-2">
                Add a New Question
            </h3>
            <label
                className="text-white font-body flex flex-col text-2xl font-medium w-full"
                htmlFor="question-text">
                Question
                <input
                    className="bg-dark-digital-blue focus:bg-light-digital-blue appearance-none border-2 outline-none border-light-digital-blue px-3 py-2 rounded-lg mt-2"
                    type="text"
                    name="question-text"
                    id="question-text"
                    onChange={(e) => {
                        setInputs({
                            ...inputs,
                            question: e.target.value,
                        });
                    }}
                    value={inputs.question}
                />
            </label>
            <label
                className="text-white font-body flex flex-col text-2xl font-medium w-full"
                htmlFor="answer">
                Answer
                <input
                    className="bg-dark-digital-blue focus:bg-light-digital-blue appearance-none border-2 outline-none border-light-digital-blue px-3 py-2 rounded-lg mt-2"
                    type="text"
                    name="answer"
                    id="answer"
                    onChange={(e) => {
                        setInputs({
                            ...inputs,
                            answer: e.target.value,
                        });
                    }}
                    value={inputs.answer}
                />
            </label>
            <Button value="Add a Question" class="" event={undefined} />
            {errors.question && (
                <p className="text-digital-red font-body font-bold mt-2">
                    {errors.question}
                </p>
            )}
            {errors.answer && (
                <p className="text-digital-red font-body font-bold mt-2">
                    {errors.answer}
                </p>
            )}
            {successMessage && (
                <p className="text-digital-green font-body font-bold mt-2">
                    {successMessage}
                </p>
            )}
        </form>
    );
}
