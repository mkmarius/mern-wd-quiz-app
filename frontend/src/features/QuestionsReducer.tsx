import { Question } from "../pages/QuizPage";

export const initialState = {
    questions: [] as Question[],
};

export const enum REDUCER_ACTION_TYPE {
    SET_QUESTIONS,
    CREATE_QUESTION,
    DELETE_QUESTION,
}

type SetQuestionsAction = {
    type: REDUCER_ACTION_TYPE.SET_QUESTIONS;
    payload: Question[];
};

type CreateQuestionAction = {
    type: REDUCER_ACTION_TYPE.CREATE_QUESTION;
    payload: Question;
};

type DeleteQuestionAction = {
    type: REDUCER_ACTION_TYPE.DELETE_QUESTION;
    payload: Question;
};

type QuestionsAction =
    | SetQuestionsAction
    | CreateQuestionAction
    | DeleteQuestionAction;

export const questionsReducer = (
    state: typeof initialState,
    action: QuestionsAction
): typeof initialState => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.SET_QUESTIONS:
            return {
                questions: action.payload,
            };
        case REDUCER_ACTION_TYPE.CREATE_QUESTION:
            return {
                questions: [action.payload, ...state.questions],
            };
        case REDUCER_ACTION_TYPE.DELETE_QUESTION:
            return {
                questions: state.questions.filter(
                    (question) => question._id !== action.payload._id
                ),
            };
        default:
            return state;
    }
};
