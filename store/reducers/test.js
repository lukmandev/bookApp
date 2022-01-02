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
    participationUpdateInfoLoaded: false,
    participationUpdateError: null,
    participationUpdateSuccess: false,
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
        },
        setParticipationUpdateInfoLoaded(state, action){
            state.participationUpdateInfoLoaded = action.payload;
        },
        setParticipationUpdateError(state, action){
            state.participationUpdateError = action.payload;
        },
        setParticipationUpdateSuccess(state, action){
            state.participationUpdateSuccess = action.payload;
        },
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
    setCurrentQuestion,
    setParticipationUpdateSuccess,
    setParticipationUpdateError,
    setParticipationUpdateInfoLoaded
} = test.actions;
export default test.reducer;