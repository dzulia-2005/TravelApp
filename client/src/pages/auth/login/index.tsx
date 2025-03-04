import React from 'react'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Input , Space,  Button} from 'antd';
import { Loginpayload } from '../../../api/auth/index.types';
import { useNavigate } from 'react-router-dom';
import {LoginSchema} from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from '../../../react-query/mutation/auth';
import { SigninSuccess } from './utils';
import { queryClient } from '../../../main';
import { Controller, useForm } from "react-hook-form";


type loginFormValues = Loginpayload["payload"];

const LoginFormDefaultValues:loginFormValues = {
  email:"",
  password:""
}

const Login:React.FC = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState:{errors}
  }=useForm<loginFormValues>({
    defaultValues:LoginFormDefaultValues,
    resolver:zodResolver(LoginSchema)
  })

  const {mutate:handleLogin} = useLogin();

  const onSubmit = (Loginpayload:loginFormValues) => {
      handleLogin({payload:Loginpayload},{
          onSuccess:(res)=>{
            SigninSuccess({
              accessToken:res.accessToken,
              refreshToken:res.refreshToken,
            })
            navigate("/")
            queryClient.invalidateQueries({queryKey:["me"]});
          },
          onError:()=>{
            alert("login Failed")
          }
      })
  }

  return (
    <div className='flex justify-center'>
        <div className='w-[500px] h-[400px] bg-[#101828] rounded-xl text-[#ffff]'>
                <div className='text-center text-2xl py-12'>Sign In</div>
                <div className='text-center'>
                    <Space direction="vertical">
                        <Controller
                          control={control}
                          name="email"
                          render={({field:{onChange,value}})=>{
                              return <Input 
                                className='mb-2' 
                                onChange={onChange}
                                value={value}
                                size='large'  
                                placeholder="Email"
                                prefix={<UserOutlined />} 
                              />
                          }}
                        />
                        {errors.email && (
                           <p className="text-red-600">{errors.email.message}</p>
                        )}
                       <Controller
                          control={control}
                          name="password"
                          render={({field:{onChange,value}})=>{
                            return  <Input.Password 
                                      size='large' 
                                      placeholder="password" 
                                      onChange={onChange}
                                      value={value}
                                      />
                          }}  
                        />
                        {errors.password && (
                           <p className="text-red-600">{errors.password.message}</p>
                        )}
                        <Button 
                          className='mt-5' 
                          type="primary" 
                          size="large" 
                          icon={<AntDesignOutlined />}
                          onClick={handleSubmit(onSubmit)}
                        >
                            Log In
                        </Button>
                    </Space>
                </div>
        </div>
    </div>
  )
}

export default Login