import {makeStyles} from "@mui/styles";
import {media} from "../../utils/media";


const containerPY = media(30, 45);

export const useStyles = makeStyles({
    container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: containerPY,
        paddingBottom: containerPY,
    },
    title: {
        marginTop: media(15, 25),
        marginBottom: media(20, 45),
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gridRowGap: media(10, 15),
        maxWidth: media(400, 480),
        width: '100%',
    },
    button: {
        fontSize: media(14, 16),
        textTransform: 'none',
    },
    showPasswordIcon: {
        fontSize: media(20, 24),
    }
});