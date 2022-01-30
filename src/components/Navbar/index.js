import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: 20,
      backgroundColor: 'whitesmoke'
    }}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </div>
  )
}