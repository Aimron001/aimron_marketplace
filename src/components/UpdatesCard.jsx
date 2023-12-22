import React from 'react';
import UpdatesImage from '../assets/images/logo.jpg'

export default function UpdatesCard() {
    return (
        <div className="updates-card">
            <img src={UpdatesImage} alt="An image of the buyer"/>
            <div className="update-info">
                <p>Ronald has received</p>
                <p>Iphone 15 pro</p>
                <p>25 Seconds ago</p>
            </div>
        </div>
    )
}