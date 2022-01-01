import {BottomNavigation, BottomNavigationAction, Link as MuiLink, Paper} from "@mui/material";
import NextLink from 'next/link';
import {MOBILE_NAV_LIST} from "../../../constants/main";
import {makeStyles} from "@mui/styles";
import {media} from "../../../utils/media";
import {useRouter} from "next/router";
import clsx from "clsx";
import HideOnScroll from "../HideOnScroll";
import {useMemo} from "react";


const useStyles = makeStyles(theme => ({
    navigation: {
        justifyContent: 'space-around',
        padding: `${media(4, 6)} ${media(8, 15)}`,
        height: 'auto',
        alignItems: 'center',
        background: theme.palette.primary.main,
    },
    navigationItem: {
        padding: media(5, 8),
        '& .MuiBottomNavigationAction-label': {
            fontWeight: '500',
            fontSize: media(12, 16),
            color: theme.palette.fivefold.main,
        },
        '&.active .MuiBottomNavigationAction-label': {
            color: theme.palette.quaternary.main,
        }
    },
    icon: {
        fontSize: media(22, 28),
        color: theme.palette.fivefold.main,
        '&.active': {
            color: theme.palette.quaternary.main,
        }
    },
    link: {
        display: 'flex',
        alignItems: 'center',
    }
}));

const MobileBottomNavigation = () => {
    const styles = useStyles();
    const router = useRouter();

    const outNavigationValue = useMemo(() => {
        const finded = MOBILE_NAV_LIST.find(el => el.to === router.asPath);
        if(finded){
            return router.asPath;
        }
        return false;
    }, [router.asPath]);

    return (
        <HideOnScroll direction="up">
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: '1000' }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={outNavigationValue}
                    className={styles.navigation}
                >
                    {MOBILE_NAV_LIST.map((elem, i) => (
                        <NextLink key={i} href={elem.to}>
                            <MuiLink className={styles.link} underline="none">
                                <BottomNavigationAction
                                    showLabel={true}
                                    key={elem.id}
                                    label={elem.title}
                                    icon={<elem.icon className={clsx(styles.icon, {
                                        active: router.asPath === elem.to
                                    })}/>}
                                    className={clsx(styles.navigationItem, {active: router.asPath === elem.to})}
                                />
                            </MuiLink>
                        </NextLink>
                    ))}
                </BottomNavigation>
            </Paper>
        </HideOnScroll>
    )
}

export default MobileBottomNavigation;