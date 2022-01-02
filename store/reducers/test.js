import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    testStarted: false,
    testEnded: false,
    currentQuestion: null,
    participationIsSuccess: false,
    participationError: null,
    participationInfoLoaded: false,
    answers: [],
    selectedAnswer: {
        answer: null,
        question: null
    },
}


const r = {
    answer: 12,
    question: 1,
    time: 5443,
}
const test = createSlice({
    name: 'test',
    initialState,
    reducers: {
        setTestStarted(state, action){
            state.testStarted = action.payload;
        },
        setTestEnded(state, action){
            state.testEnded = action.payload;
        },
        setCurrentQuestion(state, action){
            state.currentQuestion = action.payload;
        },
        setAnswers(state, action){
            state.answers = action.payload;
        },
        setSelectedAnswer(state, action){
            state.selectedAnswer = action.payload;
        },
        setParticipationIsSuccess(state, action){
            state.participationIsSuccess = action.payload;
        },
        setParticipationError(state, action){
            state.participationError = action.payload;
        },
        setParticipationInfoLoaded(state, action){
            state.participationInfoLoaded = action.payload;
        }
    },
});

export const {
    setAnswers,
    setParticipationError,
    setParticipationInfoLoaded,
    setParticipationIsSuccess,
    setSelectedAnswer,
    setTestEnded,
    setTestStarted,
    setCurrentQuestion
} = test.actions;
export default test.reducer;