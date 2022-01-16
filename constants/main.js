import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import DialpadOutlinedIcon from '@mui/icons-material/DialpadOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import {media} from "../utils/media";


export const PAGES_ID = {
    INDEX: 'HOME',
    COMPETITIONS: 'COMPETITIONS',
    CONTACTS: 'CONTACTS',
    PROFILE: 'PROFILE',
    DETAIL_COMPETITION: 'DETAIL_COMPETITION',
    SEARCH_PAGE: 'SEARCH_PAGE',
}


export const PAGES_TITLE = {
    [PAGES_ID.INDEX]: 'Башкы бет',
    [PAGES_ID.PROFILE]: 'Профиль',
    [PAGES_ID.COMPETITIONS]: 'Конкурстар',
    [PAGES_ID.CONTACTS]: "Байланыш",
    [PAGES_ID.DETAIL_COMPETITION]: "Конкретный конкурс",
    [PAGES_ID.SEARCH_PAGE]: 'Поиск по конкурсам',
}

export const PAGES_PATH = {
    [PAGES_ID.INDEX]: '/',
    [PAGES_ID.PROFILE]: '/profile',
    [PAGES_ID.COMPETITIONS]: '/competitions',
    [PAGES_ID.CONTACTS]: '/contacts',
    [PAGES_ID.DETAIL_COMPETITION]: "/competition/[id]",
    [PAGES_ID.SEARCH_PAGE]: '/competition/search/[query]',
}

export const DESKTOP_NAV_LIST = [
    {
        id: PAGES_ID.INDEX,
        to: PAGES_PATH[PAGES_ID.INDEX],
        title: PAGES_TITLE[PAGES_ID.INDEX],
    },
    {
        id: PAGES_ID.COMPETITIONS,
        to: PAGES_PATH[PAGES_ID.COMPETITIONS],
        title: PAGES_TITLE[PAGES_ID.COMPETITIONS],
    },
    {
        id: PAGES_ID.CONTACTS,
        to: PAGES_PATH[PAGES_ID.CONTACTS],
        title: PAGES_TITLE[PAGES_ID.CONTACTS],
    },
]

export const MOBILE_NAV_LIST = [
    {
        id: PAGES_ID.INDEX,
        to: PAGES_PATH[PAGES_ID.INDEX],
        title: PAGES_TITLE[PAGES_ID.INDEX],
        icon: CottageOutlinedIcon,
    },
    {
        id: PAGES_ID.COMPETITIONS,
        to: PAGES_PATH[PAGES_ID.COMPETITIONS],
        title: PAGES_TITLE[PAGES_ID.COMPETITIONS],
        icon: MenuBookOutlinedIcon,
    },
    {
        id: PAGES_ID.CONTACTS,
        to: PAGES_PATH[PAGES_ID.CONTACTS],
        title: PAGES_TITLE[PAGES_ID.CONTACTS],
        icon: DialpadOutlinedIcon,
    },
    {
        id: PAGES_ID.PROFILE,
        to: PAGES_PATH[PAGES_ID.PROFILE],
        title: PAGES_TITLE[PAGES_ID.PROFILE],
        icon: AccountCircleOutlinedIcon,
    },
]


export const breakNavPoint = '(max-width:1000px)';


export const competitionRules = [
    {
        text: "Мүмкүн болушунча адилеттүү болуш үчүн китепти карабооңузду суранабыз.",
    },
    {
        text: "Эгер сиз бир китепти тандап кайра артка чыга турган болсоңуз, конкурсга кайра катыша албай каласыз!",
    },
    {
        text: "Ар бир суроонун деңелине карап убакыт берилет.",
    },
    {
        text: "Суроонун ичинен кайсы вариантты акыркы жолу бассаңыз, ошол вариант эсептелинет.",
    },
    {
        text: "Суроолордун жоопторун тест бүткөндөн кийин көрө аласыз."
    },
    {
        text: "Эгер сиз тестке киргенден кийин, кандайдыр бир себеп менен сайттан чыксаңыз, сиз конкурстан чыгып кетесиз жана бул кон- курсга кайра катыша албай каласыз!",
    },
    {
        text: "Эгер убакыт бүтүп калса, автоматтык түрдө кийинки суроого өтүп кетет жана жооп  бербеген сурооңуз эсептелинбей калат."
    }
]

export const competitionsTabs = [
    {
        title: "Жакында боло турчу конкурстар",
        id: 0,
        path: '/competition/public/soon/',
    },
    {
        title: "Учурда болуп жаткан конкурстар",
        id: 1,
        path: '/competition/public/current/',
    },
]

export const gridWrapperStyles = {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridColumnGap: media(10, 15),
    gridRowGap: media(10, 15),
    '&.single': {
        display: 'flex',
        gridTemplateColumns: 'unset!important',
        gridColumnGap: 'unset!important',
        gridRowGap: 'unset!important',
    },
    '@media (max-width: 1000px)': {
        gridTemplateColumns: '1fr 1fr',
    },
    '@media (max-width: 700px)': {
        gridTemplateColumns: '1fr',
    }
}

export const imageSkeleton = require('../assets/images/avatar.png');


export const contactsList = [
    {
        title: "+996 700 12 13 15",
        icon: WhatsAppIcon,
        color: '#1ED400',
        link: 'https://wa.me/0706048466',
    },
    {
        title: "+996 700 12 13 15",
        icon: TelegramIcon,
        color: '#0090CD',
        link: 'https://t.me/username',
    },
    {
        title: "+996 700 12 13 15",
        icon: PhoneOutlinedIcon,
        color: '#009DCE',
        link: 'tel:+996700121315'
    }
]