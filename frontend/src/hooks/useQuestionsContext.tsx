import { QuestionsContext } from '../context/QuestionsContext';
import { useContext } from "react";


export const useQuestionsContext = () => {

    const context = useContext(QuestionsContext);

    if (!context) {
        throw new Error(
            "useQuestionsContext must be use inside a QuestionsContextProvider"
        );
    }

    return context;
};

