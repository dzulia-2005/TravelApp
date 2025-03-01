import { AuthorizationHeader } from "../../../../api";

export const SigninSuccess = ({
    accessToken,
    refreshToken
}:{
    accessToken:string;
    refreshToken:string
}) => {
    localStorage.setItem("accessToken",accessToken)
    localStorage.setItem("refreshToken",refreshToken)

    AuthorizationHeader(`Bearer ${accessToken}`)
}