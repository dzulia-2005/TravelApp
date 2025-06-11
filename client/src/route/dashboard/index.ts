import {HomePage} from "./home";
import {CreateCard} from "./CreateCard";
import {Profile} from "./ProfilePage";
import {editCard} from "./EditCard";
import {weather} from "./Weather";

export const dashboardRoutes = [
    ...HomePage,
    ...CreateCard,
    ...Profile,
    ...editCard,
    ...weather,
]