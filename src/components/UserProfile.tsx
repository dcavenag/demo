import EditIcon from './icons/EditIcon'
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
      </div>

      <div className="profile-form">
        <div className="form-field">
          <div className="field-label">
            <span style={{color: 'rgb(107, 114, 128)', fontFamily: 'Poppins, sans-serif', fontSize: '12px', textWrap: 'nowrap'}}>
              Membership type
            </span>
          </div>
          <div className="field-value">
            <span style={{fontSize: '16px'}}>Annual</span>
          </div>
        </div>
        <div className="field-divider"></div>

        <div className="form-field">
          <div className="field-label">
            <span style={{color: 'rgb(107, 114, 128)', fontFamily: 'Poppins, sans-serif', fontSize: '12px', textWrap: 'nowrap'}}>
              Membership expires at
            </span>
          </div>
          <div className="field-value">6/10/2029</div>
        </div>
        <div className="field-divider"></div>

        <div className="form-field">
          <button className="save-button" style={{
            alignSelf: 'end',
            backgroundColor: 'rgba(3, 0, 0, 1)',
            borderRadius: '16px',
            marginLeft: 'auto',
            width: '100%'
          }}>
            <div style={{
              display: 'inline',
              backgroundColor: 'rgb(12, 13, 14)',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              Cancel Membership
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
