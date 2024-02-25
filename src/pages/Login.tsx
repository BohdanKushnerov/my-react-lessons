import React, { FC, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/auth/operations';
import { AppDispatch } from '../redux/store';
import { getAuthState } from '../redux/auth/selectors';

interface FieldType {
  username: string;
  password: string;
}

const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const { isError, isLoading } = useSelector(getAuthState);

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubtitForm = () => {
    dispatch(login({ username, password }));
  };

  return (
    <>
      {isError && (
        <div>
          <h1>{isError}</h1>
        </div>
      )}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        initialValues={{ remember: true }}
        onFinish={handleSubtitForm}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input value={username} onChange={handleChangeUsername} />
        </Form.Item>

        <Form.Item<FieldType>
          label="password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password value={password} onChange={handleChangePassword} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
