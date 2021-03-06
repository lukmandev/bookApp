import MainLayout from "../layouts/Main";
import {Box, Container, Link as MuiLink, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {media} from "../utils/media";
import {contactsList} from "../constants/main";
import clsx from "clsx";



const containerPY = media(28, 30);
const containerMediaPY = media(50, 51);

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: containerPY,
        paddingBottom: containerPY,
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gridColumnGap: media(10, 15),
        '@media (max-width: 1000px)': {
            paddingTop: containerPY,
            paddingBottom: containerMediaPY,
            gridTemplateColumns: '1fr',
            gridColumnGap: 'unset',
            gridRowGap: media(10, 15),
        }
    },
    mainImage: {
        maxWidth: media(270, 500),
        width: '100%',
        '@media (max-width: 1000px)': {
            justifySelf: 'center',
        }
    },
    contentHolder: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    listItem: {
        alignItems: 'center',
        gridColumnGap: media(5, 8),
        padding: `${media(3, 5)} 0`,
    },
    icon: {
        minWidth: 0,
        fontSize: media(32, 36),
    },
    listItemText: {
        color: theme.palette.quaternary.main,
        fontSize: media(18, 22),
        fontWeight: '500'
    }
}));

const Contacts = () => {
    const styles = useStyles();
    return (
        <Container maxWidth="lg" className={styles.container}>
            <img src={require('../assets/images/contacts.svg')} className={styles.mainImage} />
            <Box className={styles.contentHolder}>
                <Typography textAlign="left" marginBottom={media(20, 30)} fontSize={media(24, 28)} fontWeight="600" color="quaternary">
                    Сурооңуз болсо, төмөнкү номерлерге байланышыңыз!
                </Typography>
                <List>
                    {contactsList.map((elem, i) => (
                        <ListItem className={styles.listItem} key={i} disablePadding component={MuiLink} href={elem.link}>
                            <ListItemIcon className={styles.icon} sx={{color: 'primary.main'}}>
                                <elem.icon />
                            </ListItemIcon>
                            <ListItemText className={clsx(styles.listItemText, 'poppins')} primary={elem.title} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Container>
    )
}

const WrapperContacts = () => {
    return (
        <MainLayout Child={Contacts} />
    )
}

export default WrapperContacts;