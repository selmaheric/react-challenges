import { Routes, Route, Link, Outlet } from 'react-router-dom';

import './App.css';

import { Navbar, Sidebar } from './components';
import { AboutPage, HomePage, LoginPage, NotFoundPage } from './containers';

function Layout() {
  return (
    <div style={{border: '1px solid whitesmoke', height: '100%'}}>
      <Navbar />
      <Sidebar>
        <Outlet />
      </Sidebar>
    </div>
  )
}

function App() {
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
