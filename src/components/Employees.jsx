import React from 'react';
import EmployeesCard from './EmployeesCard';

export default function Employees(){
    return (
        <div className='employees-container'>
            <EmployeesCard />
            <EmployeesCard />
            <EmployeesCard />
            <EmployeesCard />
        </div>
    )
}