import React from 'react'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Input , Space,  Button} from 'antd';
import { Controller, useForm } from "react-hook-form";




const Login:React.FC = () => {

  const {control} = useForm();

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

                        <Button 
                          className='mt-5' 
                          type="primary" 
                          size="large" 
                          icon={<AntDesignOutlined />}

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