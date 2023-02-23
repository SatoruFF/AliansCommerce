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
        Component: Welcome,
    },
    {
        path: CATALOG__ROUTE,
        Component: Catalog,
    },
    {
        path: CONTACT__ROUTE,
        Component: Contacts,
    }
]

{/* {routes.map(({ path, Component }) => {
<Route key={path} path={path} element={<Component />}></Route>;
})} */}