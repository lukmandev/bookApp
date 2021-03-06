import {Box, Button, Container, Typography} from "@mui/material";
import {media} from "../../utils/media";
import {makeStyles} from "@mui/styles";
import clsx from "clsx";
import Countdown, {zeroPad} from 'react-countdown';
import {useDispatch, useSelector} from "react-redux";
import {selectTest} from "../../store/selectors/test";
import {selectCompetition} from "../../store/selectors/competition";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {setAnswers, setCurrentQuestion, setSelectedAnswer, setTestEnded} from "../../store/reducers/test";


const boxWidth = '340px';
const containerPY = media(20, 35);
const questionTitleLHeight = media(20, 24);

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: containerPY,
        paddingBottom: containerPY,
    },
    questionIndex: {
        fontWeight: "400",
        fontSize: media(13, 15),
        textTransform: 'none',
        padding: `${media(2, 3)} ${media(7, 10)}`,
    },
    questionHolder: {
        maxWidth: boxWidth,
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gridRowGap: media(10, 15),
        marginTop: media(15, 20),
        marginBottom: media(15, 20),
    },
    answerBtn: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        lineHeight: questionTitleLHeight,
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
        textAlign: 'left',
        padding: `${media(4, 6)} ${media(12, 14)}`,
        border: `1px solid ${theme.palette.primary.main}`,
    },
    answerBtnTitle: {
        textTransform: 'none',
        fontWeight: '500',
        fontSize: `${media(13, 15)}!important`,
        color: theme.palette.quaternary.main,
        lineHeight: questionTitleLHeight,
        marginRight: media(3, 5),
        '&.selected': {
            color: `${theme.palette.fivefold.main}!important`
        }
    },
    nextBtn: {
        maxWidth: boxWidth,
        width: '100%',
        padding: `${media(4, 6)} ${media(8, 10)}`,
        fontSize: media(12, 13),
    },
    timerHolder: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        maxWidth: media(300, 350),
        width: '100%',
        padding: `${media(10, 15)} 0`,
    },
    indicator: {
        width: '100%',
        outline: "1px solid #DC016A",
        borderRadius: '10px',
        overflow: 'hidden',
        height: 10,
    },
    indicatorActive: {
        height: '100%',
        background: theme.palette.primary.main,
        transition: '0.1s ease',
    }
}));


const LETTER_VARIANTS = ['A', 'B', 'C', 'D', 'E', 'F'];

const Question = () => {
    const dispatch = useDispatch();
    const styles = useStyles();
    const testState = useSelector(selectTest);
    const competitionState = useSelector(selectCompetition);
    const countdown = useRef(null);
    const currentQuestion = useMemo(() => {
        const question = competitionState.detailCompetition.questions[testState.currentQuestion];
        return question;
    }, [testState.currentQuestion]);

    const [timerDate, setTimerDate] = useState(Date.now() + (currentQuestion.duration * 1000));

    useEffect(() => {
        setTimerDate(Date.now() + (currentQuestion.duration * 1000));
    }, [currentQuestion]);

    const handleSelectAnswer = (id) => {
        dispatch(setSelectedAnswer({answer: id, question: currentQuestion.id}));
    }

    const handleSetNextQuestion = () => {
        const nextQuestion = competitionState.detailCompetition.questions[testState.currentQuestion + 1];
        dispatch(setAnswers([...testState.answers, {
            answer: testState.selectedAnswer.question !== currentQuestion.id ? null : testState.selectedAnswer.answer,
            question: currentQuestion.id,
            time: currentQuestion.duration - countdown.current.state.timeDelta.seconds,
        }]));
        if(nextQuestion){
            dispatch(setCurrentQuestion(testState.currentQuestion + 1));
        }else{
            dispatch(setTestEnded(true));
        }
    }

    const renderer = useCallback(({ minutes, seconds, total }) => {
        return (
            <Box className={styles.timerHolder}>
                <Typography fontSize={media(12, 14)} fontWeight="400" color="quaternary">
                    {zeroPad(minutes)}:{zeroPad(seconds)}
                </Typography>
                <Box className={styles.indicator}>
                    <Box
                        className={styles.indicatorActive}
                        style={{
                            width: `${((minutes * 60 + seconds) * 100) / currentQuestion.duration}%`
                        }} />
                </Box>
            </Box>
        );
    }, [currentQuestion])

    const outCountdown = useMemo(() => {
        return (
            <Countdown
                ref={countdown}
                autoStart
                key={testState.currentQuestion}
                onComplete={handleSetNextQuestion}
                date={timerDate}
                renderer={renderer}
            />
        )
    }, [timerDate, testState.selectedAnswer]);

    const outSelectedBtnClassName = useCallback((elem) => {
        return testState.selectedAnswer.answer === elem.id
    }, [testState.selectedAnswer]);

    const outNextBtn = useMemo(() => {
        if(testState.selectedAnswer.question !== currentQuestion.id || testState.selectedAnswer.answer === null) return null;
        return (
            <Button onClick={handleSetNextQuestion} variant="contained" className={styles.nextBtn}>
                ??????????????
            </Button>
        )
    }, [testState.selectedAnswer]);

    return (
        <Container className={styles.container} maxWidth="md">
            <Button variant="contained" className={styles.questionIndex}>{testState.currentQuestion + 1} ??????????</Button>
            {outCountdown}
            {currentQuestion.helperTitle ? (
                <Typography textAlign="center" fontSize={media(12, 14)} fontWeight="400" color="quaternary">
                    {currentQuestion.helperTitle}
                </Typography>
            ) : null}
            <Typography textAlign="center" fontSize={media(14, 16)} fontWeight="400" color="quaternary">
                {currentQuestion.title}
            </Typography>
            <Box className={styles.questionHolder}>
                {currentQuestion.variants.map((elem, i) => (
                    <Button onClick={() => handleSelectAnswer(elem.id)} key={i} className={clsx(styles.answerBtnTitle, styles.answerBtn, {
                        selected: outSelectedBtnClassName(elem)
                    })} variant={outSelectedBtnClassName(elem) ? "contained" : "outlined"} startIcon={
                        <Typography className={clsx(styles.answerBtnTitle, {
                            selected: outSelectedBtnClassName(elem)
                        })}>
                            {LETTER_VARIANTS[i]}
                        </Typography>
                    }>
                        {elem.title}
                    </Button>
                ))}
            </Box>
            {outNextBtn}
        </Container>
    )
}

export default Question;