import { useState } from "react";

export default function QuestionForm() {
    type Inputs = {
        questionNumber: number | null;
        question: string;
    };

    type Errors = Partial<Record<keyof Inputs, string>>;

    interface Question extends Inputs {
        _id: string;
    }

    const [inputs, setInputs] = useState<Inputs>({
        questionNumber: null,
        question: "",
    });

    const [errors, setErrors] = useState<Errors>({});

    const [successMessage, setSuccessMessage] = useState<string>("");

    function validate(
        newInputs: Inputs,
        existingQuestions: Question[]
    ): Errors {
        const newErrors: Errors = {};

        if (!newInputs.questionNumber) {
            newErrors.questionNumber = "Please enter a bigger number";
        }

        const duplicates = existingQuestions.filter(
            (question: Question) =>
                question.questionNumber === newInputs.questionNumber
        );

        console.log(duplicates);

        if (duplicates.length > 0) {
            newErrors.questionNumber =
                "A question with such a number already exists";
        }

        if (!newInputs.question) {
            newErrors.question = "Please enter a question text";
        }

        return newErrors;
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const questionData = await fetch("http://localhost:4000/api/questions");
        const existingQuestions: Question[] = await questionData.json();

        const newErrors = validate(inputs, existingQuestions);

        if (!newErrors.question && !newErrors.questionNumber) {
            const newQuestion = {
                questionNumber: inputs.questionNumber,
                question: inputs.question,
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
                setInputs({ ...inputs, questionNumber: null });
                setInputs({ ...inputs, question: "" });
                setErrors({});
                setSuccessMessage("New Question Added!");
                setTimeout(() => setSuccessMessage(""), 1000);
                console.log("New Question Added", json);
            }
        } else {
            setErrors(newErrors);
        }
    }

    return (
        <form
            className="m-5 flex flex-col justify-center items-start w-6/12"
            onSubmit={handleSubmit}
        >
            <h3 className="text-white text-3xl font-bold font-body mb-2">
                Add a New Question
            </h3>
            <label
                className="text-white font-body flex flex-col text-2xl font-medium mb-3 w-full"
                htmlFor="question-number"
            >
                Question Number
                <input
                    className="bg-dark-digital-blue focus:bg-light-digital-blue appearance-none border-2 outline-none border-light-digital-blue px-3 py-2 rounded-lg mt-2"
                    type="number"
                    name="question-number"
                    id="question-number"
                    onChange={(e) => {
                        setInputs({
                            ...inputs,
                            questionNumber: parseInt(e.target.value),
                        });
                    }}
                    value={inputs.questionNumber ? inputs.questionNumber : 0}
                />
            </label>
            <label
                className="text-white font-body flex flex-col text-2xl font-medium w-full"
                htmlFor="question-text"
            >
                Question Text
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
            <button className="text-white border-2 rounded-lg font-body font-bold border-light-digital-blue bg-medium-digital-blue px-3 py-2 text-2xl w-full mt-5">
                Add a Question
            </button>
            {errors.questionNumber && (
                <p className="text-digital-red font-body font-bold mt-2">
                    {errors.questionNumber}
                </p>
            )}
            {errors.question && (
                <p className="text-digital-red font-body font-bold mt-2">
                    {errors.question}
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
