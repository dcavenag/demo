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
          <span className="field-label" style={{color: 'rgb(107, 114, 128)', fontFamily: 'Poppins, sans-serif', fontSize: '12px', textWrap: 'nowrap'}}>Email</span>
          <span className="field-value" style={{fontSize: '14px'}}>yourname@gmail.com</span>
        </div>
        <div className="field-divider"></div>

        <div className="form-field">
          <span className="field-label" style={{color: 'rgb(107, 114, 128)', fontFamily: 'Poppins, sans-serif', fontSize: '12px', textWrap: 'nowrap'}}>Membership type</span>
          <span className="field-value">Annual</span>
        </div>
        <div className="field-divider"></div>

        <div className="form-field mobile-field">
          <span className="field-label" style={{color: 'rgb(107, 114, 128)', fontFamily: 'Poppins, sans-serif', fontSize: '12px', textWrap: 'nowrap'}}>Membership expires at</span>
          <div className="mobile-info">
            <span className="field-value">6/10/2029</span>
          </div>
        </div>
        <div className="field-divider"></div>
      </div>

      <button className="save-button" style={{backgroundColor: '#ffffff'}}>
        <span style={{fontFamily: 'Poppins, sans-serif', fontSize: '12px', backgroundColor: 'rgb(12, 13, 14)', color: 'white', padding: '2px 4px', borderRadius: '3px'}}>
          Cancel Membership
        </span>
      </button>
    </div>
  )
}

export default UserProfile
