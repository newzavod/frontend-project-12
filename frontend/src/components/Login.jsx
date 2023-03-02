/* eslint-disable */
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  Button, Card, Col, Container, Form, Overlay, Row, FloatingLabel,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.jpg';
import Header from './Header';

function Login() {
  const validationSchema = yup.object().shape({
    name: yup.string()
      .typeError('Должно быть строкой')
      .min(3, 'Too Short!')
      .max(12, 'Too Long!')
      .required('Обязательно'),
    password: yup.string()
      .typeError('Должно быть строкой')
      .min(4, 'Too Short')
      .required('Обязательно'),
  });

  return (
    <>
      <Header />
      <Container fluid className="h-100">
        <Row className="h-100 justify-content-center align-content-center">
          <Col className="col-12 col-md-8">
            <Card className="shadow-sm">
              <Card.Body className="row p-5">
                <Form>
                  <Form.Group className="mb-3">
                    <FloatingLabel
                      label={'label.nickname'}
                      className="mb-3 text-muted"
                      controlId="username"
                    >
                      <div className="logo">
                        <img src={avatar} alt="" />
                      </div>
                      <Formik
                        initialValues={{
                          name: '',
                          password: '',
                          confirmPassword: '',
                        }}
                        onSubmit={(values) => { console.log(values) }}
                        validationSchema={validationSchema}
                        validateOnBlur
                      >
                        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                          <div className='from'>
                            <p>
                              <label htmlFor="name"></label>
                              <br />
                              <input
                                className='input'
                                placeholder='Имя пользователя'
                                type='text'
                                name='name'
                                onChange={handleChange}

                                onBlur={handleBlur}
                                value={values.name}
                              />
                            </p>
                            {touched.name && errors.name &&
                              <p className={'error'}>{errors.name}</p>}
                            <p>
                              <label htmlFor={'password'}></label>
                              <br />
                              <input
                                className={'input'}
                                placeholder={'Пароль'}
                                type={'text'}
                                name={'password'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                              />
                            </p>
                            {touched.password && errors.password && <p className={'error'}>{errors.password}</p>}
                            <Button
                              variant="primary"
                              disable={!isValid && !dirty}
                              onClick={handleSubmit}
                              type={'submit'}
                            >
                              Войти
                            </Button>{' '}
                          </div>
                        )}
                      </Formik>
                    </FloatingLabel>
                  </Form.Group>
                </Form>
              </Card.Body>
              <Card.Footer>
                <Link to="/signup">{'регистрация'}</Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
