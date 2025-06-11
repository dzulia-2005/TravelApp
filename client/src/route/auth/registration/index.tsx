import {Route} from "react-router-dom";
import {lazy, Suspense} from "react";
import {AuthEnum} from "../enum.ts";

const RegistartionLazy = lazy(()=>import("../../../pages/auth/register/index.tsx"));


export const RegistationLayoutComponent = [
    <Route
        path={AuthEnum.register}
        element={
            <Suspense fallback={<div>Loading...</div>}>
                <RegistartionLazy/>
            </Suspense>
        }
    />
]