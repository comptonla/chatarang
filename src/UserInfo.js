import React from 'react'

import Avatar from './Avatar'

const UserInfo = ({ user }) => {
  return (
    <div
    className="UserInfo"
    style={styles.userInfo}
    >
      <Avatar />
      <div
        className="user"
        style={styles.user}
      >
        {user.displayName}
      </div>
      <a className="a" href="#">
        <i className="fas fa-sign-out-alt"></i>
      </a>
    </div>
  )
}

const styles = {
  user: {
    flex: 1,
  },

  userInfo: {
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
  }
}


export default UserInfo