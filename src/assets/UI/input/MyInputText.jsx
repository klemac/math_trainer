import React from 'react';
import classes from './MyInputText.module.css'

const MyInputText = React.forwardRef((props, ref) => {
    return (
        <input name='happy' ref={ref} className={classes.myInput} {...props}/>
        
    );
})

export default MyInputText;
