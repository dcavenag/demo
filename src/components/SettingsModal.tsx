import CloseIcon from './icons/CloseIcon'
import ChevronDownIcon from './icons/ChevronDownIcon'

interface SettingsModalProps {
  onClose: () => void
}

const SettingsModal = ({ onClose }: SettingsModalProps) => {
  return (
    <div className="settings-modal-container">
      <div className="settings-header">
        <span className="settings-title">Settings</span>
        <button className="settings-close-button" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
      <div className="settings-divider"></div>

      <div className="settings-options">
        <div className="settings-option">
          <span className="option-label">Theme</span>
          <div className="option-value">
            <span className="option-text">Light</span>
            <ChevronDownIcon />
          </div>
        </div>

        <div className="settings-option">
          <span className="option-label">Language</span>
          <div className="option-value">
            <span className="option-text">Eng</span>
            <ChevronDownIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsModal
