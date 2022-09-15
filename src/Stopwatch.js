import React, { useEffect, useState } from 'react';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        let interval = null;

        if (timerOn) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!timerOn) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timerOn]);
    return (
        <div>
            <h2>Stopwatch</h2>
            <div style={{ marginBottom: '20px' }}>
                <span style={{fontSize:'22px', color:'purple'}}>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span style={{fontSize:'22px', color:'purple'}}>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span style={{fontSize:'22px', color:'purple'}}>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>

            <div>
                <button style={{marginRight:'10px', width:'75px', height:'25px'}} onClick={() => setTimerOn(true)}>Start</button>

                <button style={{marginRight:'10px', width:'75px', height:'25px'}} onClick={() => setTimerOn(false)}>Stop</button>

                <button style={{marginRight:'10px', width:'75px', height:'25px'}} onClick={() => setTimerOn(true)}>Resume</button>

                <button style={{width:'75px', height:'25px'}} onClick={() => setTime(0)}>Reset</button>
            </div>
        </div>
    );
};

export default Stopwatch;