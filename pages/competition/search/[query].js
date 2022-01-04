import MainLayout from "../../../layouts/Main";
import {useEffect, useMemo} from "react";
import {useRouter} from "next/router";
import {Box, Container} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {gridWrapperStyles} from "../../../constants/main";
import {media} from "../../../utils/media";
import clsx from "clsx";
import CompetitionItem from "../../../components/CompetitionItem";
import CompetitionItemSkeleton from "../../../components/CompetitionItem/skeleton";
import {fetchCompetitionBySearch} from "../../../actions/competition";
import {useDispatch, useSelector} from "react-redux";
import {selectCompetition} from "../../../store/selectors/competition";
import ErrorMessage from "../../../components/ErrorMessage";
import {setModalActive} from "../../../store/reducers/main";


const gridWrapperPY = media(10, 15);

const useStyles = makeStyles({
    gridWrapper: {
        ...gridWrapperStyles,
        paddingTop: gridWrapperPY,
        paddingBottom: gridWrapperPY,
    }
});

const CompetitionQuery = () => {
    const styles = useStyles();
    const dispatch = useDispatch();
    const router = useRouter();
    const competitionState = useSelector(selectCompetition);

    useEffect(() => {
        if(!router.isReady) return;
        dispatch(fetchCompetitionBySearch(router.query.query));
    }, [router.isReady, router.query.query]);

    const outCompetitions = () => {
        if(competitionState.searchCompetitionsLoaded){
            if(competitionState.searchCompetitionsError){
                return (
                    <ErrorMessage message={competitionState.searchCompetitionsError} />
                )
            }
            if(competitionState.searchCompetitions.length){
                return competitionState.searchCompetitions.map((elem) => (
                    <CompetitionItem showDate={true} handleStartTest={() => dispatch(setModalActive(true))} item={elem} key={elem.id} />
                ));
            }
            return (
                <ErrorMessage message="Конкурстар жок" />
            )
        }
        return Array(10).fill(0).map((_, i) => (
            <CompetitionItemSkeleton key={i} />
        ));
    }

    const outGridClasses = useMemo(() => {
        return {
            single: (
                competitionState.searchCompetitionsLoaded &&
                !competitionState.searchCompetitionsError &&
                competitionState.searchCompetitions.length === 0
            ) || (competitionState.searchCompetitionsLoaded && competitionState.searchCompetitionsError)
        }
    }, [competitionState.searchCompetitionsLoaded, competitionState.searchCompetitionsError, competitionState.searchCompetitions]);

    return (
        <Container maxWidth="lg">
            <Box className={clsx(styles.gridWrapper, outGridClasses)}>
                {outCompetitions()}
            </Box>
        </Container>
    )
}

const WrappedCompetitionQuery = () => {
    return (
        <MainLayout Child={CompetitionQuery} />
    )
}

export default WrappedCompetitionQuery;