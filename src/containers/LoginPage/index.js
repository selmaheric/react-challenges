import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { login } from '../../redux/auth/actions';

import './styles.scss';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(3, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});

export default function LoginPage() {
  const dispatch = useDispatch();
  const { user, loading } = useSelector(state => state.auth);

  if (user) {
    return <Navigate to='/' />
  }

  return (
    <div className='login'>
      <div className='loginText'>Plase sign in!</div>
      <div className='form'>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            dispatch(login(values));
          }}
        >
          {({ errors, touched }) => (
            <Form className='formContent'>
              <label htmlFor="email">Email Address</label>
              <Field name="email" type="email" />
              {errors.email && touched.email ? <div className='error'>{errors.email}</div> : null}
              
              <label htmlFor="password" className='label'>Password</label>
              <Field name="password" type="password" />
              {errors.password && touched.password ? <div className='error'>{errors.password}</div> : null}
              
              <button type="submit" className='label'>Submit Formik</button>
            </Form>
          )}
        </Formik>
      </div>
      {loading && <div style={{ marginTop: '10px', fontSize: '12px' }}>loading...</div>}
    </div>
  )
}