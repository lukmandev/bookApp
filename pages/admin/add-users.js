import AdminLayout from "../../layouts/Admin";
import MainLayout from "../../layouts/Main";
import {Button, CircularProgress, Container, Typography} from "@mui/material";
import {media} from "../../utils/media";
import {makeStyles} from "@mui/styles";
import {Formik} from 'formik';
import * as yup from 'yup';
import TextInput from "../../components/Login/TextInput";
import clsx from "clsx";
import {bulkCreateUsers} from "../../actions/admin";
import {useDispatch} from "react-redux";

const containerPY = media(15, 20);

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
        maxWidth: '500px',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        gridRowGap: media(10, 15),
    },
    loadingIndicatorHolder: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgb(255, 255, 255, 0.7)',
        zIndex: 3,
        '&.active': {
            display: 'flex',
        }
    }
});

const validationSchema = yup.object({
    users: yup.string()
        .required('Бул жерди толтурунуз'),
    password: yup.string()
        .required('Бул жерди толтурунуз'),
});

const AddUsersForm = () => {
    const dispatch = useDispatch();
    const styles = useStyles();
    return (
        <Container className={styles.container}>
            <Formik
                initialValues={{users: '', password: ''}}
                validationSchema={validationSchema}
                onSubmit={async (values, actions) => {
                    actions.setSubmitting(true);
                    actions.setStatus("");
                    const users = values.users.split('\n').filter(el => !!el).map(elem => {
                        return elem.trim();
                    });
                    const body = {
                        users,
                        password: values.password
                    }
                    const result = await dispatch(bulkCreateUsers(body)).unwrap();
                    actions.setStatus(result.data);
                    actions.setSubmitting(false);
                }}
            >
                {(formik) => (
                    <form onSubmit={formik.handleSubmit} className={styles.form}>
                        <div className={clsx(styles.loadingIndicatorHolder, {
                            active: formik.isSubmitting
                        })}>
                            <CircularProgress />
                        </div>
                        <TextInput
                            name="users"
                            label="Катышуучулар"
                            multiline
                            rows={4}
                        />
                        <TextInput name="password" label="Пароль" />
                        <Button type="submit" variant="contained">Жиберуу</Button>
                        {!!formik.status && (
                            <>
                                {typeof formik.status === 'string' ? null : (
                                    <Typography fontSize={media(15, 17)} fontWeight="500" color="primary">
                                        Астыдагы email дер уже бар болчу
                                    </Typography>
                                )}
                                <Typography fontSize={media(15, 17)} fontWeight="500" color="primary">
                                    {typeof formik.status === 'string' ? formik.status : formik.status.join('____')}
                                </Typography>
                            </>
                        )}
                    </form>
                )}
            </Formik>
        </Container>
    )
}


const WrappedAdminAddUserForm = () => {
    return (
        <AdminLayout Children={AddUsersForm} />
    )
}


const WrappedWithLayout = () => {
    return (
        <MainLayout Child={WrappedAdminAddUserForm} />
    )
}

export default WrappedWithLayout;