import {media} from "../utils/media";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import {Box, Typography} from "@mui/material";


const ErrorMessage = ({message}) => {

    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: `${media(20, 30)} ${media(10, 15)}`,
        }}>
            <SentimentVeryDissatisfiedIcon sx={{
                fontSize: media(40, 60),
                color: 'primary.main',
            }} />
            <Typography sx={{mt: media(4, 6)}} textAlign="center" fontWeight="400" fontSize={media(15, 17)} color="quaternary">
                {message}
            </Typography>
        </Box>
    );
}


export default ErrorMessage;