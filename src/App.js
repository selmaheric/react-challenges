import { Routes, Route, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.css';

import { AboutPage, HomePage, LoginPage, NotFoundPage } from './containers';
import { Navbar, Sidebar } from './components';
import { useEffect } from 'react';

function Layout() {
  return (
    <div style={{
      border: '1px solid whitesmoke',
      height: '100%'
    }}>
      <Navbar />
      <Sidebar>
        <Outlet />
      </Sidebar>
    </div>
  )
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch({
        type: 'LOGIN_SUCCESS',
      });
    }
  }, [dispatch])

  return (
    <div className="App">
      <Routes>
        <Route path='/login' exact={true} element={<LoginPage />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
