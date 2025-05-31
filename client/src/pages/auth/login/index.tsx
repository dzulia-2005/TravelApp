import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Controller, useForm } from 'react-hook-form';
import {login} from "../../../features/auth/authThunks.ts";
import {useAppDispatch, useAppSelector} from "../../../utils/reduxHooks.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {LoginSchema} from "./schema.ts";

type LoginFormInputs = {
    userName: string;
    password: string;
}

const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { control, handleSubmit ,formState:{errors} } = useForm<LoginFormInputs>({
        defaultValues: {
            userName: '',
            password: '',
        },
        resolver:zodResolver(LoginSchema)
    });

    const { isLoading, isError, errorMessage, } = useAppSelector(state => state.auth);

    const onSubmit = async (data: LoginFormInputs) => {
        const result = await dispatch(login({ userName: data.userName, password: data.password }));
        if (login.fulfilled.match(result)) {
            navigate("/");
        }
        if(login.rejected.match(result)){
            alert("login failed")
        }
    }

    return (
        <div className='flex justify-center'>
            <div className='w-[500px] h-[400px] bg-[#101828] rounded-xl text-white flex flex-col justify-center items-center'>
                <h2 className='text-2xl mb-8'>Sign In</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='w-3/4'>
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Controller
                            control={control}
                            name="userName"
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    size='large'
                                    placeholder="Email"
                                    prefix={<UserOutlined />}
                                />
                            )}
                        />

                        { errors.userName && (
                            <p className="text-[#eb4949] mb-2">გთხოვთ შეიყვანოთ მომხმარებლის სახელი</p>
                        )}

                        <Controller
                            control={control}
                            name="password"
                            render={({ field }) => (
                                <Input.Password
                                    {...field}
                                    size='large'
                                    placeholder="Password"
                                />
                            )}
                        />

                        { errors.password && (
                            <p className="text-[#eb4949] mb-2">გთხოვთ შეიყვანოთ პაროლი</p>
                        )}

                        <div className="flex justify-center">
                            <Button
                                type="primary"
                                size="large"
                                htmlType="submit"
                                loading={isLoading}
                                className="w-[200px]"
                            >
                                Log In
                            </Button>
                        </div>

                        {isError && <p className="text-red-500 text-center">{errorMessage}</p>}
                    </Space>
                </form>
            </div>
        </div>
    );
}

export default Login;
