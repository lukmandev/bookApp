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


const Competition = ({info}) => {
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
                            {competitionState.detailCompetitionError}
                        </Typography>
                    </Box>
                )
            }
            return <DetailCompetition info={competitionState.detailCompetition} />
        }
        return "";
    }


    return (
        <MainLayout>
            {outDetailCompetition()}
        </MainLayout>
    )
}

export default Competition;