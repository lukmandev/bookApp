import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import DialpadOutlinedIcon from '@mui/icons-material/DialpadOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


export const PAGES_ID = {
    INDEX: 'HOME',
    COMPETITIONS: 'COMPETITIONS',
    CONTACTS: 'CONTACTS',
    PROFILE: 'PROFILE',
}


export const PAGES_TITLE = {
    [PAGES_ID.INDEX]: 'Башкы бет',
    [PAGES_ID.PROFILE]: 'Профиль',
    [PAGES_ID.COMPETITIONS]: 'Конкурстар',
    [PAGES_ID.CONTACTS]: "Менеджер",
}

export const PAGES_PATH = {
    [PAGES_ID.INDEX]: '/',
    [PAGES_ID.PROFILE]: '/profile',
    [PAGES_ID.COMPETITIONS]: '/competitions',
    [PAGES_ID.CONTACTS]: '/contacts',
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