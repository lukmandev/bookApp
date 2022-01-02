import MainLayout from "../layouts/Main";
import {useEffect} from "react";
import {getUserCompetitions} from "../actions/competition";
import {useDispatch, useSelector} from "react-redux";
import {selectCompetition} from "../store/selectors/competition";
import {selectAuth} from "../store/selectors/auth";
import CompetitionItem from "../components/CompetitionItem/index";
import {makeStyles} from "@mui/styles";
import {media} from "../utils/media";
import {Box, Container, Typography} from "@mui/material";
import CompetitionItemSkeleton from "../components/CompetitionItem/skeleton";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import clsx from "clsx";
import {setUserCompetitions, setUserCompetitionsError, setUserCompetitionsLoaded} from "../store/reducers/competition";


const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: media(20, 25),
        paddingBottom: media(20, 25),
    },
    gridWrapper: {
        '&.empty': {
            display: 'flex',
            gridTemplateColumns: 'unset!important',
            gridColumnGap: 'unset!important',
            gridRowGap: 'unset!important',
        },
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridColumnGap: media(10, 15),
        gridRowGap: media(10, 15),
        '@media (max-width: 1000px)': {
            gridTemplateColumns: '1fr 1fr',
        },
        '@media (max-width: 700px)': {
            gridTemplateColumns: '1fr',
        }
    },
}));

const Home = () => {
    const styles = useStyles();
    const dispatch = useDispatch();
    const authState = useSelector(selectAuth);
    const competitionState = useSelector(selectCompetition);

    useEffect(() => {
        if(authState.isAuth){
            dispatch(getUserCompetitions());
        }
    }, [authState.isAuth]);

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
                    <CompetitionItem isAvailable={true} item={elem} key={elem.id} />
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
        <MainLayout>
            <Container maxWidth="lg" className={styles.container}>
                <Box className={clsx(styles.gridWrapper, {
                    empty: !!(competitionState.userCompetitionsLoaded && !competitionState.userCompetitionsError && competitionState.userCompetitions.length === 0)
                })}>
                    {outUserCompetitions()}
                </Box>
            </Container>
        </MainLayout>
    )
}


export default Home;