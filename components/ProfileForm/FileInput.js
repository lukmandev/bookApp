import {Box, IconButton} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import {makeStyles} from "@mui/styles";
import {media} from "../../utils/media";
import {useField} from "formik";
import {useEffect, useState} from "react";


const avatarSize = media(100, 115);
const addPhotoIconSize = media(30, 36);


const useStyles = makeStyles(theme => ({
    avatar: {
        width: avatarSize,
        height: avatarSize,
        position: 'relative',
        marginBottom: media(13, 16),
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
            overflow: 'hidden',
            border: `2px solid ${theme.palette.primary.main}`,
        }
    },
    addPhotoIcon: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: addPhotoIconSize,
        height: addPhotoIconSize,
        background: theme.palette.primary.main,
        color: theme.palette.fivefold.main,
        fontSize: media(20, 22),
        '&:hover': {
            background: theme.palette.primary.main,
        }
    },
}));


const noImage = require('../../assets/images/avatar.png');

const FileInput = () => {
    const styles = useStyles();
    const [field, _, helpers] = useField({name: 'avatar'});
    const [avatar, setAvatar] = useState(field.value ? field.value : noImage);

    const handleAvatarChange = (e) => {
        helpers.setValue(e.target.files[0]);
    }

    useEffect(() => {
        const setAvatarType = () => {
            if(typeof field.value === 'string'){
                setAvatar(field.value);
                return;
            }
            if(!field.value){
                setAvatar(noImage);
                return;
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                setAvatar(e.target.result);
            }
            reader.onerror = (e) => {
                setAvatar(noImage);
            }
            reader.readAsDataURL(field.value);
        }
        setAvatarType();
    }, [field.value]);

    return (
        <Box className={styles.avatar}>
            <img src={avatar} />
            <input onChange={handleAvatarChange} accept="image/*" id="avatar-profile" type="file" style={{display: 'none'}} />
            <IconButton component="label" htmlFor="avatar-profile" className={styles.addPhotoIcon}>
                <AddAPhotoIcon />
            </IconButton>
        </Box>
    )
}


export default FileInput;