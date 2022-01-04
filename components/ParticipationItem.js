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
    }
}));

const ParticipationItem = ({item}) => {
    const styles = useStyles();
    return (
        <Card className={styles.card}>
            <Box className={styles.avatarBox}>
                <img src={item.user.competitionProfile.avatar ? item.user.competitionProfile.avatar : imageSkeleton} />
            </Box>
            <CardContent className={styles.cardContent}>
                <Typography fontSize={media(11, 13)} fontWeight="600" color="quaternary">
                    {item.user.competitionProfile.fullname}
                </Typography>
                <Typography fontSize={media(10, 12)} fontWeight="400" color="#838383">
                    Тел: {item.user.competitionProfile.phone}
                </Typography>
                <Box className={styles.buttonHolder}>
                    <Button className={clsx(styles.questionCountBtn, styles.button)}>{item.question_count} суроо</Button>
                    <Button className={clsx(styles.correctAnswersBtn, styles.button)}>{item.correctAnswers} <CheckIcon /></Button>
                    <Button className={clsx(styles.wrongAnswersBtn, styles.button)}>{item.wrongAnswers} <DangerousOutlinedIcon /></Button>
                </Box>
                <Box className={styles.dateBox}>
                    <Typography className={styles.dateTitle}>
                        <DateRangeOutlinedIcon />
                        {format(new Date(item.answeredAt), 'yyyy-MM-dd')}
                    </Typography>
                    <Typography className={styles.dateTitle}>
                        <AccessTimeOutlinedIcon />
                        {format(new Date(item.answeredAt), 'HH:mm')}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default ParticipationItem;