import {Box, IconButton, InputAdornment, TextField} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {makeStyles} from "@mui/styles";
import {media} from "../../utils/media";
import {useField} from "formik";


const useStyles = makeStyles(theme => ({
    inputWrapper: {
        '& .MuiInput-underline:after, & .MuiInput-underline:before': {
            borderBottomColor: `#B4B4B4!important`,
        },
    },
    input: {
        fontSize: media(15, 17),
        color: theme.palette.primary.main,
        fontWeight: '600',
    },
    inputIcon: {
        fontSize: media(24, 26),
        color: theme.palette.primary.main,
    },
    editIcon: {
        fontSize: media(17, 19),
        color: theme.palette.primary.main,
    },
    label: {
        fontSize: media(13, 14),
        color: theme.palette.primary.main,
        fontWeight: '500',
    }
}));

const ProfileInput = ({label, StartIcon, ...props}) => {
    const [field, meta] = useField({...props});
    const styles = useStyles();

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <StartIcon className={styles.inputIcon} sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
                fullWidth
                {...field}
                {...props}
                error={!!(meta.touched && meta.error)}
                helperText={meta.touched && meta.error}
                className={styles.inputWrapper}
                InputProps={{
                    className: styles.input,
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                edge="end"
                            >
                                <EditIcon className={styles.editIcon} />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                InputLabelProps={{className: styles.label}}
                label={label}
                variant="standard"
            />
        </Box>
    )
}

export default ProfileInput;