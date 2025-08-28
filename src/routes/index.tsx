export default function MyComponent() {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      background: 'linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        right: '40px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '552px',
        background: 'white',
        borderRadius: '12px',
        padding: '40px',
        boxShadow: '0 4px 32px rgba(0, 0, 0, 0.1)'
      }}>
        <h1>User Profile Interface</h1>
        <p>This is a placeholder for the Figma design implementation.</p>
      </div>
    </div>
  )
}
