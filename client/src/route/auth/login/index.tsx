import {Route} from "react-router-dom";
import {lazy, Suspense} from "react";
import {AuthEnum} from "../enum.ts";

const LoginLazy = lazy(()=>import("../../../pages/auth/login/index.tsx"));


export const AuthLayoutComponent = [
    <Route
        path={AuthEnum.login}
        element={
            <Suspense fallback={<div>Loading...</div>}>
                <LoginLazy/>
            </Suspense>
        }
    />
]