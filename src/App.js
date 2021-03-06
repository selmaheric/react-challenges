import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import './App.scss';

import { AboutPage, CounterContextPage, CounterPage, CounterReduxPage, HomePage, LoginPage, ModalPage, NotFoundPage } from './containers';
import { Navbar, Sidebar } from './components';
import { useEffect } from 'react';
import { getUser } from './redux/auth/actions';

function PrivateRoute({ children }) {
  const { user } = useSelector(state => state.auth);

  if (user) {
    return children;
  } else {
    return <Navigate to={'/login'} />
  }
}

function Layout() {
  return (
    <div className='layout'>
      <Navbar />
      <Sidebar>
        <Outlet />
      </Sidebar>
    </div>
  )
}

function App() {
  const dispatch = useDispatch();
  const [init, setInit] = useState(true);
  const { loadingUser } = useSelector(state => state.auth);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(getUser({ email: token }));
    }
    setInit(false);
  }, [dispatch]);

  if (init || loadingUser) {
    return <div>loading...</div>
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path='/counter' element={<PrivateRoute><CounterPage /></PrivateRoute>} />
          <Route path='/counter-context' element={<PrivateRoute><CounterContextPage /></PrivateRoute>} />
          <Route path='/counter-redux' element={<PrivateRoute><CounterReduxPage /></PrivateRoute>} />
          <Route path='/modal' element={<PrivateRoute><ModalPage /></PrivateRoute>}/>
          <Route path='/about' element={<PrivateRoute><AboutPage /></PrivateRoute>} />
        </Route>
        <Route path='/login' exact={true} element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
