import React from 'react'

const Text = ({ as = "h1", children, red}) => {

    const colorClassname = red ?  "text-red" :  "text-green";
    const classnames = `${as} ${colorClassname}`;

switch (as){
    case "h2":
        return <h2 className={classnames}>{children}</h2> 
    case "h3": 
        return <h3 className={classnames}>{children}</h3>  
    case "h4":
        return <h4 className={classnames}>{children}</h4>
    case "h5":
        return <h5 className={classnames}>{children}</h5>
    case "h6":
        return <h6 className={classnames}>{children}</h6> 
    case "p":
        return <p className={classnames}>{children}</p>
    default:
        return <h1>{children}</h1>                       

    } 
}

export default Text