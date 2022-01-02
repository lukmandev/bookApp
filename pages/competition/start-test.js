import MainLayout from "../../layouts/Main";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCompetition} from "../../store/selectors/competition";
import {useRouter} from "next/router";
import {PAGES_ID, PAGES_PATH} from "../../constants/main";
import Question from "../../components/TestItem";
import {selectTest, selectTestInfo} from "../../store/selectors/test";
import {setLoading} from "../../store/reducers/main";
import {
    setAnswers,
    setCurrentQuestion,
    setParticipationError,
    setParticipationInfoLoaded,
    setParticipationIsSuccess,
    setParticipationUpdateError,
    setParticipationUpdateInfoLoaded,
    setParticipationUpdateSuccess,
    setSelectedAnswer,
    setTestEnded,
    setTestStarted
} from "../../store/reducers/test";
import {media} from "../../utils/media";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import {Box, Typography} from "@mui/material";
import {participationUpdate, setParticipation} from "../../actions/competition";
import TestResult from "../../components/TestResult";
import {selectAllState} from "../../store/selectors/main";


const StartTestPage = () => {
    const dispatch = useDispatch();
    const state = useSelector(selectAllState);
    const testState = useSelector(selectTest);
    const competitionState = useSelector(selectCompetition);
    const router = useRouter();


    useEffect(() => {
        if(competitionState.detailCompetitionLoaded){
            if(competitionState.detailCompetitionError){
                router.push(PAGES_PATH[PAGES_ID.INDEX]);
            }
            if(competitionState.detailCompetition && competitionState.detailCompetition.participation){
                router.push(PAGES_PATH[PAGES_ID.INDEX]);
            }
            if(competitionState.detailCompetition && !competitionState.detailCompetition.participation){
                dispatch(setParticipation({competition: competitionState.detailCompetition.id}));
            }
        }else{
            router.push(PAGES_PATH[PAGES_ID.INDEX]);
        }
        return () => {
            dispatch(setTestStarted(false));
            dispatch(setTestEnded(false));
            dispatch(setCurrentQuestion(null));
            dispatch(setParticipationIsSuccess(false));
            dispatch(setParticipationError(null));
            dispatch(setParticipationInfoLoaded(false));
            dispatch(setAnswers([]));
            dispatch(setSelectedAnswer({
                answer: null,
                question: null
            }));
            dispatch(setParticipationUpdateError(null));
            dispatch(setParticipationUpdateSuccess(false));
            dispatch(setParticipationUpdateInfoLoaded(false));
        }
    }, []);

    useEffect(() => {
        if(testState.participationInfoLoaded){
            dispatch(setLoading(false));
            if(testState.participationIsSuccess){
                dispatch(setCurrentQuestion(0));
                dispatch(setTestStarted(true));
            }
        }else{
            dispatch(setLoading(true));
        }
    }, [testState.participationInfoLoaded]);

    useEffect(() => {
        if(testState.testEnded) {
            if (testState.participationUpdateInfoLoaded) {
                dispatch(setLoading(false));
            } else {
                dispatch(setLoading(true));
            }
        }
    }, [testState.participationUpdateInfoLoaded, testState.testEnded]);

    useEffect(() => {
        if(testState.testEnded){
            const testInfo = selectTestInfo(state);
            dispatch(participationUpdate({
                competition: competitionState.detailCompetition.id,
                isDone: true,
                duration: testInfo.duration,
                correctAnswers: testInfo.correctAnswers,
                wrongAnswers: testInfo.wrongAnswers,
            }));
        }
    }, [testState.testEnded]);

    if(competitionState.detailCompetitionLoaded){
        if(competitionState.detailCompetitionError){
            return "";
        }
        if(competitionState.detailCompetition && competitionState.detailCompetition.participation){
            return "";
        }
    }else{
        return "";
    }

    const outQuestion = () => {
        if(testState.participationInfoLoaded){
            if(testState.participationError){
                return (
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: `${media(20, 30)} ${media(10, 15)}`,
                    }}>
                        <SentimentVeryDissatisfiedIcon sx={{
                            fontSize: media(55, 70),
                            color: 'primary.main',
                        }} />
                        <Typography sx={{mt: media(4, 6)}} textAlign="center" fontWeight="400" fontSize={media(20, 25)} color="quaternary">
                            {testState.participationError}
                        </Typography>
                    </Box>
                )
            }
            if(testState.participationIsSuccess && testState.testStarted && !testState.testEnded){
                return <Question />
            }
            if(testState.participationIsSuccess && testState.testEnded){
                if(testState.participationUpdateInfoLoaded){
                    if(testState.participationUpdateError){
                        return (
                            <Box sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: `${media(20, 30)} ${media(10, 15)}`,
                            }}>
                                <SentimentVeryDissatisfiedIcon sx={{
                                    fontSize: media(55, 70),
                                    color: 'primary.main',
                                }} />
                                <Typography sx={{mt: media(4, 6)}} textAlign="center" fontWeight="400" fontSize={media(20, 25)} color="quaternary">
                                    {testState.participationUpdateError}
                                </Typography>
                            </Box>
                        )
                    }
                    return <TestResult />
                }else{
                    return "";
                }
            }
        }else{
            return "";
        }
    }
    return (
        <>
            {outQuestion()}
        </>
    )
}

const WrappedStartTestPage = () => {
    return (
        <MainLayout Child={StartTestPage} />
    )
}

export default WrappedStartTestPage;