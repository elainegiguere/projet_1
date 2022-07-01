import {useState} from "react";
import React from 'react';
import Switch from './Switch';

import Header from "./Header";
import BigBox from "./BigBox";
import Text from "./Text";
import FbIcon from "../images/icon-facebook.svg";
import InIcon from "../images/icon-instagram.svg";
import YtIcon from "../images/icon-youtube.svg";
import TwIcon from "../images/icon-twitter.svg";
import Up from "../images/icon-up.svg";
import Down from "../images/icon-down.svg";
import SmallBox from "./SmallBox";

const Container = () => {

    const [themeState, setThemeState]= useState(false);
    const handleClick= () => {setThemeState ( themeState => !themeState);}
    
    const themeColor= themeState?  'lightMode' : 'darkMode' ;
    
    const classNames = `container ${themeColor}`;

  


  return (
    <div className={classNames}> 
        <Switch onClick={handleClick}>switch</Switch>
        <Header>
      <Text as={"h1"}>Social media dashboard</Text>
      <Text as={"p"}>Total Followers: 23,004</Text>
      </Header>
       <div className="row-flex">
        <BigBox mode={true} className= "bigBox" border= {"borderFb"} icon={FbIcon} user={'@nathanf'} number={'1987'} arrow={Up} days={'12 today'} themeState={true}></BigBox>
        <BigBox mode={true} className= "bigBox" border= {"borderFb"} icon={FbIcon} user={'@nathanf'} number={'1044'} arrow={Up} days={'99 today'} ></BigBox>
        <BigBox mode={true} className= "bigBox" border= {"borderIn"} icon={InIcon} user={'@nathanf'} number={'11k'} arrow={Up} days={'1099 today'} ></BigBox>
        <BigBox mode={true} className= "bigBox" border= {"borderYt"} icon={YtIcon} user={'@nathanf'} number={'8239'} arrow={Up} days={'144 today'}></BigBox>
        </div>

        <div className="row-flex">
        <SmallBox mode={true} className= "smallBox"  user={'Pages Views'} icon={FbIcon}  number={'87'} arrow={Up} red={false} days={'3%'}></SmallBox>
        <SmallBox mode={true} className= "smallBox"  user={'Likes'} icon={FbIcon}  number={'52'} arrow={Up} red={false} days={'2%'}></SmallBox>
        <SmallBox mode={true} className= "smallBox"  user={'Likes'} icon={InIcon}  number={'5462'} arrow={Down} red={true} days={'2257%'}></SmallBox>
        <SmallBox mode={true} className= "smallBox"  user={'Profile Views'} icon={InIcon}  number={'52k'} arrow={Up} red={false} days={'52k'}></SmallBox>
        </div>
        
        <div className="row-flex">
        <SmallBox mode={true} className= "smallBox"  user={'Retweets'} icon={TwIcon}  number={'17'} arrow={Up} red={false} days={'303%'}></SmallBox>
        <SmallBox mode={true} className= "smallBox"  user={'Likes'} icon={TwIcon}  number={'507'} arrow={Up} red={false} days={'553%'}></SmallBox>
        <SmallBox mode={true} className= "smallBox"  user={'Likes'} icon={YtIcon}  number={'107'} arrow={Down} red={true} days={'19%'}></SmallBox>
        <SmallBox mode={true} className= "smallBox"  user={'Total Views'}icon={YtIcon}  number={'1407'} arrow={Down} red={true} days={'12%'}></SmallBox>
        </div>
    </div>
  )
}

export default Container
