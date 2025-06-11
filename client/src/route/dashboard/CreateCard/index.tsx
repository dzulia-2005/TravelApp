import {Route} from "react-router-dom";
import {lazy, Suspense} from "react";
import {DASHBOARD_ENUM} from "../enum.ts";

const CreateCardPage = lazy(()=>import("../../../../src/pages/CreateCard/index"));


export const CreateCard = [
    <Route
        path={DASHBOARD_ENUM.create_card}
        element={
        <Suspense fallback={<div>Loading...</div>}>
             <CreateCardPage/>
        </Suspense>
     }
    />
]