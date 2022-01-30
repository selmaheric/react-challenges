import './styles.scss';

export function Sidebar({ children }) {
  return (
    <div className='sidebar'>
      <div className='sidebarContent'>
        sidebar
      </div>
      <div className='sidebarChildren'>
        {children}
      </div>
    </div>
  )
}