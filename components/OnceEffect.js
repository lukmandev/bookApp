import {useEffect} from "react";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {refresh} from "../actions/auth";
import {setLoading} from "../store/reducers/main";


const OnceEffect = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refresh());
    }, []);


    useEffect(() => {
        router.events.on('routeChangeStart', () => dispatch(setLoading(true)));
        router.events.on('routeChangeComplete', () => dispatch(setLoading(false)));
        router.events.on('routeChangeError', () => dispatch(setLoading(false)));

        return () => {
            router.events.off('routeChangeStart', () => dispatch(setLoading(true)));
            router.events.off('routeChangeComplete', () => dispatch(setLoading(true)));
            router.events.off('routeChangeError', () => dispatch(setLoading(true)));
        };
    }, [router]);

    return null;
}


export default OnceEffect;