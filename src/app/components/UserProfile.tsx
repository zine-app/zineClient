import React from 'react'

export default ({ name, email, profileImageURL}: User) =>
  <div>
    <div>{name}</div>
    <div>{email}</div>
    <img src={profileImageURL} />
  </div>
