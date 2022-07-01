import React from 'react'

const Arrow = ({src, alt, loading='lazy'}) => {
  return (
    <img className='arrow' src={src} alt={alt} />
     )
}

export default Arrow
