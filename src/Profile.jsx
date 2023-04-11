import React from 'react'

function Profile({username, color}) {
  return (
    <div className="profile-container">
        <h2>User: {username} </h2>
        <p>Favorite color: {color}</p>
    </div>
  )
}

export default Profile