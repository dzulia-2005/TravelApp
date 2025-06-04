import { Route, Routes } from "react-router-dom"
import DashboardLayout from "./layouts"
import { lazy, Suspense } from "react"
//import {useHttpInterceptor} from "./hooks/useHttpInterceptor.ts";
const HomeLazy = lazy(()=>import("../src/pages/home/view/index"));
const LoginLazy = lazy(()=>import("../src/pages/auth/login/index"));
const RegistartionLazy = lazy(()=>import("../src/pages/auth/register/index"))

const App = () => {
    //useHttpInterceptor();
  return (
    <Routes>
      
      <Route element={<DashboardLayout/>}>

          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomeLazy/>
              </Suspense>
            }
          />

          <Route
            path="/login"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LoginLazy/>
              </Suspense>
            }
          />

          <Route
            path="/registration"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <RegistartionLazy/>
              </Suspense>
            }
          />
          

      </Route>

    </Routes>
  )
}

export default App