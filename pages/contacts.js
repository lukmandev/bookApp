import MainLayout from "../layouts/Main";
import {Box, Container, Link as MuiLink, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {media} from "../utils/media";
import {List} from "@mui/icons-material";



const containerPY = media(20, 30);

const useStyles = makeStyles({
    container: {
        paddingTop: containerPY,
        paddingBottom: containerPY,
        display: 'flex',
        gridTemplateColumns: 'auto 1fr',
    },
    mainImage: {
        width: media(300, 500),
    }
});

const Contacts = () => {
    const styles = useStyles();
    return (
        <Container maxWidth="lg" className={styles.container}>
            <img src={require('../assets/images/contacts.svg')} className={styles.mainImage} />
            <Box>
                <Typography textAlign="center" fontSize={media(30, 36)} fontWeight="600" color="quaternary">
                    Сизде суроо барбы?
                </Typography>
                <Typography textAlign="center" fontSize={media(20, 24)} fontWeight="500" color="quaternary">
                    Биз менен байланышыңыз, биз сизге бардык
                    пункттарды тактоого жардам беребиз.
                </Typography>
                <List>
                    <ListItem disablePadding component={MuiLink}>
                        <ListItemButton>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                        </ListItemButton>
                    </ListItem>
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