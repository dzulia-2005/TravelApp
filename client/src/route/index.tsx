import {Route, Routes} from "react-router-dom";
import AuthGuard from "../guard/authGuard.tsx";
import AuthLayout from "../layouts/authLayout.tsx";
import DashboardLayout from "../layouts";
import {authRoutes} from "./auth";
import {dashboardRoutes} from "./dashboard";


const AppRoute = () => {
    return (
        <Routes>
            <Route element={<AuthGuard><DashboardLayout/></AuthGuard>}>
                {dashboardRoutes}
            </Route>

            <Route element={<AuthLayout/>}>
                {authRoutes}
            </Route>
        </Routes>
    )
}

export default AppRoute;