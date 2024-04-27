import React from 'react';
import classes from './MyInputTextLong.module.css'

const MyInputTextLong = React.forwardRef((props, ref) => {
    return (
        <input name='happy' ref={ref} className={classes.myInput} {...props}/>
        
    );
})

export default MyInputTextLong;
