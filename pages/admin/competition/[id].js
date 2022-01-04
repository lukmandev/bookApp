import AdminLayout from "../../../layouts/Admin";
import {Box, Container} from "@mui/material";
import MainLayout from "../../../layouts/Main";
import {useEffect, useMemo} from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {selectAdmin} from "../../../store/selectors/admin";
import {fetchCompetitionParticipation} from "../../../actions/admin";
import ParticipationItem from "../../../components/ParticipationItem";
import {media} from "../../../utils/media";
import {makeStyles} from "@mui/styles";
import {gridWrapperStyles} from "../../../constants/main";
import clsx from "clsx";
import ErrorMessage from "../../../components/ErrorMessage";
import CompetitionItem from "../../../components/CompetitionItem";
import CompetitionItemSkeleton from "../../../components/CompetitionItem/skeleton";


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
    const adminState = useSelector(selectAdmin);

    useEffect(() => {
        if(!router.isReady) return;
        dispatch(fetchCompetitionParticipation(router.query.id));
    }, [router.isReady, router.query.id]);

    const outParticipations = () => {
        if(adminState.participationsLoaded){
            if(adminState.participationsError){
                return (
                    <ErrorMessage message={adminState.participationsError} />
                )
            }
            if(adminState.participations.length){
                return adminState.participations.map((elem) => (
                    <ParticipationItem item={elem} key={elem.id} />
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
                adminState.participationsLoaded &&
                !adminState.participationsError &&
                adminState.participations.length === 0
            ) || (adminState.participationsLoaded && adminState.participationsError)
        }
    }, [adminState.participationsLoaded, adminState.participationsError, adminState.participations]);

    return (
        <Container maxWidth="lg">
            <Box className={clsx(styles.gridWrapper, outGridClasses)}>
                {outParticipations()}
            </Box>
        </Container>
    )
}


const WrappedAdminParticipation = () => {

    return (
        <AdminLayout Children={Participations} />
    )
}


const WrappedParticipations = () => {
    return (
        <MainLayout Child={WrappedAdminParticipation} />
    )
}

export default WrappedParticipations;