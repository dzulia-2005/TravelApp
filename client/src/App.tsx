import { useEffect} from "react"
import {useDispatch} from "react-redux";
import {useMeQuery} from "./features/auth/authApi.ts";
import {clearUser, setUser} from "./features/auth/authSlices.ts";
import AppRoute from "./route"



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


  return (<AppRoute/>)
}

export default App