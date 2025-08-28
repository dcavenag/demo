import './NotificationMenu.css'

interface NotificationMenuProps {
  onClose: () => void
}

const NotificationMenu = ({ onClose }: NotificationMenuProps) => {
  return (
    <div className="notification-menu-container">
      <div className="notification-options">
        <div className="notification-option">Allow</div>
        <div className="notification-option">Mute</div>
      </div>
    </div>
  )
}

export default NotificationMenu
