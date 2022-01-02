import Header from "../components/global/Header";
import {useMediaQuery} from "@mui/material";
import MobileBottomNavigation from "../components/global/BottomNavigation/index";
import {breakNavPoint} from "../constants/main";
import {useDispatch, useSelector} from "react-redux";
import {selectAuth} from "../store/selectors/auth";
import {useEffect} from "react";
import Login from "../components/Login";
import {setLoading} from "../store/reducers/main";
import CompetitionRegister from "../components/Login/CompetitionRegister";


const MainLayout = ({Child}) => {
    const dispatch = useDispatch();
    const authState = useSelector(selectAuth);
    const breakPoint = useMediaQuery(breakNavPoint);


    useEffect(() => {
        if(!authState.authInfoLoaded){
            dispatch(setLoading(true));
        }else{
            dispatch(setLoading(false));
        }
    }, [authState.authInfoLoaded]);

    if(authState.authInfoLoaded){
        if(!authState.isAuth){
            return <Login />
        }else{
            if(!authState.profile.competitionProfile){
                return <CompetitionRegister />
            }
            return (
                <>
                    {breakPoint ? (
                        <MobileBottomNavigation />
                    ) : null}
                    <Header />
                    <Child />
                </>
            )
        }
    }else{
        return null;
    }
}

export default MainLayout;