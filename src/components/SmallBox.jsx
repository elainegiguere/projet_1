import{useState} from "react";
import React from 'react';
import SocialIcon from "./SocialIcon";
import Text from './Text';
import Arrow from "./Arrow";




const SmallBox = ({arrow, icon, user, number, days, red}) => {

    const [isHovered, setIsHovered]= useState(false);
    const onMouseEnter = () => setIsHovered (true);
    const onMouseLeave = () => setIsHovered (false);


    const hoverClassNames= isHovered ? "bg-darker" : "bg-dark";
    
    const classNames =`smallBox ${hoverClassNames}`;

      
            return (
            
            <section className={classNames} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <div className='row-flex'>
                <Text as={"h6"}>{user}</Text>
                 <SocialIcon src={icon} alt="facebook"></SocialIcon>
                </div>

                <div className='row-flex'>
                <Text as={"h"}>{number}</Text>
                <span className='percentage'>
                <Arrow src={arrow} alt={arrow}></Arrow>
                <Text as={"p"}red={red}>{days}</Text>
                </span>
                </div>
            </section>

            )
}


export default SmallBox