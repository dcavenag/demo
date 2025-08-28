import EditIcon from './icons/EditIcon'
import CloseIcon from './icons/CloseIcon'
import './UserProfile.css'

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
          <div className="field-label">
            <span style={{color: 'rgb(107, 114, 128)', fontFamily: 'Poppins, sans-serif', fontSize: '12px', textWrap: 'nowrap'}}>
              Email
            </span>
          </div>
          <div className="field-value">
            <span style={{fontSize: '14px'}}>yourname@gmail.com</span>
          </div>
        </div>
        <div className="field-divider"></div>

        <div className="form-field">
          <div className="field-label">
            <span style={{color: 'rgb(107, 114, 128)', fontFamily: 'Poppins, sans-serif', fontSize: '12px', textWrap: 'nowrap'}}>
              Membership type
            </span>
          </div>
          <div className="field-value">Annual</div>
        </div>
        <div className="field-divider"></div>

        <div className="form-field mobile-field">
          <div className="field-label">
            <span style={{color: 'rgb(107, 114, 128)', fontFamily: 'Poppins, sans-serif', fontSize: '12px', textWrap: 'nowrap'}}>
              Membership expires at
            </span>
          </div>
          <div className="mobile-info">
            <div className="field-value">6/10/2029</div>
          </div>
        </div>
        <div className="field-divider"></div>

        <div className="form-field"></div>
      </div>

      <button className="save-button" style={{backgroundColor: '#ffffff'}}>
        <span style={{fontFamily: 'Poppins, sans-serif', fontSize: '12px', backgroundColor: 'rgb(12, 13, 14)'}}>
          Cancel Membership
        </span>
      </button>
    </div>
  )
}

export default UserProfile
