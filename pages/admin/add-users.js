import AdminLayout from "../../layouts/Admin";
import MainLayout from "../../layouts/Main";
import {
    Button, Checkbox,
    CircularProgress,
    Container,
    FormControl,
    InputLabel, ListItemText, MenuItem,
    OutlinedInput,
    Select,
    Typography
} from "@mui/material";
import {media} from "../../utils/media";
import {makeStyles} from "@mui/styles";
import {Formik} from 'formik';
import * as yup from 'yup';
import TextInput from "../../components/Login/TextInput";
import clsx from "clsx";
import {bulkCreateUsers, fetchAllBooks} from "../../actions/admin";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {selectAdmin} from "../../store/selectors/admin";

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const validationSchema = yup.object({
    users: yup.string()
        .required('Бул жерди толтурунуз'),
    password: yup.string()
        .required('Бул жерди толтурунуз'),
    books: yup.array()
});

const AddUsersForm = () => {
    const dispatch = useDispatch();
    const adminState = useSelector(selectAdmin);
    const styles = useStyles();


    useEffect(() => {
        dispatch(fetchAllBooks());
    }, []);

    const outBooks = (books) => {
        if(adminState.booksLoaded){
            if(adminState.booksError){
                return (
                    <MenuItem value={null} disabled={true}>
                        <Checkbox checked={false} />
                        <ListItemText primary="Произошла какая то ошибка" />
                    </MenuItem>
                )
            }
            if(adminState.books.length){
                return adminState.books.map((elem) => (
                    <MenuItem key={elem.id} value={elem.id}>
                        <Checkbox checked={books.indexOf(elem.id) > -1} />
                        <ListItemText primary={elem.title} />
                    </MenuItem>
                ));
            }
            return (
                <MenuItem value={null} disabled={true}>
                    <Checkbox checked={false} />
                    <ListItemText primary="Нету книг" />
                </MenuItem>
            )
        }else{
            return (
                <MenuItem value={null} disabled={true}>
                    <Checkbox checked={false} />
                    <ListItemText primary="Загружается" />
                </MenuItem>
            )
        }
    }

    return (
        <Container className={styles.container}>
            <Formik
                initialValues={{users: '', password: '', books: []}}
                validationSchema={validationSchema}
                onSubmit={async (values, actions) => {
                    actions.setSubmitting(true);
                    actions.setStatus("");
                    const users = values.users.split('\n').filter(el => !!el).map(elem => {
                        return elem.trim();
                    });
                    const body = {
                        users,
                        password: values.password,
                        books: values.books,
                    }
                    const result = await dispatch(bulkCreateUsers(body)).unwrap();
                    actions.setStatus(result.data);
                    actions.resetForm();
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
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                value={formik.values.books}
                                onChange={(e) => formik.setFieldValue('books', e.target.value)}
                                input={<OutlinedInput label="Tag" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {outBooks(formik.values.books)}
                            </Select>
                        </FormControl>
                        <Button type="submit" variant="contained">Жиберуу</Button>
                        {!!formik.status && (
                            <Typography fontSize={media(15, 17)} fontWeight="500" color="primary">
                                {formik.status}
                            </Typography>
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