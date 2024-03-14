export default function Answer() {
    return (
        <div className="answer border-2 border-light-digital-blue bg-medium-digital-blue ml-3 p-5">
            <label
                htmlFor="answer"
                className="text-white text-5xl block relative pl-12 mb-3 cursor-pointer select-none"
            >
                HyperText Markup Language
                <input
                    type="radio"
                    name="answer"
                    id="answer"
                    className="absolute top-[1.35rem] left-[0.85rem] opacity-0 cursor-pointer"
                />
                <span className="absolute top-2 left-0 h-10 w-10 border-2 border-light-digital-blue rounded-[50%] after:content-[''] after:absolute after:hidden after:top-2 after:left-2 after:w-5 after:h-5 after:rounded-[50%] after:bg-light-digital-blue"></span>
            </label>
        </div>
    );
}
