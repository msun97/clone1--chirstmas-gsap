import React from 'react'

const ComingItem = ({imgSrc}) => {
  return (
    <div className='coming-item'>
      <span>
        <img src={imgSrc} />
      </span>
    </div>
  )
}

export default ComingItem