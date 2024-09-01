import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function QuizHeader() {
    return (
        <>
            <div className="w-full">
                <div className="w-full flex justify-between">
                    <Link to="/" className="flex justify-between items-center">
                        <FontAwesomeIcon
                            icon={faHouse}
                            className="text-light-digital-blue text-2xl mr-5"
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
                <hr className="border-0 h-[2px] mt-3 bg-light-digital-blue" />
            </div>
        </>
    );
}
