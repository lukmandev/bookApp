import {useEffect} from "react";
import {useRouter} from "next/router";
import {PAGES_ID, PAGES_PATH} from "../constants/main";


const NotFoundPage = () => {
    const router = useRouter();

    useEffect(() => {
        router.push(PAGES_PATH[PAGES_ID.INDEX]);
    }, []);

    return null;
}

export default NotFoundPage;