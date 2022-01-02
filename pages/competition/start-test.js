import MainLayout from "../../layouts/Main";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCompetition} from "../../store/selectors/competition";
import {selectAuth} from "../../store/selectors/auth";
import {useRouter} from "next/router";
import {PAGES_ID, PAGES_PATH} from "../../constants/main";
import Question from "../../components/TestItem";
import {setParticipation} from "../../actions/competition";
import {selectTest} from "../../store/selectors/test";
import {setLoading} from "../../store/reducers/main";
import {setCurrentQuestion, setTestStarted} from "../../store/reducers/test";
import {media} from "../../utils/media";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import {Box, Typography} from "@mui/material";


const StartTestPage = () => {
    const dispatch = useDispatch();
    const testState = useSelector(selectTest);
    const competitionState = useSelector(selectCompetition);
    const authState = useSelector(selectAuth);
    const router = useRouter();


    useEffect(() => {
        if(!authState.isAuth) return;
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
    }, [authState.isAuth]);

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
    }, [authState.isAuth, testState.participationInfoLoaded]);

    if(competitionState.detailCompetitionLoaded){
        if(competitionState.detailCompetitionError){
            return "";
        }
        if(competitionState.detailCompetition && competitionState.detailCompetition.participation){
            return <h5>You are already connected</h5>
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
            if(testState.participationIsSuccess && testState.testStarted){
                return <Question />
            }
        }else{
            return "";
        }
    }
    return (
        <MainLayout>
            {outQuestion()}
        </MainLayout>
    )
}

export default StartTestPage;