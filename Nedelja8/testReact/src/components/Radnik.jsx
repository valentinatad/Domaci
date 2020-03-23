import React from 'react';
export const Radnik=(props)=>{
    let{radnik} = props;
    return(<div>
        <p>{radnik.employee_name}</p>
        <p>{radnik.employee_salary}</p>
        <p>{radnik.employee_age}</p>
        <img src={radnik.profile_image} alt=""></img>
        </div>
    )
}