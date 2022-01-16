import {makeStyles} from "@mui/styles";
import {Box, Button, Card, CardContent, Typography} from "@mui/material";
import {media} from "../utils/media";
import CheckIcon from '@mui/icons-material/Check';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import clsx from "clsx";
import {format} from "date-fns";
import {imageSkeleton} from "../constants/main";

const avatarSize = media(50, 85);
const buttonPY = media(3, 4);

const useStyles = makeStyles(theme => ({
    card: {
        width: '100%',
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: 'auto 1fr',
        gridColumnGap: media(5, 8),
        padding: `${media(6, 8)} ${media(7, 10)}`,
        background: "#028FA30D",
        position: 'relative',
        overflow: 'initial'
    },
    avatarBox: {
        width: avatarSize,
        height: avatarSize,
        borderRadius: '50%',
        overflow: 'hidden',
        border: `2px solid ${theme.palette.primary.main}`,
        '& img': {
            width: '100%',
            height: '100%',
        }
    },
    cardContent: {
        padding: media(10, 13),
        '&:last-child': {
            padding: media(10, 13),
        }
    },
    buttonHolder: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'auto auto',
        gridRowGap: media(2, 4),
        gridColumnGap: media(3, 4),
        margin: `${media(2, 3)} 0`,
    },
    button: {
        fontSize: media(10, 12),
        paddingTop: buttonPY,
        paddingBottom: buttonPY,
        textTransform: 'none',
    },
    questionCountBtn: {
        gridColumn: '1/3',
        border: `1px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
        background: 'transparent',
    },
    correctAnswersBtn: {
        background: "#01DC17",
        color: theme.palette.fivefold.main,
        gridColumnGap: media(2, 3),
        '&:hover': {
            background: "#01DC17",
        }
    },
    wrongAnswersBtn: {
        background: theme.palette.primary.main,
        gridColumnGap: media(2, 3),
        color: theme.palette.fivefold.main,
        '&:hover': {
            background: theme.palette.primary.main,
        }
    },
    dateBox: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
    },
    dateTitle: {
        display: 'flex',
        alignItems: 'center',
        gridColumnGap: media(2, 3),
        color: theme.palette.quaternary.main,
        fontSize: media(13, 15),
        fontWeight: '500',
    },
    userPlace: {
        position: 'absolute',
        left: 0,
        top: 0,
        transform: 'translate(-20%, -50%)',
        width: media(28, 30),
        height: media(28, 30),
        borderRadius: '50%',
        background: theme.palette.primary.main,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: media(18, 22),
        fontWeight: "500"
    }
}));

const ParticipationItem = ({item, place}) => {
    const styles = useStyles();
    return (
        <Card className={styles.card}>
            <Box className={styles.userPlace}>
                {place}
            </Box>
            <Box className={styles.avatarBox}>
                <img src={item.user.competitionProfile.avatar ? item.user.competitionProfile.avatar : imageSkeleton} />
            </Box>
            <CardContent className={styles.cardContent}>
                <Typography fontSize={media(11, 13)} fontWeight="600" color="quaternary">
                    {item.user.competitionProfile.fullname}
                </Typography>
                <Box className={styles.buttonHolder}>
                    <Button className={clsx(styles.questionCountBtn, styles.button)}><span className="poppins">{item.questions_count}</span> суроо</Button>
                    <Button className={clsx(styles.correctAnswersBtn, styles.button)}><span className="poppins">{item.correctAnswers}</span> <CheckIcon /></Button>
                    <Button className={clsx(styles.wrongAnswersBtn, styles.button)}><span className="poppins">{item.wrongAnswers}</span> <DangerousOutlinedIcon /></Button>
                </Box>
                <Box className={styles.dateBox}>
                    <Typography className={styles.dateTitle}>
                        <DateRangeOutlinedIcon />
                        <span className="poppins">{format(new Date(item.answeredAt), 'yyyy.MM.dd')}</span>
                    </Typography>
                    <Typography className={styles.dateTitle}>
                        <AccessTimeOutlinedIcon />
                        <span className="poppins">{format(new Date(item.answeredAt), 'HH:mm')}</span>
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default ParticipationItem;