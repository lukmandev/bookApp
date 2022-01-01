import { createTheme } from '@mui/material/styles';
import {media} from "./media";


export const appColors = {
    primary: '#DC016A',
    secondary: '#838383',
    ternary: '#B4B4B4',
    quaternary: '#000000',
    fivefold: '#fff',
}

const theme = createTheme({
    typography: {
        "fontFamily": "'Raleway', sans-serif",
        "fontSize": media(14, 16),
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
        "fontWeightBold": 700,
    },
    palette: {
        primary: {
            main: appColors.primary,
        },
        secondary: {
            main: appColors.secondary,
        },
        ternary: {
            main: appColors.ternary,
        },
        quaternary: {
            main: appColors.quaternary,
        },
        fivefold: {
            main: appColors.fivefold,
        },
    },
});

export default theme;
