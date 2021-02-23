import { useState, useEffect } from 'react';
import Button from './menuButton';

export default props =>{

    const [classes, setClasses] = useState(["menu btn active", "menu btn"]);



    const handleClick = (f) => {
        if(classes[0] === "menu btn active") {
            setClasses(["menu btn", "menu btn active"]);
        } else {
            setClasses(["menu btn active", "menu btn"]);
        }
        
        f()
    }

    return(
        <div className="menu-container">
            <Button classes={classes[0]} btnName="Pomodoro" onClick={() => {handleClick(props.clickPomodoro)}}></Button>
            <Button classes={classes[1]} btnName="Break" onClick={() => { handleClick(props.clickBreak) }}></Button>
        </div>
    )
}