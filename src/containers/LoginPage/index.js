import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useFormik, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { login } from '../../redux/auth/actions';
 
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

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async values => {
     dispatch(login(values));
    },
  });

  if (user) {
    return <Navigate to='/' />
  }

  return (
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{ marginBottom: '20px' }}>Plase sign in!</div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {/* HTML FORM */}
        <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column', paddingRight: '10px' }}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            // required
            onChange={formik.handleChange}
            value={formik.values.email}
            style={{ marginBottom: '10px' }}
          />
          <label htmlFor="email">Pasword</label>
          <input
            id="password"
            name="password"
            type="password"
            // required
            onChange={formik.handleChange}
            value={formik.values.password}
            style={{ marginBottom: '10px' }}
          />

          <button type="submit">Sign In</button>
        </form>
        {/* FORTMIK */}
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
            <Form style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
              <label htmlFor="email">Email Address</label>
              <Field name="email" type="email" />
              {errors.email && touched.email ? <div style={{color: 'red', fontSize: '10px'}}>{errors.email}</div> : null}
              <label htmlFor="password" style={{ marginTop: '10px' }}>Password</label>
              <Field name="password" type="password" />
              {errors.password && touched.password ? <div style={{color: 'red', fontSize: '10px'}}>{errors.password}</div> : null}
              <button type="submit" style={{ marginTop: '10px' }}>Submit Formik</button>
            </Form>
          )}
        </Formik>
      </div>
      {loading && <div style={{ marginTop: '10px', fontSize: '12px' }}>loading...</div>}
    </div>
  )
}