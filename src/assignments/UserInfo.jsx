import React from 'react'

const UserInfo = ({userName, age}) => {
  return (
    <div className='bg-amber-200 py-5 px-12 text-center mb-2'>
      <p><strong>User Name: </strong>{userName}</p>
      <p><strong>Age: </strong>{age}</p>
    </div>
  )
}

export default UserInfo
