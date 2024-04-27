import React from 'react';
import classes from './MyInputCheckbox.module.css'

const MyInputCheckbox = React.forwardRef((props, ref) => {
    return (
        <div className='check-flex'>
        <input type="checkbox" className={classes.myInput} {...props}/>
        <label htmlFor={props.naming}>{props.name}</label>
        </div>
    );
})

export default MyInputCheckbox;