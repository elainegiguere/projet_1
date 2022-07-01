import React from 'react'


const Percentage = ({placement, red, children}) => {
    const placementClassname = placement === "left" ? "left" : "right";
    const colorClassname = red ? "text-red":"text-green";
    const classnames =`percentage ${placementClassname} ${colorClassname}`
  return (
    <div className={classnames}>
        
        {children}
    </div>
  )
}

export default Percentage