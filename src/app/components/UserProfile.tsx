import React from 'react'

export default ({ name, email, profileImageURL}:Partial<Constant.IUser>) =>
  <div>
    <div>{name}</div>
    <div>{email}</div>
    <img src={profileImageURL} />
  </div>
