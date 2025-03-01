export type Loginpayload = {
    payload : {
        email:string;
        password:string;
    }
}

export type Registerpayload = {
    payload:{
        username: string,
        email: string,
        password: string
    }
}
export type Refreshpayload = {
    payload:{
        accessToken:string
    }
}

export type MEresponse = {
    id: string,
    username: string,
    email: string,
}