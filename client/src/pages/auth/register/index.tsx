import React from 'react'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Input , Space,  Button} from 'antd';
import {useAppDispatch, useAppSelector} from "../../../utils/reduxHooks.ts";
import {Controller, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {zodResolver} from "@hookform/resolvers/zod";
import {RegisterSchema} from "./shcema.ts";
import {register} from "../../../features/auth/authThunks.ts";

type registerFormInput = {
    userName:string;
    email:string;
    password:string;
}


const Register:React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { control, handleSubmit , formState:{errors} } = useForm<registerFormInput>({
        defaultValues : {
            userName: '',
            email:'',
            password : '',
        },
        resolver:zodResolver(RegisterSchema)
    });

    const {isLoading,isError,errorMessage} = useAppSelector(state => state.auth);
    const onSubmit = async (data:registerFormInput) => {
        const result = await dispatch(register({email:data.email , password:data.password , userName:data.userName}))
        if(register.fulfilled.match(result)){
            navigate("/")
        }
        if(register.rejected.match(result)){
            alert("register rejected")
        }
    }


  return (
    <div className='flex justify-center'>
    <div className='w-[500px] h-[400px] bg-[#101828] rounded-xl text-[#ffff]'>
            <div className='text-center text-2xl py-12'>Sign In</div>
            <div className='text-center'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Space direction="vertical">
                        <Controller
                            control={control}
                            render={(field)=>(
                                <Input
                                    {...field}
                                    className='mb-2'
                                    size='large'
                                    placeholder="Username"
                                    prefix={<UserOutlined />}
                                />
                            )}
                            name="userName"
                        />

                        { errors.userName && (
                            <p className="text-[#eb4949] mb-2">გთხოვთ შეიყვანოთ მომხმარებლის სახელი</p>
                        )}

                        <Controller
                            control={control}
                            render={({field})=>(
                                <Input
                                    {...field}
                                    className='mb-2'
                                    size='large'
                                    placeholder="Email"
                                    prefix={<UserOutlined />}
                                />
                            )}
                            name="email"
                        />

                        { errors.userName && (
                            <p className="text-[#eb4949] mb-2">გთხოვთ შეიყვანოთ mail</p>
                        )}

                        <Controller
                            control={control}
                            render={({field})=>(
                                <Input.Password
                                    {...field}
                                    size='large'
                                    placeholder="password"

                                />
                            )}
                            name="password"
                        />

                        { errors.password && (
                            <p className="text-[#eb4949] mb-2">გთხოვთ შეიყვანოთ password</p>
                        )}

                        <Button
                            className='mt-5'
                            type="primary"
                            size="large"
                            icon={<AntDesignOutlined />}
                            loading={isLoading}
                        >
                            Register
                        </Button>

                        {isError && <p className="text-red-500 text-center">{errorMessage}</p>}

                    </Space>
                </form>
            </div>
    </div>
</div>
  )
}

export default Register