// src/UserForm.js
import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import axios from 'axios';

const UserForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:3002/api/users', values);

      // Check if the response is successful (status code in the range 200-299)
      if (response.status >= 200 && response.status < 300) {
        console.log('User created successfully');
        console.log(response.data); // Log the response data

        // Add any further success handling here
      } else {
        console.error('Failed to create user. Server responded with:', response.status, response.statusText);

        // Handle the error appropriately
        // You might want to show a user-friendly error message
      }
    } catch (error) {
      console.error('Error creating user:', error.message);

      // Handle the error appropriately
      // You might want to show a user-friendly error message
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <Col span={8}>
        <Form form={form} onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
          <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please enter your username!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Full Name" name="fullname" rules={[{ required: true, message: 'Please enter your full name!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="IC" name="ic" rules={[{ required: true, message: 'Please enter your IC!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password!' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default UserForm;
