import {AppBar, Container, Toolbar, Link as MuiLink, useMediaQuery} from "@mui/material";
import HideOnScroll from "../HideOnScroll";
import {makeStyles} from "@mui/styles";
import NextLink from 'next/link';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {media} from "../../../utils/media";
import Nav from "./Nav";
import RightSide from "./RightSide";
import {breakNavPoint, PAGES_ID, PAGES_PATH} from "../../../constants/main";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {selectHeaderFormOpen} from "../../../store/selectors/main";


const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: media(10, 15),
        paddingBottom: media(10, 15),
    },
    logo: {
        width: media(60, 140),
        objectFit: 'contain',
    },
    backToIcon: {
        fontSize: media(28, 35)
    },
});


const Header = () => {
    const isFormOpen = useSelector(selectHeaderFormOpen);
    const router = useRouter();
    const breakNav = useMediaQuery(breakNavPoint);
    const styles = useStyles();

    const backOneStep = () => {
        router.back();
    }


    const outLogo = () => {
        return (
            <NextLink href={PAGES_PATH[PAGES_ID.INDEX]}>
                <MuiLink sx={{cursor: 'pointer'}}>
                    <img src={require('../../../assets/images/logo.svg')} className={styles.logo} />
                </MuiLink>
            </NextLink>
        )
    }

    return (
        <HideOnScroll>
            <AppBar position="sticky" color="primary">
                <Toolbar disableGutters>
                    <Container maxWidth="lg" className={styles.container}>
                        {breakNav ? (
                            <KeyboardBackspaceIcon onClick={backOneStep} className={styles.backToIcon} />
                        ) : null}
                        {breakNav ? (isFormOpen ? null : outLogo()) : outLogo()}
                        {breakNav ? null : (<Nav />)}
                        <RightSide />
                    </Container>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}

export default Header;