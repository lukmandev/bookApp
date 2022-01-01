import {Button, Container, IconButton, InputAdornment, Typography} from "@mui/material";
import {Formik} from "formik";
import LoadingButton from '@mui/lab/LoadingButton';
import * as yup from 'yup';
import {makeStyles, useTheme} from "@mui/styles";
import {media} from "../../utils/media";
import Logo from "../global/Logo";
import TextInput from "./TextInput";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useState} from "react";
import {login} from "../../actions/auth";
import {useDispatch} from "react-redux";
import {useStyles} from "./styles";



const validationSchema = yup.object({
    email: yup.string()
        .email("Бул жер email болуш керек")
        .required("Бул жерди толтурунуз"),
    password: yup.string()
        .required("Бул жерди толтурунуз")
});

const Login = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const styles = useStyles();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }
    return (
        <Container disableGutters maxWidth={false}>
            <Container maxWidth="lg" className={styles.container}>
                <Logo color={theme.palette.primary.main} width={media(130, 180)} height={media(50, 75)} />
                <Typography fontSize={media(18, 22)} fontWeight="500" color="quaternary" className={styles.title}>
                    Аккаунтунузга кириниз
                </Typography>
                <Formik
                    initialValues={{email: "", password: ""}}
                    validationSchema={validationSchema}
                    onSubmit={async (values, actions) => {
                        actions.setSubmitting(true);
                        const result = await dispatch(login(values)).unwrap();
                        actions.setStatus(result.error);
                        actions.setSubmitting(false);
                    }}
                >
                    {(formik) => (
                        <form className={styles.form} onSubmit={formik.handleSubmit}>
                            <TextInput name="email" label="Почта" />
                            <TextInput
                                name="password"
                                label="Пароль"
                                type={showPassword ? "text" : "password"}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {showPassword ?
                                                    <VisibilityOff className={styles.showPasswordIcon} />
                                                    :
                                                    <Visibility className={styles.showPasswordIcon} />
                                                }
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <LoadingButton
                                className={styles.button}
                                fullWidth
                                variant="contained"
                                type="submit"
                                loading={formik.isSubmitting}
                            >
                                Кируу
                            </LoadingButton>
                            {formik.status ? (
                                <Typography fontSize={media(16, 18)} fontWeight="500">{formik.status}</Typography>
                            ) : null}
                        </form>
                    )}
                </Formik>
            </Container>
        </Container>
    )
}

export default Login;