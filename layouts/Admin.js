import {useSelector} from "react-redux";
import {selectAuth} from "../store/selectors/auth";


const AdminLayout = ({children}) => {
    const authState = useSelector(selectAuth);
    if(!authState.profile.is_superuser){
        return <h1>You have no access to here</h1>
    }
    return (
        <>
            {children}
        </>
    )
}

export default AdminLayout;