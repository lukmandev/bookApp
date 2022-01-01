import {TextField} from "@mui/material";
import {useField} from "formik";
import {makeStyles} from "@mui/styles";
import {media} from "../../utils/media";


const useStyles = makeStyles({
    input: {
        '& input': {
            fontSize: media(13, 15),
        },
        '& .MuiFormHelperText-root': {
            fontSize: media(13, 15),
        }
    }
});


const TextInput = ({name, ...props}) => {
    const styles = useStyles();
    const [field, meta] = useField({name});
    return (
        <TextField
            fullWidth
            className={styles.input}
            required
            {...field}
            {...props}
            error={!!(meta.touched && meta.error)}
            helperText={(meta.touched && meta.error) ? meta.error : false}
        />
    )
}

export default TextInput;