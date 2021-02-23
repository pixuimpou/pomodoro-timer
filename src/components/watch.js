import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import alertSound from '../alert.mp3';
import Menu from './menu';

const Watch = (props) => {
    let pomodoro = 1500;
    let pomodoroBreak = 300;

    const [initialTime, setInitialTime] = useState(pomodoro);
    const [time, setTime] = useState(initialTime);
    const [play, setPlay] = useState(false);
    const [alert, setAlert] = useSound(alertSound);
    const [playClass, setPlayClass] = useState(["btn play", "btn stop active"]);

    let minutes = parseInt(time / 60);
    let seconds = parseInt(time % 60);
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    useEffect(() => {
        let interval = null;
        setAlert.stop();
        

        if (play && time > 0) {
            setPlayClass(["btn play active", "btn stop"]);
            interval = setInterval(() => {

                if (time <= 0) {

                    clearInterval();
                    setPlay(false);

                }

                setTime(prevTime => prevTime - 1);

            }, 1000)
        } else {
            setPlayClass(["btn play", "btn stop active"]);
            clearInterval(interval);
        }

        if (time <= 0) {
            alert();
        }

        return () => clearInterval(interval);
    }, [play, time])

    useEffect(() => {
        setTime(initialTime);
        setAlert.stop();
    }, [initialTime])
       
    return (
        <div className="container">
            <Menu clickPomodoro={() => setInitialTime(pomodoro)} clickBreak={() => setInitialTime(pomodoroBreak)}></Menu>
            <div className="watch-container">
                <div className="display">{`${minutes}:${seconds}`}</div>
                <div className="buttons-container">
                    <div className={playClass[0]} onClick={() => setPlay(true)}>Play</div>
                    <div className={playClass[1]} onClick={() => setPlay(false)}>Pause</div>
                    <div className="btn reset" onClick={() => setTime(initialTime)}>Reset</div>
                </div>    
            </div>
        </div>       
    )
}

export default Watch;