import {Route} from "react-router-dom";
import {lazy, Suspense} from "react";
import {DASHBOARD_ENUM} from "../enum.ts";

const ProfilePage = lazy(()=>import("../../../../src/pages/profile/index.tsx"));


export const Profile = [
    <Route
        path={DASHBOARD_ENUM.profile_page}
        element={
            <Suspense fallback={<div>Loading...</div>}>
                <ProfilePage/>
            </Suspense>
     }
    />
]