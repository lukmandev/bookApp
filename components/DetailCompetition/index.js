import {Box, Button, Container, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {media} from "../../utils/media";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {makeStyles} from "@mui/styles";
import {breakNavPoint, competitionRules} from "../../constants/main";
import clsx from "clsx";
import {useRouter} from "next/router";


const containerPY = media(30, 50);

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: containerPY,
        paddingBottom: containerPY,
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gridColumnGap: media(15, 20),
        [`@media ${breakNavPoint}`]: {
            gridTemplateColumns: '1fr',
            gridColumnGap: 0,
        }
    },
    leftColumn: {
        width: media(300, 340),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        [`@media ${breakNavPoint}`]: {
            width: '100%'
        }
    },
    posterHolder: {
        width: '100%',
        position: 'relative',
    },
    posterHolderChild: {
        position: 'relative',
        paddingBottom: "calc(100% * 4 / 3)",
    },
    img: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: "100%",
        objectFit: 'contain',
        borderRadius: '5px',
        border: '1px solid black'
    },
    rightColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    list: {
        '& .MuiListItemIcon-root': {
            minWidth: 0,
            marginRight: 16,
        },
        '& .MuiSvgIcon-root': {
            fontSize: media(12, 14),
        },
    },
    listItem: {
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 0,
            paddingRight: 0,
        }
    },
    button: {
        textTransform: 'none',
        fontSize: media(15, 17),
    },
    questionCount: {
        fontWeigh: '600',
        padding: `${media(2, 3)} ${media(6, 9)}`,
    },
    startTestButton: {
        maxWidth: '450px',
        width: '100%',
        fontWeight: '700',
        padding: `${media(3, 5)} ${media(6, 9)}`,
    }
}));

const DetailCompetition = ({info}) => {
    const styles = useStyles();
    const router = useRouter();

    const startCompetition = () => {
        if(info.participation) return;
        router.push({
            pathname: '/competition/start-test',
        });
    }

    return (
        <Container maxWidth="lg" className={styles.container}>
            <Box className={styles.leftColumn}>
                <Box className={styles.posterHolder}>
                    <Box className={styles.posterHolderChild}>
                        <img src={info.book.poster} className={styles.img} />
                    </Box>
                </Box>
                <Box sx={{py: media(10, 15), display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Typography textAlign="center" fontSize={media(16, 18)} fontWeight="600" color="quaternary">{info.book.title}</Typography>
                    <Typography sx={{pt: media(4, 7), pb: media(9, 12)}} textAlign="center" color="#838383" fontWeight="400" fontSize={media(13, 15)}>
                        Автор: {info.book.author}
                    </Typography>
                    <Button sx={{minWidth: media(130, 180)}} className={clsx(styles.button, styles.questionCount)} variant="contained">
                        <span className="poppins">
                            {info.questions.length}&nbsp;
                        </span>
                        суроо
                    </Button>
                </Box>
            </Box>
            <Box className={styles.rightColumn}>
                <Typography textAlign="center" fontSize={media(20, 24)} fontWeight="600" color="quaternary">
                    Конкурсту баштоодон алдында,
                    бул эреже менен таанышып алыңыз!
                </Typography>
                <List className={styles.list}>
                    {competitionRules.map((elem, i) => (
                        <ListItem key={i} className={styles.listItem}>
                            <ListItemIcon>
                                <FiberManualRecordIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText
                                primary={elem.text}
                                primaryTypographyProps={{
                                    fontSize: media(15, 17),
                                    fontWeight: '400',
                                    letterSpacing: 0,
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
                <Button onClick={startCompetition} variant="contained" className={clsx(styles.button, styles.startTestButton)}>
                    {info.participation ? "Сиз бул конкурста уже катышкансыз" : "Тестти баштайм"}
                </Button>
            </Box>
        </Container>
    )
}

export default DetailCompetition;