import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function loginMock() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 500)
  })
}


export default function LoginPage() {
  const dispatch = useDispatch();
  const { user, loading } = useSelector(state => state.auth);

  const handleSignIn = async () => {
    dispatch({
      type: 'LOGIN_REQUEST'
    });
    await loginMock();
    dispatch({
      type: 'LOGIN_SUCCESS',
    });
    localStorage.setItem('token', 'token');
  }

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
      <button onClick={handleSignIn}>Sign In</button>
      {loading && <div style={{ marginTop: '10px', fontSize: '12px' }}>loading...</div>}
    </div>
  )
}