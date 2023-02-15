/* eslint-disable */
import React from 'react';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import '../App.scss';
import { Formik } from 'formik';

const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const Login = () => (
  <div>
    <h1>Войти</h1>
    <Formik
      initialValues={{
        userName: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit} >
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
            >
              <Form.Label>user name</Form.Label>
              <Form.Control
                type="text"
                name="userName"
                placeholder="Ваш ник"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              {errors.userName && touched.userName ? (
                <div>{errors.userName}</div>
              ) : null}
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik102"
            >
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="text"
                name="password"
                placeholder="Пароль"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
              />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </Form.Group>
          </Row>
          <Button type="submit">ВОЙТИ</Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Login;
