import EditIcon from './icons/EditIcon'
import CloseIcon from './icons/CloseIcon'

const UserProfile = () => {
  return (
    <div className="user-profile-container">
      <div className="profile-header">
        <div className="profile-avatar-section">
          <div className="profile-avatar">
            <div className="avatar-image"></div>
            <div className="edit-badge">
              <EditIcon />
            </div>
          </div>
          <div className="profile-info">
            <div className="profile-name">Your name</div>
            <div className="profile-email">yourname@gmail.com</div>
          </div>
        </div>
        <div className="header-divider"></div>
        <button className="close-button">
          <CloseIcon />
        </button>
      </div>

      <div className="profile-form">
        <div className="form-field">
          <span className="field-label">Name</span>
          <span className="field-value">your name</span>
        </div>
        <div className="field-divider"></div>

        <div className="form-field">
          <span className="field-label">Email account</span>
          <span className="field-value email">yourname@gmail.com</span>
        </div>
        <div className="field-divider"></div>

        <div className="form-field mobile-field">
          <span className="field-label">Mobile number</span>
          <div className="mobile-info">
            <span className="field-value">Add number</span>
            <span className="location-info">USA</span>
          </div>
        </div>
        <div className="field-divider"></div>

        <div className="form-field">
          <span className="field-label">Location</span>
          <span className="field-value">USA</span>
        </div>
      </div>

      <button className="save-button">
        Save Change
      </button>
    </div>
  )
}

export default UserProfile
