import { useState } from 'react'
import UserProfile from './components/UserProfile'
import ProfileMenu from './components/ProfileMenu'
import SettingsModal from './components/SettingsModal'
import MyComponent from './routes/index'
import './App.css'

function App() {
  const [showProfileMenu, setShowProfileMenu] = useState(true)
  const [showSettingsModal, setShowSettingsModal] = useState(true)

  return (
    <div className="app-container">
      <UserProfile />
      {showProfileMenu && (
        <ProfileMenu onClose={() => setShowProfileMenu(false)} />
      )}
      {showSettingsModal && (
        <SettingsModal onClose={() => setShowSettingsModal(false)} />
      )}
    </div>
  )
}

export default App
