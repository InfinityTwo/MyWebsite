import React, { Component } from 'react';
import './basic_info.css';

function getAge() {
    let d = new Date();
    return Math.floor((d.getTime() - 1025712000000) / 31536000000);
};

function BasicInfo() {
    return(
        <div className="appBGOverlay">
            <div className="infoBackground flex-row">
                <p className="greetings">Hey! I'm</p>
                <h1 className="homeName">Poh Jun Kang</h1>
            </div>
            <div className="divider"></div>
            <div className="infoDescription">
                <p className="skills description">Programmer • Graphic Designer • Aviatian Enthusiast • PC Builder</p>
                <p className="age description">I'm currently {getAge()}!</p>
            </div>
        </div>
    )
};


export default BasicInfo;