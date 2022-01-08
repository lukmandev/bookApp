import {Box, Container} from "@mui/material";
import MainLayout from "../../layouts/Main";
import AdminLayout from "../../layouts/Admin";
import {media} from "../../utils/media";
import {makeStyles} from "@mui/styles";
import {gridWrapperStyles} from "../../constants/main";
import clsx from "clsx";
import {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectAdmin} from "../../store/selectors/admin";
import CompetitionItem from "../../components/CompetitionItem";
import CompetitionItemSkeleton from "../../components/CompetitionItem/skeleton";
import ErrorMessage from "../../components/ErrorMessage";
import {fetchAdminCompetitions} from "../../actions/admin";
import {useRouter} from "next/router";


const containerPY = media(15, 20);
const gridWrapperPY = media(10, 15);

const useStyles = makeStyles({
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
});


const AdminCompetitions = () => {
    const styles = useStyles();
    const router = useRouter();
    const dispatch = useDispatch();
    const adminState = useSelector(selectAdmin);

    useEffect(() => {
        dispatch(fetchAdminCompetitions());
    }, []);

    const outCompetitions = () => {
        if(adminState.competitionsLoaded){
            if(adminState.competitionsError){
                return (
                    <ErrorMessage message={adminState.competitionsError} />
                )
            }
            if(adminState.competitions.length){
                return adminState.competitions.map((elem) => (
                    <CompetitionItem key={elem.id} buttonText="Результаттар" isAvailable={true} item={elem} handleStartTest={() => {
                        router.push({
                            pathname: '/admin/competition/[id]',
                            query: {
                                id: elem.id,
                            }
                        });
                    }} />
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
                adminState.competitionsLoaded &&
                !adminState.competitionsError &&
                adminState.competitions.length === 0
            ) || (adminState.competitionsLoaded && adminState.competitionsError)
        }
    }, [adminState.competitionsLoaded, adminState.competitionsError, adminState.competitions]);

    return (
        <Container maxWidth="lg">
            <Box className={clsx(styles.gridWrapper, outGridClasses)}>
                {outCompetitions()}
            </Box>
        </Container>
    )
}

const WrappedWithAdminCompetitions = () => {

    return (
        <AdminLayout Children={AdminCompetitions} />
    )
}

const WrappedCompetitions = () => {
    return (
        <MainLayout Child={WrappedWithAdminCompetitions} />
    )
}


export default WrappedCompetitions;