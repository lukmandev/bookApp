import MainLayout from "../layouts/Main";
import {Box, Container, Tab, Tabs} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectCompetition} from "../store/selectors/competition";
import {competitionsTabs, gridWrapperStyles, PAGES_ID, PAGES_PATH} from "../constants/main";
import {setSelectedTab} from "../store/reducers/competition";
import {makeStyles} from "@mui/styles";
import {media} from "../utils/media";
import clsx from "clsx";
import {useEffect, useMemo} from "react";
import {getPublicCompetitions} from "../actions/competition";
import CompetitionItem from "../components/CompetitionItem";
import CompetitionItemSkeleton from "../components/CompetitionItem/skeleton";
import ErrorMessage from "../components/ErrorMessage";
import {setModalActive} from "../store/reducers/main";
import {useRouter} from "next/router";



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
    tabs: {
        minHeight: 0,
        '& .MuiTabs-indicator': {
            zIndex: 0,
            height: '100%',
        },
        '& .MuiTabs-flexContainer': {
            gridColumnGap: media(7, 15),
        }
    },
    tab: {
        minHeight: 0,
        zIndex: 1,
        border: `1px solid ${theme.palette.primary.main}`,
        transition: '0.3s ease',
        color: theme.palette.primary.main,
        fontSize: media(10, 13),
        fontWeight: '500',
        textTransform: 'none',
        padding: `${media(8, 10)} ${media(13, 22)}`,
        '@media (max-width: 500px)': {
            maxWidth: '150px',
        },
        '&.Mui-selected': {
            color: theme.palette.fivefold.main,
        },
    },
    gridWrapper: {
        ...gridWrapperStyles,
        paddingTop: gridWrapperPY,
        paddingBottom: gridWrapperPY,
    }
}));


const Competitions = () => {
    const styles = useStyles();
    const router = useRouter();
    const dispatch = useDispatch();
    const competitionState = useSelector(selectCompetition);

    useEffect(() => {
        dispatch(getPublicCompetitions(competitionState.selectedTab.path))
    }, [competitionState.selectedTab]);

    const handleChange = (e, newValue) => {
        if(!competitionState.publicCompetitionsLoaded) return;
        const competitionTab = competitionsTabs.find(el => el.id === newValue);
        dispatch(setSelectedTab(competitionTab));
    }

    const outTabs = useMemo(() => {
        return competitionsTabs.map((elem) => (
            <Tab
                className={styles.tab}
                value={elem.id}
                key={elem.id}
                label={elem.title}
            />
        ))
    }, []);


    const outCompetitions = () => {
        if(competitionState.publicCompetitionsLoaded){
            if(competitionState.publicCompetitionsError){
                return (
                    <ErrorMessage message="Конкурстар жок" />
                )
            }
            if(competitionState.publicCompetitions.length){
                return competitionState.publicCompetitions.map((elem) => (
                    <CompetitionItem
                        showDate={true}
                        handleStartTest={() => {
                            if(!elem.is_bought){
                                dispatch(setModalActive(true));
                                return;
                            }
                            if(elem.is_bought && !elem.participated && elem.is_started){
                               router.push({
                                   pathname: PAGES_PATH[PAGES_ID.DETAIL_COMPETITION],
                                   query: {
                                       id: elem.id
                                   }
                               })
                            }
                        }}
                        item={elem}
                        key={elem.id}
                        buttonText="Тест тапшыруу"
                        isAvailable={!!(elem.is_bought && !elem.participated && elem.is_started)}
                    />
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
                competitionState.publicCompetitionsLoaded &&
                !competitionState.publicCompetitionsError &&
                competitionState.publicCompetitions.length === 0
            ) || (competitionState.publicCompetitionsLoaded && competitionState.publicCompetitionsError)
        }
    }, [competitionState.publicCompetitionsLoaded, competitionState.publicCompetitionsError, competitionState.publicCompetitions]);
    return (
        <Container maxWidth="lg" className={styles.container}>
            <Tabs
                className={styles.tabs}
                textColor="primary"
                indicatorColor="primary"
                variant="scrollable"
                value={competitionState.selectedTab.id}
                onChange={handleChange}
            >
                {outTabs}
            </Tabs>
            <Box className={clsx(styles.gridWrapper, outGridClasses)}>
                {outCompetitions()}
            </Box>
        </Container>
    )
}

const WrapperCompetitions = () => {
    return (
        <MainLayout Child={Competitions} />
    )
}

export default WrapperCompetitions;