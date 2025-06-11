import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import {DASHBOARD_ENUM} from "../enum.ts";

const EditCard = lazy(()=>import("../../../../src/pages/EditCard/index.tsx"));


export const editCard = [
    <Route
        key="edit-card"
        path={DASHBOARD_ENUM.edit_card}
        element={
            <Suspense fallback={<div>Loading...</div>}>
                <EditCard/>
            </Suspense>
        }
    />
]