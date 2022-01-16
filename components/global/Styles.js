import {makeStyles} from "@mui/styles";


const useStyles = makeStyles({
    '@global': {
        'html, body': {
            fontFamily: "'Raleway', sans-serif",
        },
        '.poppins': {
            fontFamily: "'Poppins', sans-serif",
        },
        'a': {
            cursor: 'pointer'
        }
    }
});


const GlobalStyles = () => {
    useStyles();
    return null
}

export default GlobalStyles;