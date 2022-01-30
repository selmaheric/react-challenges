import { Link } from 'react-router-dom';

import './styles.scss';

export function Sidebar({ children }) {
  return (
    <div className='sidebar'>
      <div className='sidebarContent'>
        <ul>
          <li><Link to='/counter'>Counter</Link></li>
        </ul>
      </div>
      <div className='sidebarChildren'>
        {children}
      </div>
    </div>
  )
}