import {createSelector} from '@reduxjs/toolkit';
import {selectCompetition} from "./competition";

export const selectTest = state => state.test;


export const selectTestInfo = createSelector(
    selectTest,
    selectCompetition,
    (testState, competitionState) => {
        const questions = competitionState.detailCompetition.questions;
        const result = {
            correctAnswers: 0,
            wrongAnswers: 0,
            questionsCount: questions.length,
            duration: 0
        }
        testState.answers.forEach((el) => {
            result.duration = result.duration += el.time;
            const question = questions.find(elem => elem.id === el.question);
            if(!question) return result.wrongAnswers = result.wrongAnswers + 1;
            const variant = question.variants.find(elem => elem.id === el.answer);
            if(!variant) return result.wrongAnswers = result.wrongAnswers + 1;
            if(variant.isCorrect){
                result.correctAnswers = result.correctAnswers + 1;
            }else{
                result.wrongAnswers = result.wrongAnswers + 1;
            }
        });
        return result;
    }
)