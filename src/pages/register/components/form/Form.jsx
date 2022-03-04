import React, { useState } from 'react'
import classes from "./Form.module.scss"
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link , NavLink, useHistory} from 'react-router-dom';

export default function RegisterForm() {
  const history = useHistory()
  // const [value, setValue] = useState(0)
  // console.log(value);
  
 
  return (
    <div className={classes.form_wrapper}>
      {/* <input value={value} onChange={(e) => {setValue(e.target.value)}} type='range' max={200}/> */}
      <h2>Register</h2>
      <Form 
      layout='vertical'
      onFinish={(value) => {
      const {email, password, address} = value;
      message.success("Đăng Ký Thành Công")
      history.push("/login")
      localStorage.setItem("email", email)
      localStorage.setItem("password", password)
      // console.log("email", email)
      // console.log("password", password)
      // console.log("Address", address)
      // fetch("aishaos").post
    }}>

      <Form.Item 
      // className={classes.registerItem}
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item 
      // className={classes.registerItem}
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input type="password"/>
      </Form.Item>

      <Form.Item 
      // className={classes.registerItem}
        name="address"
        label="Address"
        rules={[
          {
            required: true,
            message: 'Please input your Address!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Button type='primary' htmlType='submit'>Submit</Button>
      </Form>
    </div>

  )
}
