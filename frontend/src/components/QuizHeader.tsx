import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function QuizHeader() {
    return (
        <>
            <div className="flex justify-between">
                <Link
                    to="/"
                    className="flex justify-between items-center w-[14%]"
                >
                    <FontAwesomeIcon
                        icon={faHouse}
                        className="text-light-digital-blue text-2xl"
                    />
                    <h1 className="text-light-digital-blue font-body text-3xl font-bold">
                        Web Development Quiz
                    </h1>
                </Link>
                <div className="quiz-pages">
                    <p className="text-light-digital-blue font-body text-3xl font-bold">
                        1/10
                    </p>
                </div>
            </div>
            <hr className="h-[2px] my-3 border-0 bg-light-digital-blue" />
        </>
    );
}
