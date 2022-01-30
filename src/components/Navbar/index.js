import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './styles.scss';

export function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch({
      type: 'LOGOUT'
    });
    navigate('/login');
  }

  return (
    <div className='navbar'>
      <Link to='/'>Home</Link>
      <div>
        <Link to='/about' className='link'>About</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}