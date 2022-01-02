import {Box, Button, Container, Slider, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {media} from "../utils/media";
import {useSelector} from "react-redux";
import {selectTestInfo} from "../store/selectors/test";
import {selectAuth} from "../store/selectors/auth";
import {PAGES_ID, PAGES_PATH} from "../constants/main";
import {useRouter} from "next/router";
import {selectAllState} from "../store/selectors/main";


const avatarSize = media(50, 68);
const containerPY = media(20, 30);
const sliderHolderPY = media(20, 25);
const titleMT = media(10, 15);
const sliderHeight = 7;
const sliderThumb = media(18, 22);

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: containerPY,
        paddingBottom: containerPY,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    profile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    avatar: {
        width: avatarSize,
        height: avatarSize,
        borderRadius: '50%',
        border: `1px solid ${theme.palette.primary.main}`,
        overflow: 'hidden',
    },
    title: {
        marginTop: titleMT,
    },
    avatarImg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    sliderHolder: {
        maxWidth: media(340, 370),
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gridRowGap: media(10, 15),
        paddingTop: sliderHolderPY,
        paddingBottom: sliderHolderPY,
    },
    sliderItem: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    sliderTextHolder: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    slider: {
        '& .MuiSlider-thumb': {
            height: sliderThumb,
            width: sliderThumb,
            border: '2px solid #fff',
            boxShadow: "0px 4px 10px 0px #028FA36E",
        },
        '& .MuiSlider-rail': {
            height: sliderHeight,
            borderRadius: 10,
            border: `1px solid ${theme.palette.primary.main}`,
            background: "#028FA30D",
        },
        '& .MuiSlider-track': {
            height: sliderHeight,
        },
    },
    finishTestBtn: {
        textTransform: 'none',
        fontSize: media(11, 13),
        fontWeight: "600",
        padding: `${media(3, 6)} ${media(30, 50)}`,
    }
}));



const TestResult = () => {
    const router = useRouter();
    const styles = useStyles();
    const authState = useSelector(selectAuth);
    const state = useSelector(selectAllState);
    const testInfo = selectTestInfo(state);


    const handleFinishTest = () => {
        router.push(PAGES_PATH[PAGES_ID.INDEX]);
    }

    return (
        <Container maxWidth="md" className={styles.container}>
            <Box className={styles.profile}>
                <Box className={styles.avatar}>
                    <img className={styles.avatarImg} src={authState.profile.competitionProfile.avatar ? authState.profile.competitionProfile.avatar : require('../assets/images/avatar.png')} />
                </Box>
                <Typography fontSize={media(12, 14)} fontWeight="500" color="primary">
                    {authState.profile.competitionProfile.fullname}
                </Typography>
            </Box>
            <Typography className={styles.title} textAlign="center" fontSize={media(14, 16)} fontWeight="500" maxWidth={170}>
                Сиз тестти ийгиликтүү
                бүттүңүз!
            </Typography>
            <Box className={styles.sliderHolder}>
                <Box className={styles.sliderItem}>
                    <Box className={styles.sliderTextHolder}>
                        <Typography fontSize={media(13, 15)} fontWeight="500" color="primary">
                            Туурасы
                        </Typography>
                        <Typography fontSize={media(13, 15)} fontWeight="500" color="quaternary">
                            {testInfo.correctAnswers}
                        </Typography>
                    </Box>
                    <Slider
                        className={styles.slider}
                        value={testInfo.correctAnswers}
                        aria-readonly={true}
                        min={0}
                        max={testInfo.questionsCount}
                    />
                </Box>
                <Box className={styles.sliderItem}>
                    <Box className={styles.sliderTextHolder}>
                        <Typography fontSize={media(13, 15)} fontWeight="500" color="primary">
                            Катасы
                        </Typography>
                        <Typography fontSize={media(13, 15)} fontWeight="500" color="quaternary">
                            {testInfo.wrongAnswers}
                        </Typography>
                    </Box>
                    <Slider
                        className={styles.slider}
                        value={testInfo.wrongAnswers}
                        aria-readonly={true}
                        min={0}
                        max={testInfo.questionsCount}
                    />
                </Box>
            </Box>
            <Button onClick={handleFinishTest} variant="contained" className={styles.finishTestBtn}>
                Тестти бутуруу
            </Button>
        </Container>
    )
}

export default TestResult;