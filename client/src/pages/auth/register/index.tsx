import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Input , Space,  Button} from 'antd';
import {Controller, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {zodResolver} from "@hookform/resolvers/zod";
import {RegisterSchema} from "./shcema.ts";
import {useRegisterMutation} from "../../../features/auth/authApi.ts";

type registerFormInput = {
    userName:string;
    email:string;
    password:string;
}


const Register:React.FC = () => {
    const navigate = useNavigate();

    const { control, handleSubmit , formState:{errors} } = useForm<registerFormInput>({
        defaultValues : {
            userName: '',
            email:'',
            password : '',
        },
        resolver:zodResolver(RegisterSchema)
    });


    const [register,{isLoading}] = useRegisterMutation();

    const onSubmit = async (data:registerFormInput) => {
        try {
            const result = await register({email:data.email , password:data.password , userName:data.userName}).unwrap();
            localStorage.setItem("accessToken",result.accessToken);
            navigate("/login")
        }catch (err) {
            console.error("register failed",err)
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
                            render={({field})=>(
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

                        { errors.email && (
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
                            htmlType="submit"
                            loading={isLoading}
                        >
                            Register
                        </Button>

                    </Space>
                </form>
            </div>
    </div>
</div>
  )
}

export default Register