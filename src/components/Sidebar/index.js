export function Sidebar({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        sidebar
      </div>
      <div style={{ flex: 5 }}>
        {children}
      </div>
    </div>
  )
}