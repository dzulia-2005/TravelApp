import {Route} from "react-router-dom";
import {lazy, Suspense} from "react";
import {DASHBOARD_ENUM} from "../enum.ts";


const HomeLazy = lazy(()=>import("../../../../src/pages/home/view/index"));


export const HomePage = [
    <Route
        path = {DASHBOARD_ENUM.home_page}
        element = {
            <Suspense fallback={<div>Loading...</div>}>
              <HomeLazy/>
            </Suspense>
    }
    />
]