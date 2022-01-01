import {Container, Typography} from "@mui/material";
import {useStyles} from "./styles";
import Logo from "../global/Logo";
import {media} from "../../utils/media";
import {useTheme} from "@mui/styles";
import {setCompetitionProfile} from "../../actions/auth";
import TextInput from "./TextInput";
import LoadingButton from "@mui/lab/LoadingButton";
import {Formik} from "formik";
import * as yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {selectAuth} from "../../store/selectors/auth";



const validationSchema = yup.object({
    fullname: yup.string()
        .required("Бул жерди толтурунуз"),
    phone: yup.string()
        .required("Бул жерди толтурунуз")
});

const CompetitionRegister = () => {
    const authState = useSelector(selectAuth);
    const dispatch = useDispatch();
    const styles = useStyles();
    const theme = useTheme();
    return (
        <Container disableGutters maxWidth={false}>
            <Container maxWidth="lg" className={styles.container}>
                <Logo color={theme.palette.primary.main} width={media(130, 180)} height={media(50, 75)} />
                <Typography fontSize={media(18, 22)} fontWeight="500" color="quaternary" className={styles.title}>
                    Форманы толтурунуз
                </Typography>
                <Formik
                    initialValues={{
                        fullname: "",
                        phone: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, actions) => {
                        actions.setSubmitting(true);
                        const result = await dispatch(setCompetitionProfile({...values, user: authState.profile.id})).unwrap();
                        actions.setStatus(result.error);
                        actions.setSubmitting(false);
                    }}
                >
                    {(formik) => (
                        <form className={styles.form} onSubmit={formik.handleSubmit}>
                            <TextInput name="fullname" label="Аты жонунуз" />
                            <TextInput
                                name="phone"
                                label="Телефон номериниз"
                                type="phone"
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

export default CompetitionRegister;