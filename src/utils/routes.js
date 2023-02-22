import Catalog from "../pages/Catalog";
import Welcome from "../pages/welcome";
import Contacts from '../pages/Contacts';
import {
    CATALOG__ROUTE,
    CONTACT__ROUTE,
    WELCOME__ROUTE
} from "./consts";


export const routes = [
    {
        path: WELCOME__ROUTE,
        page: Welcome,
    },
    {
        path: CATALOG__ROUTE,
        page: Catalog,
    },
    {
        path: CONTACT__ROUTE,
        page: Contacts,
    }
]