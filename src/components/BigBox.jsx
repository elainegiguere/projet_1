import{useState} from "react";
import React from 'react';
import SocialIcon from "./SocialIcon";
import Text from './Text';
import Arrow from "./Arrow";



const BigBox = ({dayMode, border, icon, user, number, days, arrow}) => {

    const [isHovered, setIsHovered]= useState(false);
    const onMouseEnter = () => setIsHovered (true);
    const onMouseLeave = () => setIsHovered (false);


    const hoverClassNames= isHovered ? "bg-darker" : "bg-dark";
    const classNames =`bigBox ${border} ${hoverClassNames}`;

      
            return (
            
            <section className={classNames} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} mode={dayMode} border={""}>
                <div className='row-flex'>
                 <SocialIcon src={icon} alt={icon}></SocialIcon>
                 <Text as={"p"}>{user}</Text>
                </div>

                <div className='row'>
                <Text as={"h2"}>{number}</Text>
                <Text classNames="followers" as={"h4"}>Followers</Text>
                <div className="row-flex">
                <Arrow src={arrow} alt={arrow}></Arrow>
                <Text as={"p"}>{days}</Text>
                </div>
                </div>
            </section>

            )
}


export default BigBox