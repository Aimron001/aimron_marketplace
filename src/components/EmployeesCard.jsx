import React from "react";
import EmployeePhoto from "../assets/images/marketplace.jpg"

export default function EmployeesCard() {
    return (
        <div className='employees-card'>
            <img src={EmployeePhoto}  alt='Employees Photo'/>
            <div className='employee-info'>
                <p>Name: Ronald Mutua</p>
                <p>Role: CEO & founder</p>
                <p>National ID: 5728667</p>
                <p>Phone Number: +254748688613</p>
                <p>Salary: 200,000</p>
                <p>Pay Day: 24th</p>
            </div>
        </div>
    )
}