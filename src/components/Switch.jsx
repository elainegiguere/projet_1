import React from 'react'


const Switch = ({children, onClick}) => {
      
    return (
    <div className='switch' onClick={onClick}>{children}</div>
  )
}

export default Switch