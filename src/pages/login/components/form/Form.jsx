import React from 'react'
import classes from "./Form.module.scss"
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
// import {useHistory} from 'react-router'

export default function LoginForm() {
  // const token = localStorage.getItem("token")
  // if(token){
  //     console.log("token", token);
  // }
  const history = useHistory()
  const onFinish = (values) => {
    const email = localStorage.getItem("email")
    const password = localStorage.getItem("password")
    const {username: emaiLogin , password: passwordLogin} = values
    // console.log("lg9aisf", emaiLogin, passwordLogin);
    // console.log("lg9aisf", values);
    if(email === emaiLogin && password === passwordLogin){
      message.success("Đăng nhập thành công");
      history.push("/home")
    } else {
      message.error("Sai TK hoặc MK")
    }
    // console.log('Received values of form: ', values);
  };
  return (
    <div className={classes.form_wrapper}>
      <h2 className={classes.title}>Login</h2>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        {/* <a className="login-form-forgot" href="#">
          Forgot password
        </a> */}
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/register">register now!</Link>
      </Form.Item>
    </Form>
    {/* <Button 
    onClick={() => { localStorage.setItem("token", "Gia tri cua token")}}
    >Cap Coolie</Button> */}
    </div>
  )
}
