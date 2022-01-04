import MainLayout from "../layouts/Main";
import {useEffect} from "react";
import {getUserCompetitions} from "../actions/competition";
import {useDispatch, useSelector} from "react-redux";
import {selectCompetition} from "../store/selectors/competition";
import CompetitionItem from "../components/CompetitionItem/index";
import {makeStyles} from "@mui/styles";
import {media} from "../utils/media";
import {Box, Container, Typography} from "@mui/material";
import CompetitionItemSkeleton from "../components/CompetitionItem/skeleton";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import clsx from "clsx";
import {setUserCompetitions, setUserCompetitionsError, setUserCompetitionsLoaded} from "../store/reducers/competition";
import {useRouter} from "next/router";
import {gridWrapperStyles, PAGES_ID, PAGES_PATH} from "../constants/main";


const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: media(20, 25),
        paddingBottom: media(20, 25),
    },
    gridWrapper: {
        ...gridWrapperStyles,
    },
}));

const Home = () => {
    const router = useRouter();
    const styles = useStyles();
    const dispatch = useDispatch();
    const competitionState = useSelector(selectCompetition);

    useEffect(() => {
        dispatch(getUserCompetitions());
    }, []);

    useEffect(() => {
        return () => {
            dispatch(setUserCompetitionsLoaded(false));
            dispatch(setUserCompetitionsError(null));
            dispatch(setUserCompetitions(null));
        }
    }, []);

    const outUserCompetitions = () => {
        if(competitionState.userCompetitionsLoaded){
            if(competitionState.userCompetitionsError){
                return <h5>{competitionState.userCompetitionsError}</h5>
            }
            if(competitionState.userCompetitions.length){
                return competitionState.userCompetitions.map((elem, _) => (
                    <CompetitionItem handleStartTest={() => {
                        router.push({
                            pathname: PAGES_PATH[PAGES_ID.DETAIL_COMPETITION],
                            query: {
                                id: elem.id
                            }
                        });
                    }} isAvailable={true} item={elem} key={elem.id} />
                ));
            }
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
                        fontSize: media(40, 60),
                        color: 'primary.main',
                    }} />
                    <Typography sx={{mt: media(4, 6)}} textAlign="center" fontWeight="400" fontSize={media(15, 17)} color="quaternary">
                        Азыр сиз сатып алган китептер боюнча конкурстар жок
                    </Typography>
                </Box>
            )
        }
        return Array(10).fill(0).map((_, i) => (
            <CompetitionItemSkeleton key={i} />
        ));
    }

    return (
        <Container maxWidth="lg" className={styles.container}>
            <Box className={clsx(styles.gridWrapper, {
                single: !!(competitionState.userCompetitionsLoaded && !competitionState.userCompetitionsError && competitionState.userCompetitions.length === 0)
            })}>
                {outUserCompetitions()}
            </Box>
        </Container>
    )
}


const WrapperHome = () => {

    return (
        <MainLayout Child={Home} />
    )
}


export default WrapperHome;