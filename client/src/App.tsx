import { Route, Routes } from "react-router-dom"
import DashboardLayout from "./layouts"
import {lazy, Suspense, useEffect} from "react"
import {useDispatch} from "react-redux";
import {useMeQuery} from "./features/auth/authApi.ts";
import {clearUser, setUser} from "./features/auth/authSlices.ts";

const HomeLazy = lazy(()=>import("../src/pages/home/view/index"));
const LoginLazy = lazy(()=>import("../src/pages/auth/login/index"));
const RegistartionLazy = lazy(()=>import("../src/pages/auth/register/index"));
const CreateCardPage = lazy(()=>import("../src/pages/CreateCard/index"));
const ProfilePage = lazy(()=>import("../src/pages/profile/index.tsx"));
const EditCard = lazy(()=>import("../src/pages/EditCard/index.tsx"));
const WeatherPage = lazy(()=>import("../src/pages/weather/index"));

const App = () => {
    const dispatch = useDispatch();
    const {data,isSuccess,isError} = useMeQuery();

    useEffect(()=>{
       if(isSuccess && data.userName){
            dispatch(setUser(data))
       }else if(isError){
           dispatch(clearUser());
       }
    },[isSuccess,isError]);


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

          <Route
            path="/create-Card"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                  <CreateCardPage/>
              </Suspense>
            }
          />

          <Route
            path="/profilepage"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ProfilePage/>
              </Suspense>
            }
          />

          <Route
              path="/edit-card/:id"
              element={
                  <Suspense fallback={<div>Loading...</div>}>
                      <EditCard/>
                  </Suspense>}
          />

          <Route
                path="/weather-page"
                element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <WeatherPage/>
                    </Suspense>
                }
          />
          

      </Route>

    </Routes>
  )
}

export default App