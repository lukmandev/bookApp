import {useSelector} from "react-redux";
import {selectAuth} from "../store/selectors/auth";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {PAGES_ID, PAGES_PATH} from "../constants/main";


const AdminLayout = ({Children}) => {
    const router  = useRouter();
    const authState = useSelector(selectAuth);
    if(!authState.profile.is_staff){
        return "";
    }
    useEffect(() => {
        if(!authState.profile.is_staff){
            router.push(PAGES_PATH[PAGES_ID.INDEX]);
        }
    }, []);

    return (
        <>
            <Children />
        </>
    )
}

export default AdminLayout;