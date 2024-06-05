type AnswerProps = {
    answer: string;
    index: number;
};

export default function Answer(props: AnswerProps) {
    return (
        <div className="answer border-2 border-light-digital-blue bg-medium-digital-blue ml-3 mb-5 p-5">
            <label
                htmlFor={`answer-${props.index}`}
                className="text-white text-5xl block relative pl-[3.5rem] mb-3 cursor-pointer select-none">
                {props.answer}
                <input
                    type="radio"
                    name="answer"
                    id={`answer-${props.index}`}
                    className="absolute top-[1.35rem] left-[0.85rem] opacity-0 cursor-pointer"
                />
                <span className="absolute top-2 left-0 h-10 w-10 border-2 border-light-digital-blue rounded-[50%] after:content-[''] after:absolute after:hidden after:top-2 after:left-2 after:w-5 after:h-5 after:rounded-[50%] after:bg-light-digital-blue"></span>
            </label>
        </div>
    );
}
