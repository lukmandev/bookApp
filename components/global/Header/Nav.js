import {Tab, Tabs, Link as MuiLink} from "@mui/material";
import NextLink from "next/link";
import {makeStyles} from "@mui/styles";
import {media} from "../../../utils/media";
import {DESKTOP_NAV_LIST} from "../../../constants/main";
import {useRouter} from "next/router";
import {useMemo} from "react";


const useStyles = makeStyles(theme => ({
    tab: {
        textTransform: 'none',
        color: theme.palette.fivefold.main,
        fontSize: media(14, 16),
        fontWeight: '400',
        '&.Mui-selected': {
            color: theme.palette.fivefold.main,
        }
    },
    tabs: {
        '& .MuiTabs-indicator': {
            background: theme.palette.fivefold.main,
        }
    }
}));

const NavTab = (props) => {

    return (
        <NextLink href={props.href ? props.href : "/"}>
            <Tab
                component={MuiLink}
                {...props}
            />
        </NextLink>
    )
}

const Nav = () => {
    const styles = useStyles();
    const router = useRouter();

    const outNavigationValue = useMemo(() => {
        const finded = DESKTOP_NAV_LIST.find(el => el.to === router.asPath);
        if(finded){
            return router.asPath;
        }
        return false;
    }, [router.asPath]);

    return (
        <Tabs
            className={styles.tabs}
            value={outNavigationValue}
        >
            {DESKTOP_NAV_LIST.map((elem, i) => (
                <NavTab
                    key={elem.id}
                    href={elem.to}
                    label={elem.title}
                    value={elem.to}
                    className={styles.tab}
                />
            ))}
        </Tabs>
    )
}

export default Nav;