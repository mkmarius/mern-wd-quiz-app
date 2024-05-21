import { initialState, questionsReducer } from '../features/QuestionsReducer';
import { createContext, useReducer } from 'react';

type QuestionsContextProviderProps = {
    children: React.ReactNode;
};

const useQuestionsReducer = () => {
    const [state, dispatch] = useReducer(questionsReducer, initialState)

    const questions = state.questions;

    return {questions, dispatch};
}

type InitialContextStateType = ReturnType<typeof useQuestionsReducer>;

const initialContextState: InitialContextStateType = {
    ...initialState,
    dispatch: () => {},
}

export const QuestionsContext = createContext<InitialContextStateType>(initialContextState);

export const QuestionsContextProvider = ({
    children,
}: QuestionsContextProviderProps) => {

    return (
        <QuestionsContext.Provider value={useQuestionsReducer()}>
            {children}
        </QuestionsContext.Provider>
    );
};
