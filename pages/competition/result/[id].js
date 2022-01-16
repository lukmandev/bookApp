import AdminLayout from "../../../layouts/Admin";
import {Box, Container} from "@mui/material";
import MainLayout from "../../../layouts/Main";
import {useEffect, useMemo} from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {fetchCompetitionParticipation} from "../../../actions/competition";
import ParticipationItem from "../../../components/ParticipationItem";
import {media} from "../../../utils/media";
import {makeStyles} from "@mui/styles";
import {gridWrapperStyles} from "../../../constants/main";
import clsx from "clsx";
import ErrorMessage from "../../../components/ErrorMessage";
import CompetitionItemSkeleton from "../../../components/CompetitionItem/skeleton";
import {selectCompetition} from "../../../store/selectors/competition";


const containerPY = media(15, 20);
const gridWrapperPY = media(10, 15);

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: containerPY,
        paddingBottom: containerPY,
    },
    gridWrapper: {
        ...gridWrapperStyles,
        paddingTop: gridWrapperPY,
        paddingBottom: gridWrapperPY,
    }
}));


const Participations = () => {
    const styles = useStyles();
    const router = useRouter();
    const dispatch = useDispatch();
    const competitionState = useSelector(selectCompetition);

    useEffect(() => {
        if(!router.isReady) return;
        dispatch(fetchCompetitionParticipation(router.query.id));
    }, [router.isReady, router.query.id]);

    const outParticipations = () => {
        if(competitionState.participationsLoaded){
            if(competitionState.participationsError){
                return (
                    <ErrorMessage message={competitionState.participationsError} />
                )
            }
            if(competitionState.participations.length){
                return competitionState.participations.map((elem, i) => (
                    <ParticipationItem item={elem} place={i + 1} key={elem.id} />
                ));
            }
            return (
                <ErrorMessage message="Бул конкурска катышкан кишилер жок" />
            )
        }
        return Array(10).fill(0).map((_, i) => (
            <CompetitionItemSkeleton key={i} />
        ));
    }

    const outGridClasses = useMemo(() => {
        return {
            single: (
                competitionState.participationsLoaded &&
                !competitionState.participationsError &&
                competitionState.participations.length === 0
            ) || (competitionState.participationsLoaded && competitionState.participationsError)
        }
    }, [competitionState.participationsLoaded, competitionState.participationsError, competitionState.participations]);

    return (
        <Container maxWidth="lg">
            <Box className={clsx(styles.gridWrapper, outGridClasses)}>
                {outParticipations()}
            </Box>
        </Container>
    )
}


const WrappedParticipations = () => {
    return (
        <MainLayout Child={Participations} />
    )
}

export default WrappedParticipations;