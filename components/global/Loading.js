import {Box, CircularProgress} from "@mui/material";
import {useSelector} from "react-redux";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles({
    box: {
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#fff',
        zIndex: 2000,
    }
});

const Loading = () => {
    const {main} = useSelector(allState => allState);
    const styles = useStyles();

    if(!main.isLoading) return null;
    return (
        <Box className={styles.box}>
            <CircularProgress color="primary" />
        </Box>
    )
}

export default Loading;