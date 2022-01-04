import MainLayout from "../layouts/Main";
import {Container, Link as MuiLink, Typography} from "@mui/material";
import NextLink from 'next/link';
import {makeStyles} from "@mui/styles";
import {Formik} from "formik";
import {media} from "../utils/media";
import * as yup from 'yup';
import ProfileInput from "../components/ProfileForm/TextInput";
import {AccountCircleOutlined, LocalPhoneOutlined} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {selectProfile} from "../store/selectors/auth";
import {compareFormValues} from "../utils/form";
import LoadingButton from "@mui/lab/LoadingButton";
import {updateCompetitionProfile} from "../actions/auth";
import FileInput from "../components/ProfileForm/FileInput";

const containerPY = media(30, 45);

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: containerPY,
        paddingBottom: containerPY,
    },
    form: {
        width: media(240, 300),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gridRowGap: media(10, 15),
    },
    button: {
        textTransform: 'none',
        fontSize: media(13, 15),
        padding: `${media(4, 6)} ${media(8, 10)}`,
        lineHeight: 'auto',
        width: '100%',
        paddingTop: media(7, 10),
        paddingBottom: media(7, 10),
        marginTop: media(10, 14),
    }
});

const validationSchema = yup.object({
    fullname: yup.string()
        .required('Бул жерди толтурунуз'),
    phone: yup.string()
        .required('Телефонунузду жазыныз'),
});

const Profile = () => {
    const styles = useStyles();
    const dispatch = useDispatch();
    const profile = useSelector(selectProfile);

    const initialValues = {
        fullname: profile.competitionProfile.fullname,
        phone: profile.competitionProfile.phone,
        avatar: profile.competitionProfile.avatar,
    }


    return (
        <Container maxWidth="lg" className={styles.container}>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values, actions) => {
                    actions.setSubmitting(true);
                    actions.setStatus(null);
                    const checkForCompare = compareFormValues(initialValues, values);
                    if(checkForCompare.isChanged){
                        const result = await dispatch(updateCompetitionProfile(checkForCompare.changedValues)).unwrap();
                        if(result.isSuccess){
                            actions.setStatus('Ийгиликтуу озгортулду');
                        }else{
                            actions.setStatus('Серверден ката кетип калды');
                        }
                    }
                    actions.setSubmitting(false);
                }}
            >
                {(formik) => (
                    <form onSubmit={formik.handleSubmit} className={styles.form}>
                        <FileInput />
                        <ProfileInput label="Аты жонунуз" StartIcon={AccountCircleOutlined} name="fullname" />
                        <ProfileInput label="Сиздин телефон номериниз" StartIcon={LocalPhoneOutlined} name="phone" />
                        <LoadingButton loading={formik.isSubmitting} variant="contained" type="submit" className={styles.button}>
                            {compareFormValues(initialValues, formik.values).isChanged ? "Сактоо" : "Озгортунуз"}
                        </LoadingButton>
                        {formik.status ? (
                            <Typography fontSize={media(14, 16)} fontWeight="500" color="primary">
                                {formik.status}
                            </Typography>
                        ) : null}
                    </form>
                )}
            </Formik>
            {profile.is_staff ? (
                <NextLink href="/admin/competitions">
                    <MuiLink sx={{cursor: 'pointer'}} marginTop={media(12, 17)} underline="none" fontSize={media(14, 16)} fontWeight="600" color="primary">
                        Конкурстардын результатарын коруу
                    </MuiLink>
                </NextLink>
            ) : null}
        </Container>
    )
}


const WrappedProfile = () => {

    return (
        <MainLayout Child={Profile} />
    )
}


export default WrappedProfile;