import {Box, Button, Modal, Typography} from "@mui/material";
import {media} from "../utils/media";
import {makeStyles} from "@mui/styles";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {selectModalActive} from "../store/selectors/main";
import {setModalActive} from "../store/reducers/main";



const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& .MuiBackdrop-root': {
            background: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(25px)',
        }
    },
    wrapper: {
        background: theme.palette.primary.main,
        padding: `${media(25, 30)} ${media(50, 65)}`,
    },
    innerWrapper: {
        maxWidth: '275px',
        display: 'flex',
        gridRowGap: media(14, 19),
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        color: theme.palette.fivefold.main,
    },
    buttonHolder: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        gridColumnGap: media(10, 15),
    },
    button: {
        textTransform: 'none',
        padding: `${media(3, 5)} ${media(30, 36)}!important`,
        fontSize: media(13, 15),
        fontWeight: '600',
    },
    buttonLeft: {
        background: `transparent!important`,
        color: `${theme.palette.fivefold.main}!important`,
        border: `1px solid ${theme.palette.fivefold.main}!important`
    },
    buttonRight: {
        background: `${theme.palette.fivefold.main}!important`,
        color: `${theme.palette.primary.main}!important`,
        border: `1px solid ${theme.palette.fivefold.main}!important`,
        gridColumnGap: media(7, 10),
    }
}));


const ModalWithOptions = () => {
    const styles = useStyles();
    const modalActive = useSelector(selectModalActive);
    const dispatch = useDispatch();


    const handleCloseModal = () => {
        dispatch(setModalActive(false));
    }

    const handleOpenApp = () => {

    }

    return (
        <Modal
            open={modalActive}
            onClose={handleCloseModal}
            className={styles.modal}
        >
            <Box className={styles.wrapper}>
                <Box className={styles.innerWrapper}>
                    <Typography textAlign="center" fontSize={media(16, 17)} fontWeight="400" className={styles.title}>
                        Электрогдук кинтепканадан китеп сатып алыңыз!
                    </Typography>
                    <Box className={styles.buttonHolder}>
                        <Button onClick={handleOpenApp} className={clsx(styles.buttonLeft, styles.button)}>
                            Катталам
                        </Button>
                        <Button onClick={handleCloseModal} className={clsx(styles.button, styles.buttonRight)}>
                            Чыгуу
                            <ExitToAppOutlinedIcon />
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}


export default ModalWithOptions;