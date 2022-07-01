import React from 'react'

const SocialIcon = ({src, alt, loading="lazy"}) => {
  return (
    <img className="Icon" src={src} alt={alt}/>
  )
}

export default SocialIcon