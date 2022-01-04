import {Box, Button, Card, CardContent, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {media} from "../../utils/media";
import clsx from "clsx";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {styles} from "./styles";
import {format} from "date-fns";


const useStyles = makeStyles({
    card: {
        height: styles.card.height,
        width: '100%',
        background: styles.card.background,
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
    },
    img: {
        width: styles.img.width,
        height: styles.card.height,
        objectFit: 'cover',
    },
    cardContent: {
        width: '100%',
        position: 'relative',
        padding: media(10, 14),
        '&:last-child': {
            padding: media(10, 14),
        }
    },
    authorTitle: {
        margin: `${media(5, 6)} 0`,
    },
    buttonHolder: {
        display: 'flex',
        alignItems: 'center',
        gridColumnGap: styles.buttonHolder.gridColumnGap,
        marginTop: media(3, 5),
    },
    button: {
        fontSize: media(10, 12),
        borderRadius: '3px',
        padding: `${media(2, 3)} ${media(4, 5)}`,
        textTransform: 'none',
    },
    questionCountBtn: {
        borderRadius: '3px',
    },
    passTheTestBtn: {
        borderRadius: '3px',
    },
    lockIcon: {
        fontSize: media(22, 24),
        position: 'absolute',
        right: 4,
        bottom: 4,
        color: "#C8C8C8",
    }
});


const CompetitionItem = ({item, isAvailable, showDate, handleStartTest, buttonText="Тест тапшыруу"}) => {
    const muiStyles = useStyles();

    return (
        <Card className={muiStyles.card}>
            <img src={item.book.poster} className={muiStyles.img} />
            <CardContent className={muiStyles.cardContent}>
                <Typography component="h4" fontSize={media(12, 14)} fontWeight="600">
                    {item.book.title}
                </Typography>
                <Typography className={muiStyles.authorTitle} component="p" fontSize={media(10, 12)} fontWeight="400">
                    Автор: {item.book.author}
                </Typography>
                <Box className={muiStyles.buttonHolder}>
                    <Button
                        variant="contained"
                        className={clsx(muiStyles.questionCountBtn, muiStyles.button)}
                    >
                        {item.questions_count} суроо
                    </Button>
                    <Button
                        onClick={handleStartTest}
                        variant="outlined"
                        className={clsx(muiStyles.questionCountBtn, muiStyles.button)}
                    >
                        {buttonText}
                    </Button>
                </Box>
                {showDate ? (
                    <Typography marginTop={media(5, 7)} fontSize={media(10, 12)} fontWeight="500" color="quaternary">
                        Дата: {format(new Date(item.startTime), 'yyyy-MM-dd')}
                    </Typography>
                ) : null}
                {isAvailable ? (
                    item.participation ? (
                        <LockOutlinedIcon className={muiStyles.lockIcon} />
                    ) : null
                ) : <LockOutlinedIcon className={muiStyles.lockIcon} />}
            </CardContent>
        </Card>
    )
}

export default CompetitionItem;