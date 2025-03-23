import React from 'react';
import { Form, Input, Button } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log('Login Data:', values);
    },
  });

  return (
    <div style={{ width: 300, margin: '50px auto' }}>
      <h2>Login</h2>
      <Form onFinish={formik.handleSubmit} layout="vertical">
        <Form.Item
          label="Email"
          validateStatus={
            formik.errors.email && formik.touched.email ? 'error' : ''
          }
          help={
            formik.errors.email && formik.touched.email
              ? formik.errors.email
              : ''
          }
        >
          <Input
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          validateStatus={
            formik.errors.password && formik.touched.password ? 'error' : ''
          }
          help={
            formik.errors.password && formik.touched.password
              ? formik.errors.password
              : ''
          }
        >
          <Input.Password
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
