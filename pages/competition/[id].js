import MainLayout from "../../layouts/Main";
import DetailCompetition from "../../components/DetailCompetition";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectAuth} from "../../store/selectors/auth";
import {getDetailCompetition} from "../../actions/competition";
import {useRouter} from "next/router";
import {selectCompetition} from "../../store/selectors/competition";
import {setLoading} from "../../store/reducers/main";
import {Box, Typography} from "@mui/material";
import {media} from "../../utils/media";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import ErrorMessage from "../../components/ErrorMessage";


const Competition = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const authState = useSelector(selectAuth)
    const competitionState = useSelector(selectCompetition);

    useEffect(() => {
        if(authState.isAuth && router.isReady){
            dispatch(getDetailCompetition(router.query.id));
        }
    }, [authState.isAuth, router.isReady]);

    useEffect(() => {
        if(!competitionState.detailCompetitionLoaded){
            dispatch(setLoading(true));
        }else{
            dispatch(setLoading(false));
        }
    }, [competitionState.detailCompetitionLoaded]);


    const outDetailCompetition = () => {
        if(competitionState.detailCompetitionLoaded){
            if(competitionState.detailCompetitionError){
                return (
                    <ErrorMessage message={competitionState.detailCompetitionError} />
                )
            }
            return <DetailCompetition info={competitionState.detailCompetition} />
        }
        return "";
    }


    return (
        <>
            {outDetailCompetition()}
        </>
    )
}


const WrapperCompetition = () => {

    return (
        <MainLayout Child={Competition} />
    )
}

export default WrapperCompetition;