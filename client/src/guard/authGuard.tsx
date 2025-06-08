
import {useNavigate,} from "react-router-dom";
import {ReactNode, useEffect} from "react";

type AuthGuardProps = {
    children: ReactNode;
};


const AuthGuard = ({children}:AuthGuardProps) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if(!token){
            navigate("/login")
        }
    }, [token,navigate]);

    if (!token) return null;

    return <>{children}</>;
}

export default AuthGuard;