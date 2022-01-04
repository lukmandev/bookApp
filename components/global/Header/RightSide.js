import {Box, IconButton, Input, Link as MuiLink, Typography, useMediaQuery} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {Formik} from 'formik';
import {makeStyles} from "@mui/styles";
import * as yup from 'yup';
import {media} from "../../../utils/media";
import NextLink from 'next/link';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CloseIcon from '@mui/icons-material/Close';
import {useRouter} from "next/router";
import {breakNavPoint, PAGES_ID, PAGES_PATH, PAGES_TITLE} from "../../../constants/main";
import {appColors} from "../../../utils/theme";
import {useEffect} from "react";
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {setHeaderFormOpen} from "../../../store/reducers/main";
import {selectHeaderFormOpen} from "../../../store/selectors/main";


const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        gridColumnGap: media(10, 15),
    },
    input: {
        width: media(200, 250),
        padding: `0 ${media(5, 8)} 0 ${media(10, 15)}`,
        borderRadius: '15px',
        background: theme.palette.fivefold.main,
        [`@media ${breakNavPoint}`]: {
            width: 'fit-content',
            padding: 0,
            background: 'transparent',
            '&.open': {
                background: theme.palette.fivefold.main,
            },
            '&.open input': {
                width: media(200, 250),
                padding: `${media(2, 4)} ${media(5, 8)} ${media(2, 4)} ${media(10, 15)}`,
            },
            '& .header-form-icon': {
                color: theme.palette.fivefold.main,
            },
            '&.open .header-form-icon': {
                color: theme.palette.primary.main,
            }
        },
        '& input': {
            fontSize: media(13, 15),
            [`@media ${breakNavPoint}`]: {
                width: '0px',
            },
        },
        '&:before, &:after': {
            borderBottom: '0px solid transparent',
        },
        '&:hover:not(.Mui-disabled):before': {
            borderBottom: '0px solid transparent',
        },
        '&.Mui-focused:after, &.Mui-focused:before': {
            display: 'none',
            borderBottom: '0px solid transparent',
        },
    },
    iconButton: {
        padding: 0,
    },
    inputIcon: {
        fontSize: media(20, 24),
        color: theme.palette.primary.main,
    },
    mediaSearchIcon: {
        fontSize: media(20, 24),
        color: theme.palette.fivefold.main,
    },
    profileLink: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        cursor: 'pointer',
    },
    profileIcon: {
        fontSize: media(22, 24),
    },
}));

const validationSchema = yup.object({
    text: yup.string()
        .required('')
});


const RightSide = () => {
    const isFormOpen = useSelector(selectHeaderFormOpen);
    const dispatch = useDispatch();
    const router = useRouter();
    const styles = useStyles();
    const breakNav = useMediaQuery(breakNavPoint);

    const toggleIsOpen = () => dispatch(setHeaderFormOpen(!isFormOpen));

    useEffect(() => {

        return () => {
            dispatch(setHeaderFormOpen(false));
        }
    }, []);
    return (
        <Box className={styles.wrapper}>
            <Formik
                initialValues={{text: ""}}
                validationSchema={validationSchema}
                onSubmit={(values, _) => {
                    router.push({
                        pathname: PAGES_PATH[PAGES_ID.SEARCH_PAGE],
                        query: {
                            query: values.text
                        }
                    });
                }}
            >
                {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                        <Input
                            className={clsx(styles.input, {
                                open: isFormOpen
                            })}
                            name="text"
                            value={formik.values.text}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={true}
                            endAdornment={
                                breakNav ? (
                                    isFormOpen ? (formik.values.text.trim() === "" ? (
                                        <IconButton onClick={toggleIsOpen} className={styles.iconButton} type="button">
                                            <CloseIcon className={styles.inputIcon} />
                                        </IconButton>
                                    ) : (
                                        <IconButton className={styles.iconButton} type="submit">
                                            <SearchIcon className={styles.inputIcon} />
                                        </IconButton>
                                    )) : (
                                        <IconButton onClick={toggleIsOpen} className={styles.iconButton} type="button">
                                            <SearchIcon className={clsx(styles.inputIcon, 'header-form-icon')} />
                                        </IconButton>
                                    )
                                ) : (
                                    <IconButton className={styles.iconButton} type="submit">
                                        <SearchIcon className={styles.inputIcon} />
                                    </IconButton>
                                )
                            }

                        />
                    </form>
                )}
            </Formik>
            {breakNav ? null : (
                <NextLink href={PAGES_PATH[PAGES_ID.PROFILE]}>
                    <MuiLink underline="none" color={appColors.fivefold} className={styles.profileLink}>
                        <AccountCircleOutlinedIcon color="fivefold" className={styles.profileIcon} />
                        <Typography fontSize={media(12, 14)} fontWeight="500">
                            {PAGES_TITLE[PAGES_ID.PROFILE]}
                        </Typography>
                    </MuiLink>
                </NextLink>
            )}
        </Box>
    )
}

export default RightSide;