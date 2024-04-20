import React from 'react';
import './Course_templat.css';

export default function Course_template(props) {
    const { title,date,img ,intro} = props;
    console.log(title); 
    return (
        <div className="Course_Template">
            <div className='Course_Template_container'>
                <center>
                <h1>{title}</h1>
                <i className="fas fa-user-circle course_icons"></i><a href="./about">Sairam Uppugundla</a> {'\u00A0'} {'\u00A0'}
                <i className="far fa-calendar-alt course_icons"></i> {date}
                <img  className='image' src={img} alt="" />
                </center>
                <p>{intro}</p>
                
                
                
            </div>
        </div>
    );
}


