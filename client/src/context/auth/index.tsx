import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { useHttpInterceptor } from "../../hooks/usehttpinterceptor";
import { useMe } from "../../react-query/query/auth";

interface AuthContextType {
    user:User | null,
    isLoading:boolean
}

interface User {
    id: string,
    username: string,
    email: string,
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider:React.FC<PropsWithChildren> = ({children}) => {
    const[user,setUser]=useState<User | null >(null);
    const[isLoading,setIsloading]=useState(true);


    const accessToken = localStorage.getItem("accessToken");
    useHttpInterceptor();

   const { data,isLoading:queryLoading } = useMe({
        isEnabled: !!accessToken,
        accessToken
   })

    useEffect(()=>{
        if (data) {
            setUser(data)
            setIsloading(false)
        }else{
            setIsloading(queryLoading)
        }
    },[data,queryLoading])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <AuthContext.Provider value={{ user ,isLoading }}>
            {children}
        </AuthContext.Provider>
    )

}
