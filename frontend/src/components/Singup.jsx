/* eslint-disable */
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import '../App.scss';
import {
  Button, Card, Col, Container, Form, Overlay, Row, FloatingLabel,
} from 'react-bootstrap';
import avatar_1 from '../assets/avatar_1.jpg';


function App() {
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
    confirmPassword: yup.string()
      .oneOf([yup.ref('password')], 'Пароли не совпадают')
      .required('Обязательно'),
  });

  return (
    <>

      <div>
        <div className="logo">
          <img src={avatar_1} alt="" />
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
              <p>
                <label htmlFor={'confirmPassword'}></label><br />
                <input
                  className={'input'}
                  placeholder={'Подтвердите пароль'}
                  type={'text'}
                  name={'confirmPassword'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />
              </p>
              {touched.confirmPassword && errors.confirmPassword && <p className={'error'}>{errors.confirmPassword}</p>}
              <Button
                variant="outline-primary"
                disable={!isValid && !dirty}
                onClick={handleSubmit}
                type={'submit'}
              >
                Зарегистрироваться
              </Button>{' '}
            </div>
          )}
        </Formik>
      </div >
    </>
  );
}

export default App;
