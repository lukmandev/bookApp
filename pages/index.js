import MainLayout from "../layouts/Main";
import {makeStyles} from "@mui/styles";
import {media} from "../utils/media";
import {Box, Container, IconButton, Link as MuiLink, Typography, useMediaQuery} from "@mui/material";
import NextLink from 'next/link';
import clsx from "clsx";
import Slider from 'react-slick';
import {useEffect, useRef} from "react";
import {fetchRecommendedCompetition} from "../actions/competition";
import {useDispatch, useSelector} from "react-redux";
import {
    setRecommendedCompetitions,
    setRecommendedCompetitionsError,
    setRecommendedCompetitionsLoaded
} from "../store/reducers/competition";
import {selectCompetition} from "../store/selectors/competition";
import CompetitionItemSkeleton from "../components/CompetitionItem/skeleton";
import CompetitionItem from "../components/CompetitionItem";
import {setModalActive} from "../store/reducers/main";
import {useRouter} from "next/router";
import {ArrowForwardIos, ArrowBackIos} from '@mui/icons-material';
import {footerList, PAGES_ID, PAGES_PATH} from "../constants/main";
import {selectMainState} from "../store/selectors/main";

const useStyles = makeStyles({
    personContainer: {
        paddingTop: media(20, 25),
        paddingBottom: media(20, 25),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    personBox: {
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        gridTemplateColumns: '1fr 1fr',
        gridColumnGap: media(10, 15),
        padding: `${media(20, 25)} 0`,
        '@media (max-width: 750px)': {
            display: 'flex',
            flexDirection: 'column-reverse',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gridTemplateColumns: ' unset',
            gridColumnGap: 'unset',
        }
    },
    personImg: {
        width: media(300, 330),
        height: media(300, 330),
        objectFit: 'contain',
        justifySelf: 'center',
    },
    personTitle: {
        textAlign: 'left',
        '@media (max-width: 750px)': {
            textAlign: 'center',
        }
    },

    sliderContainer: {
        paddingTop: media(20, 25),
        paddingBottom: media(55, 75),
        display: 'flex',
        flexDirection: 'column',
        gridRowGap: media(10, 15),
    },
    sliderTop: {
        display: 'flex',
        alignItems: 'center',
        gridColumnGap: media(10, 15),
        '@media (max-width: 620px)': {
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start'
        }
    },
    arrowIcon: {
        fontSize: media(17, 20)
    },
    footerContainer: {
        paddingTop: media(10, 15),
        paddingBottom: media(10, 15),

        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        '@media (max-width: 500px)': {
            flexDirection: 'column',
            gridRowGap: media(30, 46),
            justifyContent: 'flex-start',
        }
    },
    footerLogo: {
        width: media(50, 60),
        marginBottom: 10,
    },
    footerList: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gridRowGap: media(10, 15)
    },
    footerSocialsBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '@media (max-width: 500px)': {
            alignItems: 'flex-start',
        }
    },
    socialsGrid: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        gridColumnGap: media(5, 7),
        gridRowGap: media(5, 7),
    },
    socialImg: {
        width: media(27, 30),
        height: media(27, 30),
        objectFit: 'contain',
    },
    copyrightContainer: {
        paddingTop: media(15, 25),
        paddingBottom: media(15, 25),

        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        '@media (max-width: 500px)': {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
        }
    }
});


const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 930,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 560,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

const Home = () => {
    const styles = useStyles();
    const slider = useRef();
    const dispatch = useDispatch();
    const router = useRouter();
    const competitionState = useSelector(selectCompetition);
    const mainState = useSelector(selectMainState);
    const isArrowBreak = useMediaQuery('(max-width: 620px)');

    useEffect(() => {
        dispatch(fetchRecommendedCompetition());

        return () => {
            dispatch(setRecommendedCompetitionsLoaded(false));
            dispatch(setRecommendedCompetitionsError(null));
            dispatch(setRecommendedCompetitions(null));
        }
    }, []);

    const handleNextSlider = () => {
        slider.current.slickNext();
    }
    const handlePrevSlider = () => {
        slider.current.slickPrev();
    }


    const outRecommendedCompetitions = () => {
        if(competitionState.recommendedCompetitionsLoaded){
            if(competitionState.recommendedCompetitionsError){
                return <Slider ref={slider} {...{...settings, slidesToShow: 1}}>
                    <Typography>{competitionState.recommendedCompetitionsError}</Typography>
                </Slider>
            }
            if(competitionState.recommendedCompetitions.length){
                return (
                    <Slider ref={slider} {...settings}>
                        {competitionState.recommendedCompetitions.map((elem, i) => (
                            <CompetitionItem
                                item={elem}
                                key={i + 1}
                                buttonText="Катышуу"
                                handleStartTest={() => {
                                    if(!elem.is_bought){
                                        dispatch(setModalActive(true));
                                        return;
                                    }
                                    if(elem.is_started && !elem.participated){
                                        router.push({
                                            pathname: PAGES_PATH[PAGES_ID.DETAIL_COMPETITION],
                                            query: {
                                                id: elem.id
                                            }
                                        })
                                    }
                                }}
                                isAvailable={(elem.is_bought && !elem.participated && elem.is_started)}
                                showDate={true}
                            />
                        ))}
                    </Slider>
                )
            }
            return <Slider ref={slider} {...{...settings, slidesToShow: 1}}>
                <Typography>Сунушталган конкурстар жок</Typography>
            </Slider>
        }
        return (
            <Slider ref={slider} {...{...settings, slidesToShow: 1}}>
                {Array(10).map((_, i) => (
                    <CompetitionItemSkeleton key={i + 1} />
                ))}
            </Slider>
        )
    }

    const outSliderArrows = () => {
        return (
            <Box>
                <IconButton onClick={handlePrevSlider}>
                    <ArrowBackIos className={styles.arrowIcon} />
                </IconButton>
                <IconButton onClick={handleNextSlider}>
                    <ArrowForwardIos className={styles.arrowIcon} />
                </IconButton>
            </Box>
        )
    }

    const outSocials = () => {
        if(mainState.socialsLoaded && !mainState.socialsError && mainState.socials.length){
            return (
                <Box className={styles.footerSocialsBox}>
                    <Typography marginBottom={media(5, 8)} fontSize={media(16, 18)} fontWeight="900" color="primary">
                        Биздин социалдык желелер
                    </Typography>
                    <Box className={styles.socialsGrid}>
                        {mainState.socials.map((elem) => (
                            <MuiLink underline="none" key={elem.id}>
                                <img src={elem.icon} className={styles.socialImg} />
                            </MuiLink>
                        ))}
                    </Box>
                </Box>
            )
        }
        return null;
    }

    return (
        <>
            <Container maxWidth="lg" className={styles.personContainer}>
                <Typography textAlign="center" component="h1" fontSize={media(25, 32)} fontWeight="700" color="primary">ДОЛБОРДУН МИССИЯСЫ</Typography>
                <Box className={styles.personBox}>
                    <img src={require('../assets/images/person.png')} className={styles.personImg} />
                    <Typography component="p" fontSize={media(14, 16)} fontWeight="400" className={clsx('poppins', styles.personTitle)}>
                        “Кел, окуйбуз” долбоорунун миссиясы - жалпы элди
                        китеп окууга кызыктыруу менен, адамдын жашоосун
                        өзгөртүүгө түздөн-түз таасир эткен түшүнүктөрдү жеткирүү.
                    </Typography>
                </Box>
            </Container>
            <Container maxWidth="xl" className={styles.sliderContainer}>
                <Box className={styles.sliderTop}>
                    <Typography fontWeight="700" fontSize={media(24, 36)} color="primary">
                        Сунуш кылынган конкурстар
                    </Typography>
                    {!isArrowBreak && outSliderArrows()}
                </Box>
                {outRecommendedCompetitions()}
                {isArrowBreak && outSliderArrows()}
            </Container>
            <Container maxWidth="md" className={styles.footerContainer}>
                <Box>
                    <img src={require('../assets/images/footer-logo.png')} className={styles.footerLogo} />
                    <Box className={styles.footerList}>
                        {footerList.map((elem, i) => (
                            <NextLink href={elem.to} key={i}>
                                <MuiLink underline="none" fontSize={media(12, 14)} fontWeight="400" color="primary">
                                    {elem.title}
                                </MuiLink>
                            </NextLink>
                        ))}
                    </Box>
                </Box>
                {outSocials()}
            </Container>
            <Container maxWidth="lg" className={styles.copyrightContainer}>
                <Typography fontSize={media(10, 12)} fontWeight="400" color="primary">
                    Авторские права © 2021 AkylbekuSaid.kg
                </Typography>
                <MuiLink href="/" fontSize={media(10, 12)} fontWeight="400" color="primary">
                    Условия оказания  услуг Политика возврата
                </MuiLink>
            </Container>
        </>
    )
}


const WrapperHome = () => {

    return (
        <MainLayout Child={Home} />
    )
}


export default WrapperHome;