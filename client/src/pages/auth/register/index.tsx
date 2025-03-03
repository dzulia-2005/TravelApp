import React from 'react'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Input , Space,  Button} from 'antd';


const Register:React.FC = () => {
  return (
    <div className='flex justify-center'>
    <div className='w-[500px] h-[400px] bg-[#101828] rounded-xl text-[#ffff]'>
            <div className='text-center text-2xl py-12'>Sign In</div>
            <div className='text-center'>
                <Space direction="vertical">
                    <Input className='mb-2' size='large'  placeholder="Username" prefix={<UserOutlined />} />
                    <Input className='mb-2' size='large'  placeholder="Email" prefix={<UserOutlined />} />
                    <Input.Password size='large' placeholder="password" />
                    <Button className='mt-5' type="primary" size="large" icon={<AntDesignOutlined />}>
                        Register
                    </Button>
                </Space>
            </div>
    </div>
</div>
  )
}

export default Register