import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: 20,
      backgroundColor: 'whitesmoke'
    }}>
      <Link to='/'>Home</Link>
      <div>
        <Link to='/about' style={{
          paddingRight: '10px'
        }}>About</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}