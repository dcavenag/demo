import UserIcon from './icons/UserIcon'
import SettingsIcon from './icons/SettingsIcon'
import BellIcon from './icons/BellIcon'
import LogOutIcon from './icons/LogOutIcon'
import ChevronRightIcon from './icons/ChevronRightIcon'
import './ProfileMenu.css'

interface ProfileMenuProps {
  onClose: () => void
}

const ProfileMenu = ({ onClose }: ProfileMenuProps) => {
  return (
    <div className="profile-menu-container">
      <div className="menu-header">
        <div className="menu-user-info">
          <div className="menu-avatar"></div>
          <div className="menu-user-details">
            <div className="menu-user-name">Your name</div>
            <div className="menu-user-email">yourname@gmail.com</div>
          </div>
        </div>
        <div className="menu-divider"></div>
      </div>

      <div className="menu-items">
        <div className="menu-item active">
          <div className="menu-item-content">
            <UserIcon />
            <span className="menu-item-text">My Profile</span>
          </div>
          <ChevronRightIcon />
        </div>

        <div className="menu-item">
          <div className="menu-item-content">
            <SettingsIcon />
            <span className="menu-item-text">Settings</span>
          </div>
          <ChevronRightIcon />
        </div>

        <div className="menu-item notification-item">
          <div className="menu-item-content">
            <BellIcon />
            <span className="menu-item-text">Notification</span>
          </div>
          <span className="notification-status">Allow</span>
        </div>

        <div className="menu-item">
          <div className="menu-item-content">
            <LogOutIcon />
            <span className="menu-item-text">Log Out</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileMenu
