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
    COMPETITION_RESULT: 'COMPETITION_RESULT',
}


export const PAGES_TITLE = {
    [PAGES_ID.INDEX]: 'Башкы бет',
    [PAGES_ID.PROFILE]: 'Профиль',
    [PAGES_ID.COMPETITIONS]: 'Конкурстар',
    [PAGES_ID.CONTACTS]: "Байланыш",
    [PAGES_ID.DETAIL_COMPETITION]: "Конкретный конкурс",
    [PAGES_ID.SEARCH_PAGE]: 'Поиск по конкурсам',
    [PAGES_ID.COMPETITION_RESULT]: 'Результат конкурса',
}

export const PAGES_PATH = {
    [PAGES_ID.INDEX]: '/',
    [PAGES_ID.PROFILE]: '/profile',
    [PAGES_ID.COMPETITIONS]: '/competitions',
    [PAGES_ID.CONTACTS]: '/contacts',
    [PAGES_ID.DETAIL_COMPETITION]: "/competition/[id]",
    [PAGES_ID.SEARCH_PAGE]: '/competition/search/[query]',
    [PAGES_ID.COMPETITION_RESULT]: '/competition/result/[id]',
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
        text: "Адилеттүү болуш үчүн китепти карабаңыз",
    },
    {
        text: "Бир убакытта бир эле конкурска катыша аласыз!",
    },
    {
        text: "Ар бир суроонун деңелине карап убакыт берилет.",
    },
    {
        text: "Суроонун ичинен  белгилеген варианттыңызды платформа акыркы жооп катары кабыл алат.",
    },
    {
        text: "Конкурстун жыйынтыгын тест бүтөөр замат көрө аласыз.."
    },
    {
        text: "Тестти баштагандан кийин платформадан чыксаңыз, программа сизди автоматтык түрдө тестен чыгарып салат.",
    },
    {
        text: "Суроого берилген убакытта жооп бербесеңиз анда программа сизди автоматтык түрдө кийинки суроого өткөрүп жиберет.."
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
        path: '/competition/mine/',
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
        title: "1234567890",
        icon: WhatsAppIcon,
        color: '#1ED400',
        link: '',
    },
    {
        title: "1234567890",
        icon: TelegramIcon,
        color: '#0090CD',
        link: '',
    },
    {
        title: "1234567890",
        icon: PhoneOutlinedIcon,
        color: '#009DCE',
        link: ''
    }
]

export const footerList = [
    {
        title: 'Башкы бет',
        to: '/',
    },
    {
        title: 'Конкурстар',
        to: '/competitions',
    },
    {
        title: 'Байланыш',
        to: '/contacts',
    }
]